import { View, Text } from "tamagui";

type ImageTextProps = {
    Image: React.ElementType;
    text: string;
}

export default function ImageText(
    { Image, text }: ImageTextProps
) {
    return (
        <>
            <View style={{ marginTop: 30 }}>
                <Image height={300} tvParallaxProperties={undefined} />
            </View>
            <Text fontWeight={"bold"} text={"center"} mt={20} fontSize={16}>{text}</Text>
        </>
    )
}