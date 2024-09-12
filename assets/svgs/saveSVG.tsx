import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <G clipPath="url(#clip0_248_3098)" fill="#fff">
        <Path d="M3.574.088C1.793.468.457 1.81.094 3.586.012 3.99 0 5.226 0 15c0 12.076-.023 11.367.357 12.287.557 1.336 1.77 2.32 3.229 2.62C3.99 29.987 5.226 30 15 30c9.773 0 11.01-.012 11.414-.094 1.46-.299 2.672-1.283 3.229-2.619.375-.908.357-.41.357-10.406 0-6.205-.017-9.135-.064-9.246-.077-.211-7.284-7.43-7.53-7.547C22.242.012 21.094 0 13.084.006c-7.547 0-9.193.017-9.51.082zm2.989 4.271c0 2.772.005 2.83.404 3.352.135.182.346.351.592.486l.38.211h9.434l.299-.158c.445-.234.627-.41.85-.82l.199-.37.017-2.595.018-2.59h2.894l3.24 3.24 3.235 3.235v8.713c0 6.234-.017 8.8-.064 9.023a2.615 2.615 0 01-1.975 1.975c-.17.035-.627.064-1.008.064h-.703l-.012-5.871-.017-5.877-.147-.293a2.062 2.062 0 00-.908-.908l-.293-.147H7.002l-.293.14c-.37.188-.727.54-.908.915l-.147.293-.017 5.871-.012 5.877h-.72c-.792 0-1.208-.082-1.688-.328-.61-.305-1.125-1.002-1.278-1.711-.093-.44-.093-21.732 0-22.172.206-.95.95-1.723 1.899-1.957.182-.047.756-.076 1.512-.076l1.213-.006v2.484zm10.312-.14v2.343H8.438V1.876H16.875v2.344zM22.5 22.5v5.625h-15v-11.25h15V22.5z" />
        <Path d="M11.719 19.816a1.733 1.733 0 00-.317.3c-.117.163-.123.228-.123 2.384 0 2.15.006 2.22.123 2.379.188.258.399.387.686.416.375.047.768-.152.926-.457.111-.223.117-.328.1-2.397-.018-2.085-.024-2.168-.141-2.326-.205-.281-.48-.427-.786-.427a.815.815 0 00-.468.128zM17.344 19.817c-.106.076-.252.21-.317.298-.117.159-.123.24-.14 2.332-.018 2.145-.012 2.168.111 2.403.34.591 1.172.61 1.6.029.117-.158.123-.229.123-2.379 0-2.156-.006-2.22-.123-2.385-.205-.28-.48-.427-.785-.427a.815.815 0 00-.47.129z" />
      </G>
      <Defs>
        <ClipPath id="clip0_248_3098">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
