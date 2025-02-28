import React from 'react';

import {
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {SimpleSearchIcon} from '../../icons';
import Text from '../Text';
import {styles} from './styles';

export type SelectInputProps = {
  rightIcon?: React.ReactNode | undefined;
  leftIcon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
  error?: string | undefined;
  nativeProps?: TextInputProps | undefined;
  onChangeText?: (t: string) => void | undefined;
};

export default function SearchInput(props: SelectInputProps) {
  const {label, leftIcon, rightIcon, nativeProps, onChangeText} = props;

  const renderLabel = () => {
    if (label) {
      if (typeof label === 'string') {
        return <Text text={label} style={{}} />;
      }
      return label;
    }
    return null;
  };

  return (
    <View style={styles.parent}>
      {renderLabel()}
      <View style={styles.container}>
        {leftIcon && leftIcon}
        <View style={styles.textInputContainer}>
          <RNTextInput
            onChangeText={onChangeText}
            placeholder={nativeProps?.placeholder || 'Type something'}
            placeholderTextColor={colors.grey}
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity>
          {rightIcon ? (
            rightIcon
          ) : (
            <SimpleSearchIcon color={colors.grey} size={'tiny'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
