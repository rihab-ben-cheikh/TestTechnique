import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function StopWatchIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 27" fill="none">
      <Path
        d="M20.56 14.91a8.44 8.44 0 01-16.87 0M23.2 14.91a11.1 11.1 0 11-22.2 0 11.1 11.1 0 0122.2 0zM19.09 2.86L17.68 5.3M20.54 3.69l-2.89-1.66M5.19 2.84L6.6 5.28M3.74 3.68l2.89-1.67M12.12 3.81V1M10.32 1h3.61M12.12 14.91l3.61-5.79M12.12 14.91l-4.63-.8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
