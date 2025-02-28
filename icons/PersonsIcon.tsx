import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function PersonsIcon(props: IconProps) {
  const {size, color, strokeWidth} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 15 18" fill="none">
      <Path
        d="M3.66 12.852v2.09c-.695.914-1.639 1.498-2.66 1.645M6.594 12.852v2.263s1.229 1.89 3.905 1.832M12.286 9.973c0 .083-.032 1.929 0 1.974.491.851 1.211 1.471 2.038 1.755M10.094 9.973v1.974M11.21.867c.835.024 1.628.44 2.21 1.161.583.721.91 1.69.909 2.697a7.123 7.123 0 01-.867 3.37c-.554.999-1.336 1.78-2.251 2.25M8.348 3.233c.227-.694.621-1.29 1.131-1.712A2.741 2.741 0 0111.21.867m0 9.503A4.257 4.257 0 019.69 9.194"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.113 3.79c.834.023 1.627.44 2.21 1.16.582.721.909 1.69.908 2.697 0 2.16-1.192 5.587-3.118 6.43"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.114 14.104c-1.927-.849-3.134-4.276-3.124-6.43 0-1.009.327-1.977.91-2.699.585-.72 1.379-1.137 2.214-1.159M10.082 11.941a3.128 3.128 0 01-1.197 1.1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
