import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useIcon} from '../hooks';
import {IconProps} from '../hooks/useIcon';

export default function ArrowDownIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 8 8" fill="none">
      <Path
        d="M7.43.32L3.96 2.3.5.29 0 0v.99l.5.3L3.95 3.3l3.48-1.98.5-.29v-1l-.5.29zM7.43 4.32L3.96 6.3.5 4.29l-.5-.3v1l.5.3L3.95 7.3l3.48-1.98.5-.29v-1l-.5.29z"
        fill={color}
      />
    </Svg>
  );
}
