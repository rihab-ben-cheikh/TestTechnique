import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function GemIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M18.47 1l-5.75 5.75L6.97 1 1.22 6.75 12.72 24l11.5-17.25L18.47 1zM1.22 6.75h23"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M8.41 6.75L12.72 24l4.32-17.25"
        stroke={color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
