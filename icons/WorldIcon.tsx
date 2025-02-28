import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function WorldIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M20.91 4.36a14.519 14.519 0 01-3.62 1.78 13.83 13.83 0 010 13 13.858 13.858 0 013.62 1.78 11.33 11.33 0 000-16.51v-.05zM8.24 6.14a14.52 14.52 0 01-3.62-1.78 11.33 11.33 0 000 16.51 13.86 13.86 0 013.62-1.78 13.83 13.83 0 010-12.95z"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M8.24 6.14a13.83 13.83 0 000 13 14.362 14.362 0 014.52-.73V6.86a14.36 14.36 0 01-4.52-.72z"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M17.29 6.14a14.38 14.38 0 01-4.53.72v11.5c1.54-.001 3.069.245 4.53.73a13.83 13.83 0 000-12.95z"
        stroke={color}
        strokeLinejoin="round"
      />
      <Path
        d="M12.8 1.11h-.07a11.83 11.83 0 00-8.12 3.25 14.76 14.76 0 003.63 1.78 14.36 14.36 0 004.52.72 14.38 14.38 0 004.53-.72 14.52 14.52 0 003.62-1.78 11.79 11.79 0 00-8.11-3.25zM17.29 19.09a14.39 14.39 0 00-9 0 14.078 14.078 0 00-3.63 1.78 11.82 11.82 0 008.12 3.24h.07a11.78 11.78 0 008.11-3.24 13.86 13.86 0 00-3.67-1.78zM1.05 12.61h23.43"
        stroke={color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
