import {
    View,
    Image,
    Text,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../constants';
import { ProductImageprops, ProductProps } from '../types';

type AvataProps = {
    image: ProductImageprops
}

const CARD_WIDTH = SIZES.width;
const CARD_HEIGHT = SIZES.height * 0.45;

export const CarouselCard = ({ image: { avatar } }: AvataProps) => {

    return (
        <View
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
            }}
        >
            <Image
                source={avatar}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                resizeMode='contain'
            />
        </View>
    )
}

export default CarouselCard;