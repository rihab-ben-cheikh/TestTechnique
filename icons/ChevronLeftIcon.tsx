import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function ChevronLeftIcon(props: IconProps) {
  const {size, color} = useIcon(props);

  return (
    <Svg width={size} height={size} viewBox="0 0 27 26" fill="none">
      <Path
        d="M13.39.5L.89 13l12.5 12.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.39.5L.89 13l12.5 12.5M25.89 18l-5-5 5-5M20.89 13H8.39M13.39 25.5V18M13.39 8V.5M25.89 8h-12.5M25.89 18h-12.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.39.5L.89 13l12.5 12.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.39.5L.89 13l12.5 12.5M25.89 18l-5-5 5-5M20.89 13H8.39M13.39 25.5V18M13.39 8V.5M25.89 8h-12.5M25.89 18h-12.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
