import {View, Text as RNText, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
type TextProps = {
  text: string;
  numberOfLines?: number | undefined;
  style?: StyleProp<TextStyle>;
};
export default function Text(props: TextProps) {
  const {text, style, numberOfLines} = props;
  return (
    <View>
      <RNText
        style={[styles.defaultTexStyle, style]}
        numberOfLines={numberOfLines}>
        {text}
      </RNText>
    </View>
  );
}
