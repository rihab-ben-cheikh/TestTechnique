import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import useIcon, {IconProps} from '../hooks/useIcon';

export default function BurgerMenuIcon(props: IconProps) {
  const {size, color} = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 27 26" fill="none">
      <Path
        d="M14.77 12v2h-2v-2h2zm1-1h-4v4h4v-4zM25.77 12v2h-2v-2h2zm1-1h-4v4h4v-4zM3.77 1v2h-2V1h2zm1-1h-4v4h4V0zM14.77 1v2h-2V1h2zm1-1h-4v4h4V0zM3.77 12v2h-2v-2h2zm1-1h-4v4h4v-4zM3.77 23v2h-2v-2h2zm1-1h-4v4h4v-4zM14.77 23v2h-2v-2h2zm1-1h-4v4h4v-4zM25.77 23v2h-2v-2h2zm1-1h-4v4h4v-4zM25.77 1v2h-2V1h2zm1-1h-4v4h4V0z"
        fill={color}
      />
    </Svg>
  );
}
