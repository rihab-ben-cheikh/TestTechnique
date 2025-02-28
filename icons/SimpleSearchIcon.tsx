import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function SimpleSearchIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 18 19" fill="none">
      <Path
        d="M7.32 11.77L.5 18.17M17.5 7.382a6 6 0 11-6-6.21 6.09 6.09 0 016 6.21z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
