import type { IconProps } from '@tamagui/helpers-icon'
import { Href, Link } from 'expo-router';
import { Button, Text } from "tamagui";

type ButtonMenuSideProps = {
  text: string;
  onPress: () => void;
  Icon: React.ComponentType<IconProps>;
};

function ButtonMenuSide({ text, onPress, Icon }: ButtonMenuSideProps) {
  return (
      <Button
        width={"90%"}
        borderBottomRightRadius={10}
        borderTopRightRadius={10}
        borderBottomLeftRadius={0}
        borderTopLeftRadius={0}
        onPress={onPress}
        justify={"flex-start"}
        paddingInline={0}
      >
        <Icon scale={1} m={10}  />
        <Text fontWeight={500} fontSize={16} $theme-dark={{ color: "white" }}>
          {text}
        </Text>
      </Button>
  );
}

export default ButtonMenuSide;
