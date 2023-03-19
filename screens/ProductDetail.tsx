import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native'
import EntypoIcons from '@expo/vector-icons/Entypo';
import AntDesignIcons from '@expo/vector-icons/AntDesign';
import IonicIcons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants'
import { OrderItemProps, ProductProps, StackNavigationProps } from '../types';
import { CarouselCard, TextFilter, AppContext } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

const scrollX = new Animated.Value(0);

const ProductDetail = ({ navigation, route }: StackNavigationProps) => {
  const { addToCart, favourite,editFavorite } = useContext(AppContext)
  let { product } = route.params;
  const [productDetails, setProductDetails] = useState<ProductProps>({} as ProductProps)
  const [orderItems, setOrderItems] = useState<OrderItemProps[]>([]);

  useEffect(() => {
    setProductDetails(product)
  }, [])

  function renderHeader() {
    const { id } = productDetails
    return (
      <View
        style={{
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : SIZES.radius,
          width: SIZES.width,
          flexDirection: 'row',
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
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
            <EntypoIcons
              name='chevron-thin-left'
              size={SIZES.padding * 0.85}
              color={COLORS.black}
            />
          </TouchableOpacity>

          {/* right title */}
          <TouchableOpacity
            onPress={() => editFavorite(productDetails)}
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
            <AntDesignIcons
              name='hearto'
              size={SIZES.padding * 0.85}
              color={getFavorite(id) ? COLORS.red : COLORS.gray}
            />
          </TouchableOpacity>

        </View>

      </View>

    )
  }

  function renderMiddleSection() {

    const {
      name,
      calories,
      description,
      price,
      id,
      images
    } = productDetails
    return (
      <View
        style={{
          marginTop: SIZES.radius,
        }}
      >

        {/* photo carousel */}
        {photoCarousel()}

        <View
          style={{
            flex: 1,
            elevation: 5,
            marginTop: SIZES.radius,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            backgroundColor: COLORS.white,

          }}
        >

          <View style={{
            width: SIZES.padding * 1.5,
            height: SIZES.base * 0.5,
            backgroundColor: COLORS.gray,
            borderRadius: SIZES.padding,
            marginTop: SIZES.radius,
            alignSelf: 'center'
          }}
          />

          <View
            style={{
              marginHorizontal: SIZES.padding,
              marginTop: SIZES.padding,
              marginBottom: SIZES.padding * 6
            }}
          >

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >

                <IonicIcons
                  name='star-sharp'
                  size={SIZES.padding * 0.85}
                  color={COLORS.orange}
                />

                <Text
                  style={{
                    marginLeft: SIZES.radius * 0.5,
                    marginTop: SIZES.radius * 0.5
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      ...FONTS.semiBoldFont,
                      lineHeight: 18,
                      color: COLORS.gray_2,

                    }}
                  >5.0</Text>

                  <Text
                    style={{
                      fontSize: 14,
                      ...FONTS.semiBoldFont,
                      lineHeight: 18,
                      color: COLORS.gray,
                    }}
                  >{` (2K)`}</Text>
                </Text>


              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >

                <IonicIcons
                  name='md-flame-sharp'
                  size={SIZES.padding * 0.85}
                  color={COLORS.orange}
                />

                <Text
                  style={{
                    fontSize: 16,
                    ...FONTS.semiBoldFont,
                    lineHeight: 18,
                    color: COLORS.gray_2,
                    marginLeft: SIZES.radius * 0.5,
                    marginTop: SIZES.radius * 0.5
                  }}
                >{`${calories} Cal`}</Text>

              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >

                <MaterialCommunityIcons
                  name='truck'
                  size={SIZES.padding * 0.85}
                  color={COLORS.red}
                />

                <Text
                  style={{
                    fontSize: 16,
                    ...FONTS.semiBoldFont,
                    lineHeight: 18,
                    color: COLORS.gray_2,
                    marginLeft: SIZES.radius * 0.5,
                    marginTop: SIZES.radius * 0.5
                  }}
                >Fri 26.12</Text>


              </View>

            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 1.5
              }}
            >

              <Text
                style={{
                  fontSize: 26,
                  ...FONTS.semiBoldFont,
                  lineHeight: 28,
                  color: COLORS.black,
                }}
              >{`${name}`}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >

                <TouchableOpacity
                  onPress={() => editOrder("-", id, price, "")}
                  style={{
                    backgroundColor: COLORS.gray,
                    elevation: 5,
                    width: SIZES.padding,
                    height: SIZES.padding,
                    borderRadius: SIZES.padding * 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesignIcons
                    name='minus'
                    size={SIZES.padding * 0.65}
                    color={COLORS.white}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 12,
                    ...FONTS.semiBoldFont,
                    lineHeight: 14,
                    color: COLORS.black,
                    marginHorizontal: SIZES.radius * 0.75
                  }}
                >{`${getItemQty(id)}kg`}</Text>

                <LinearGradient
                  colors={[COLORS.orange, '#CC5500', COLORS.red]}
                  style={{
                    backgroundColor: COLORS.red,
                    elevation: 5,
                    width: SIZES.padding,
                    height: SIZES.padding,
                    borderRadius: SIZES.padding * 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => editOrder("+", id, price, images[0].avatar)}
                  >
                    <IonicIcons
                      name='add'
                      size={SIZES.padding * 0.65}
                      color={COLORS.white}
                    />
                  </TouchableOpacity>

                </LinearGradient>

              </View>

            </View>

            <View
              style={{
                justifyContent: 'space-between',
                marginTop: SIZES.padding
              }}
            >
              <TextFilter
                text={description}
                numberOfLines={3}
                style={{
                  fontSize: 16,
                  lineHeight: 26,
                }}
              />
            </View>

          </View>

        </View>

      </View>
    )
  }

  function renderBottomSection() {
    const { id } = productDetails
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.radius
        }}
      >

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: SIZES.padding,
            alignItems: 'center',

          }}
        >

          <View
            style={{
              alignItems: 'center'
            }}
          >

            <Text
              style={{
                fontSize: 14,
                ...FONTS.regularFont,
                lineHeight: 16,
                color: COLORS.gray_2,

              }}
            >Total Price</Text>

            <Text
              style={{
                fontSize: 20,
                ...FONTS.boldFont,
                lineHeight: 22,
                color: COLORS.black,
                marginTop: SIZES.radius * 0.5
              }}
            >{`$${getItemTotal(id)}`}</Text>

          </View>

          {getItemQty(id) > 0 ?
            <LinearGradient
              colors={[COLORS.orange, '#FFAC1C', '#FFBF00']}
              style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: SIZES.padding * 3
              }}
            >
              <TouchableOpacity
                onPress={() => addItemToCart(id)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    ...FONTS.semiBoldFont,
                    lineHeight: 22,
                    color: COLORS.white,
                    marginHorizontal: SIZES.padding
                  }}
                >Add to Cart</Text>
              </TouchableOpacity>

            </LinearGradient>
            :
            <View
              style={{
                backgroundColor: COLORS.gray,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: SIZES.padding * 3
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  ...FONTS.semiBoldFont,
                  lineHeight: 22,
                  color: COLORS.white,
                  marginHorizontal: SIZES.padding
                }}
              >Add to Cart</Text>
            </View>
          }

        </View>

      </View>
    )
  }

  function photoCarousel() {

    const { images } = productDetails

    /*animated dots */
    function renderDots() {

      const dotPosition = Animated.divide(scrollX, SIZES.width)

      return (
        <View style={{
          height: 30
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: SIZES.padding
            }}
          >
            {images?.map((item, index) => {

              const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
              })

              const dotSize = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [SIZES.padding, SIZES.padding * 1.3, SIZES.padding],
                extrapolate: "clamp"
              })

              const dotHeight = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [SIZES.base * 0.5, SIZES.base * 0.6, SIZES.base * 0.5],
                extrapolate: "clamp"
              })

              const dotColor = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [COLORS.gray_2, COLORS.black, COLORS.gray_2],
                extrapolate: "clamp"
              })

              return (
                <Animated.View
                  key={`dot-${index}`}
                  style={{
                    opacity: opacity,
                    borderRadius: SIZES.radius,
                    marginHorizontal: 2,
                    width: dotSize,
                    height: dotHeight,
                    backgroundColor: dotColor
                  }}
                />
              )
            })}
          </View>
        </View>
      )
    }

    return (
      <View>
        <Animated.ScrollView
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
            images?.map((item, index) => {
              return (
                <CarouselCard key={index} image={item} />
              )
            })
          }

        </Animated.ScrollView>

        {renderDots()}
      </View>
    )
  }

  function editOrder(action: string, productId: number, price: number, avatar: any) {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.id == productId)

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1
        item[0].qty = newQty
        item[0].total = item[0].qty * price
      } else {
        const newItem = {
          id: productId,
          qty: 1,
          price: price,
          total: price,
          avatar: avatar
        }
        orderList.push(newItem)
      }

      setOrderItems(orderList)
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1
          item[0].qty = newQty
          item[0].total = newQty * price
        }
      }

      setOrderItems(orderList)
    }
  }

  function getItemQty(productId: number) {
    let orderItem = orderItems.filter(a => a.id == productId)

    if (orderItem.length > 0) {
      return orderItem[0].qty
    }

    return 0
  }

  function getItemTotal(productId: number) {
    let orderItem = orderItems.filter(a => a.id == productId)
    let total = 0

    if (orderItem.length > 0) {
      total = orderItem[0].qty * orderItem[0].price
      return total.toFixed(2)
    }

    return total.toFixed(2)
  }

  function addItemToCart(productId: number) {
    let orderItem = orderItems.filter(a => a.id == productId)

    if (orderItem.length > 0) {
      addToCart(orderItem[0])
      setOrderItems([])
    } else {
      //tell user items need to be addes
    }
  }

  function getFavorite(productId: number) {
    let favItem = favourite.filter(a => a.id == productId)
    if (favItem.length > 0) {
      return true
    } else {
      return false
    }
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

      {/* bottom section */}
      {renderBottomSection()}

    </SafeAreaView>
  )
}

export default ProductDetail