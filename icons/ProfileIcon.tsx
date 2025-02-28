import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function ProfileIcon(props: IconProps) {
  const {size, color} = useIcon(props);

  return (
    <Svg width={size} height={size} viewBox="0 0 24 27" fill="none">
      <Path
        d="M10 15.32v.74c0 1.54-2.08 2.91-3.88 3.42a2.39 2.39 0 00-1.74 2.22M13.41 15.32v.74c0 1.54 2.08 2.91 3.88 3.42a2.41 2.41 0 011.74 2.22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7 7.05a3.66 3.66 0 00-3.56 3.78c0 3.41 3.56 6.09 3.56 6.09s3.57-2.68 3.57-6.09a3.67 3.67 0 00-3.57-3.78zM8.14 18.58l3.57 2.2 3.56-2.2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.65 7.25L11.82 1 1 7.25v12.5L11.82 26l10.83-6.25V7.25z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
