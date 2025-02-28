import {View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
interface SeparatorProps {
  width: number;
  isAtCenter?: boolean;
}
export default function Separator(props: SeparatorProps) {
  const {width, isAtCenter} = props;
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: width,
        height: 1.1,
        backgroundColor: colors.white,
        alignSelf: isAtCenter ? 'center' : 'flex-start',
      }}
    />
  );
}
