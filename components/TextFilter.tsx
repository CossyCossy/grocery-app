import { useState, useCallback } from 'react';
import {
    Text,
    View
} from 'react-native';
import { COLORS, FONTS } from '../constants';
import { TextFilterProps } from '../types';

const TextFilter = ({
    text,
    numberOfLines ,
    style
}: TextFilterProps) => {

    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);

    const toggleNumberOfLines = () => {
        setTextShown(!textShown)
    }

    const onTextLayout = useCallback((e: any) => {
        setLengthMore(e.nativeEvent.lines.length >= numberOfLines)
    },[])

    return (
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', ...style }}>
              <Text
                onTextLayout = {onTextLayout}
                numberOfLines = {textShown ? undefined : numberOfLines ? numberOfLines  : null}
                style = {{
                    ...FONTS.regularFont,
                     color : COLORS.gray_2, 
                   ...style
                }}
            >
                {text}
            </Text>
            {
                lengthMore ? <Text
                    onPress = {toggleNumberOfLines}
                    style = {{
                        color: COLORS.orange,
                        ...FONTS.semiBoldFont,
                        ...style
                    }}
                >{textShown ? 'Read Less' : 'Read More'}</Text>
                :null
            }
        </View>
    )
}

export default TextFilter