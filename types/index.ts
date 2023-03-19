import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
    ViewStyle,
    TextStyle
} from 'react-native';

export type StackParamList = {
    ProductDetail: { product: ProductProps };
    Home: undefined
};

export type StackNavigation = StackNavigationProp<StackParamList>;
export type RouteNavigation = RouteProp<StackParamList, "ProductDetail">

export type StackNavigationProps = {
    navigation: StackNavigation;
    route: RouteNavigation
};

export type CategoryProps = {
    id: number
    name: string
}

export type ProductProps = {
    id: number
    name: string
    calories: number
    price: number
    description: string
    images: ProductImageprops[]
}

export type ProductImageprops = {
    id: number
    avatar: any
}

export type TextFilterProps = {
    text: string
    numberOfLines: any
    style?: ViewStyle | TextStyle
}

export type OrderItemProps = {
    id: number,
    qty: number,
    price: number,
    total: number,
    avatar?: any
}

export type ContextProps = {
    cart: OrderItemProps[]
    favourite: ProductProps[]
    addToCart: (cartItem: OrderItemProps) => void
    editFavorite:  (favItem : ProductProps) => void
}









