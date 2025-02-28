import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function SearchIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
      <Path
        d="M16.8 19a9 9 0 100-18 9 9 0 000 18zM22.58 8.49a6 6 0 01-2.15 6.26M17.739 15.86a6.018 6.018 0 01-.84.08"
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        d="M9.349 15.03l-8 8.06a1.7 1.7 0 002.36 2.4l8.06-8"
        stroke={color}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}
