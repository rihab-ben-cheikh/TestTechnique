import React from 'react';

import {
  ActivityIndicator,
  GestureResponderEvent,
  TextProps,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import Text from '../Text';
import {styles} from './styles';

type ButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  size?: number | undefined;
  backgroundColor?: string | undefined;
  textProps?: TextProps | undefined;
} & ViewProps;

export default function Button(props: ButtonProps) {
  const {onPress, text, loading, disabled, textProps} = props;

  return (
    <TouchableOpacity
      disabled={disabled ? disabled : loading}
      style={styles.container}
      {...props}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text text={text} style={textProps} />
      )}
    </TouchableOpacity>
  );
}
