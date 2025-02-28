import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function ExitIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
      <Path
        d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1 1 6.596 1 13.5 6.596 26 13.5 26zM17.53 9.52l-7.99 7.97M9.55 9.488l7.99 7.97"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
