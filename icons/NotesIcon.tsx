import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function NotesIcon(props: IconProps) {
  const {size, color} = useIcon(props);

  return (
    <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
      <Path
        d="M1 22.87V6.9M1 22.87a3.14 3.14 0 006.27 0M22.87 26A3.13 3.13 0 0026 22.87M26 22.87V1H7.27v21.87M1 6.9h6.27"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.27 5h-5v5h5V5zM19.27 10h2.63M11.27 14H21.9M11.27 18H21.9M11.27 22H21.9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
