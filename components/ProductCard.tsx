import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ProductProps } from '../types';

type product = {
    item: ProductProps
    handleViewProduct ?: () => void
    handleAddToCart ?: () => void
}
export const ProductCard = ({
    item: {
        images,
        name,
        calories,
        price
    },
    handleViewProduct,
    handleAddToCart
}: product) => {

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                elevation: 5,
                width: SIZES.width * 0.45,
                marginLeft: SIZES.radius,
                marginTop: SIZES.radius,
                marginBottom: SIZES.radius
            }}
        >

            <TouchableOpacity
            onPress={handleViewProduct}
                style={{
                    alignItems: 'center'
                }}
            >
                <Image
                    resizeMode='contain'
                    source={images[0]?.avatar}
                    style={{
                        width: SIZES.width * 0.45,
                        height: SIZES.width * 0.4,
                        borderTopLeftRadius: SIZES.radius,
                        borderTopRightRadius: SIZES.radius,
                    }}
                />
            </TouchableOpacity>

            <View style={{
                marginHorizontal: SIZES.radius,
                marginTop: SIZES.radius,
                marginBottom: SIZES.radius
            }}>
                <Text
                    style={{
                        fontSize: 16,
                        ...FONTS.boldFont,
                        lineHeight: 18,
                        color: COLORS.black
                    }}
                >{name}</Text>

                <Text
                    style={{
                        fontSize: 12,
                        ...FONTS.regularFont,
                        lineHeight: 15,
                        color: COLORS.gray_2,
                        marginTop: SIZES.radius * 0.5
                    }}
                >{`${calories} Cal`}</Text>

                <View
                    style={{
                        marginTop: SIZES.radius * 0.5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text
                            style={{
                                fontSize: 14,
                                ...FONTS.boldFont,
                                lineHeight: 16,
                                color: COLORS.orange
                            }}
                        >{`$${price.toFixed(2)}`}</Text>
                        <Text
                            style={{
                                fontSize: 10,
                                ...FONTS.semiBoldFont,
                                lineHeight: 12,
                                color: COLORS.gray_2
                            }}
                        >/kg</Text>
                    </View>

                    <LinearGradient
                        colors={[COLORS.orange, '#CC5500', COLORS.red]}
                        style={{
                            backgroundColor: COLORS.red,
                            elevation: 5,
                            width: SIZES.padding * 1.1,
                            height: SIZES.padding * 1.1,
                            borderRadius: SIZES.padding * 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                          onPress={handleAddToCart}
                        >
                            <Ionicons
                                name='add'
                                size={SIZES.padding * 0.75}
                                color={COLORS.white}
                            />
                        </TouchableOpacity>

                    </LinearGradient>


                </View>
            </View>

        </View>
    )
}

export default ProductCard;