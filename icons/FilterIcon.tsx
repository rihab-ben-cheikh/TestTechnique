import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function FilterIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 13 12" fill="none">
      <Path
        d="M11.79 2.04h-.76M7.03 2.04H.79M11.79 6H5.5M1.5 6H.79M11.79 9.96h-2.6M5.19 9.96H.79M9.04.5h-.01v3.08h.01V.5zM3.5 4.42v3.15M7.19 8.42v3.08"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
