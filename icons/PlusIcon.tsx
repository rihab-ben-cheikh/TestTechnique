import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function PlusIcon(props: IconProps) {
  const {size, color, strokeWidth} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 5 5" fill="none">
      <Path
        d="M2.5 5V0M5 2.5H0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}
