import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import normalize from '../normalize';
import {colors} from '../assets/colors';

export type IconSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | number;

export interface IconProps {
  color?: string | undefined;
  fillColor?: string | undefined;
  size?: IconSize | undefined;
  strokeWidth?: number | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}

function useIcon(props: IconProps) {
  const size = React.useMemo(() => {
    switch (props.size) {
      case 'tiny':
        return normalize(14);
      case 'small':
        return normalize(18);
      case 'medium':
        return normalize(20);
      case 'large':
        return normalize(24);
      case 'xLarge':
        return normalize(30);
      default:
        if (typeof props.size === 'number') {
          return normalize(props.size);
        } else {
          return normalize(20);
        }
    }
  }, [props.size]);

  const color = React.useMemo(
    () => (props.color ? props.color : colors.white),
    [props.color],
  );

  const fillColor = React.useMemo(
    () => (props.fillColor ? props.fillColor : colors.white),
    [props.fillColor],
  );

  const strokeWidth = React.useMemo(
    () => props.strokeWidth || normalize(1.5),
    [props.strokeWidth],
  );

  return {size, color, strokeWidth, style: props.style, fillColor};
}

export default useIcon;
