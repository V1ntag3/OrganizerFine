import React from 'react';
import { Text } from 'tamagui'
interface TitleProps {
    text: string;
    style?: object;
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
    return (
        <Text p={10} paddingInline={0} fontSize={24} fontWeight={900} style={[style]}>
            {text}
        </Text>
    );
};

export default Title;
