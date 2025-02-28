import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function TriIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 13 12" fill="none">
      <Path
        d="M1.28 11.5h11M5.51 7.75h6.77M7.41 4h4.87M2.76.5h9.52"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
