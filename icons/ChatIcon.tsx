import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function ChatIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M12.72 1c-2.187 0-4.329.628-6.17 1.81L1.22 1l2.17 4.79A11.49 11.49 0 1012.72 1zM17.15 16.92H8.3M17.15 12.5H8.3M17.15 8.08H8.3"
        stroke={color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
