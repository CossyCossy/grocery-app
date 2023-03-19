import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { CategoryProps } from '../types'

type category = {
    item: CategoryProps,
    selected: boolean,
    handleChange: () => void
}
export const CategoryCard = ({
    item: {
        name,
    },
    selected,
    handleChange
}: category) => {

    return (
        <TouchableOpacity
            onPress={handleChange}
            style={{
                marginLeft: SIZES.radius * 1.3,
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: selected ? 18 : 16,
                    ...FONTS.semiBoldFont,
                    lineHeight: selected ? 20 : 18,
                    color: selected ? COLORS.black : COLORS.gray
                }}
            >{name}</Text>

            {selected &&
                <View style={{
                    width: SIZES.padding,
                    height: SIZES.base * 0.5,
                    backgroundColor: COLORS.red,
                    borderRadius: SIZES.padding,
                    marginTop: SIZES.radius * 0.65,

                }}
                />
            }

        </TouchableOpacity>
    )
}

export default CategoryCard;