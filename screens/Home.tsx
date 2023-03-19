import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  FlatList
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import EntypoIcons from '@expo/vector-icons/Entypo';
import { COLORS, dummyData, FONTS, SIZES } from '../constants'
import { CategoryCard, ProductCard, AppContext } from '../components';
import { CategoryProps, ProductProps, StackNavigationProps } from '../types';

const scrollX = new Animated.Value(0);

const Home = ({ navigation }: StackNavigationProps) => {
  const { addToCart, cart } = useContext(AppContext)
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps>({} as CategoryProps)

  useEffect(() => {
    setSelectedCategory(dummyData.categories[0])
  }, [])

  function renderHeader() {
    return (
      <View
        style={{
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : SIZES.radius,
          width: SIZES.width,
          flexDirection: 'row'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginTop: SIZES.radius,
            marginBottom: SIZES.radius,
            marginHorizontal: SIZES.radius
          }}>

          {/* left title */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <View>

              <View
                style={{
                  backgroundColor: COLORS.black,
                  width: SIZES.radius * 0.65,
                  height: SIZES.radius * 0.65,
                  borderRadius: SIZES.padding
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2
                }}
              >

                <View
                  style={{
                    backgroundColor: COLORS.orange,
                    width: SIZES.radius * 0.35,
                    height: SIZES.radius * 0.35,
                    borderRadius: SIZES.padding
                  }}
                />

                <View
                  style={{
                    backgroundColor: COLORS.orange,
                    width: SIZES.radius * 0.85,
                    height: SIZES.radius * 0.85,
                    borderRadius: SIZES.padding,
                    marginLeft: 2
                  }}
                />

              </View>

            </View>

            <Text style={{
              marginLeft: 3,
              textAlign: 'center',
              fontSize: 26,
              lineHeight: 30,
              ...FONTS.boldFont,
            }}>

              <Text
                style={{
                  fontSize: 26,
                  ...FONTS.boldFont,
                  lineHeight: 30,
                  color: COLORS.orange
                }}
              >GRO</Text>

              <Text
                style={{
                  fontSize: 26,
                  ...FONTS.boldFont,
                  lineHeight: 30,
                  color: COLORS.black
                }}
              >CERY</Text>
            </Text>


          </View>

          {/* right title */}
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              elevation: 5,
              width: SIZES.padding * 1.6,
              height: SIZES.padding * 1.6,
              borderRadius: SIZES.padding * 3,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Ionicons
              name='ios-basket'
              size={SIZES.padding * 0.85}
              color={COLORS.orange}
            />

            <View
              style={{
                backgroundColor: COLORS.orange,
                elevation: 5,
                width: SIZES.radius,
                height: SIZES.radius,
                borderRadius: SIZES.padding * 3,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: -2
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  ...FONTS.boldFont,
                  lineHeight: 10,
                  color: COLORS.white
                }}
              >{getBasketItemCount()}</Text>
            </View>

          </TouchableOpacity>

        </View>

      </View>

    )
  }

  function renderMiddleSection() {
    return (

      <View>
        {/* search bar */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.gray,
            borderRadius: SIZES.padding * 3,
            marginHorizontal: SIZES.radius,
            marginTop: SIZES.radius
          }}
        >

          <View
            style={{
              marginTop: SIZES.radius,
              marginBottom: SIZES.radius,
              flexDirection: 'row',
              flex: 1,
              marginHorizontal: SIZES.padding
            }}
          >

            <View>
              <Ionicons
                name='md-search-outline'
                size={SIZES.padding}
                color={COLORS.black}
              />
            </View>

            <TextInput
              placeholder={`Search what to buy`}
              autoCapitalize='none'
              style={{
                flex: 1,
                fontSize: 16,
                marginLeft: SIZES.radius,
                ...FONTS.regularFont,
              }}
            />

            <View>
              <EntypoIcons
                name='sound-mix'
                size={SIZES.padding * 0.8}
                color={COLORS.black}
              />
            </View>

          </View>

        </View>

        {/* categories */}
        <View
          style={{
            marginTop: SIZES.padding * 1.5
          }}
        >
          <Animated.ScrollView
            style={{
              marginRight: SIZES.radius
            }}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: scrollX } } }
            ], { useNativeDriver: false })}
          >

            {
              dummyData.categories?.map((item, index) => {
                return (
                  <CategoryCard
                    key={index}
                    item={item}
                    selected={checkIfSelected(item)}
                    handleChange={() => setSelectedCategory(item)}
                  />
                )
              })
            }

          </Animated.ScrollView>
        </View>

        {/* products */}
        <View style={{ marginBottom: SIZES.padding }}>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyData.products}
            keyExtractor={item => `${item?.id}`}
            renderItem={({ item, index }) => {
              return (
                <ProductCard
                  item={item}
                  key={index}
                  handleViewProduct={() => navigation.navigate("ProductDetail", { product: item })}
                  handleAddToCart={() => addItemToCart(item)}
                />
              )
            }}
            contentContainerStyle={{
              backgroundColor: COLORS.white,
            }}
            numColumns={2}
          />
        </View>

      </View>
    )
  }

  function checkIfSelected(category: CategoryProps) {

    if (selectedCategory?.id === category?.id) {
      return true
    } else {
      return false
    }
  }

  const getBasketItemCount = () => {
    let itemCount = cart.reduce((a, b) => a + (b.qty || 0), 0)

    return itemCount
  }

  function addItemToCart(product: ProductProps) {

    const newItem = {
      id: product.id,
      qty: 1,
      price: product.price,
      total: product.price,
      avatar: product.images[0].avatar
    }

    addToCart(newItem)
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >

      {/* render navbar */}
      {renderHeader()}

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {/* middle section */}
        {renderMiddleSection()}
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home