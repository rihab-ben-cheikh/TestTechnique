import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function PersonIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M14.07 14.1v1.24c0 1.74 1.06 3.1 4.1 3.69M10.75 13.85v1.45c0 1.77-1.7 3.2-4 3.76"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 6.37A3.49 3.49 0 009.08 9.9 5.65 5.65 0 0012.5 15a5.65 5.65 0 003.43-5.11 3.49 3.49 0 00-3.43-3.52z"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 24C18.851 24 24 18.851 24 12.5S18.851 1 12.5 1 1 6.149 1 12.5 6.149 24 12.5 24z"
        stroke={color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
