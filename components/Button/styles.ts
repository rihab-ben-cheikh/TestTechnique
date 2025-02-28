import {StyleSheet} from 'react-native';
import {sizes} from '../../assets/sizes';
import {borderRadius} from '../../assets/borderRadius';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    height: sizes.buttonHeight,
    justifyContent: 'center',
    borderRadius: borderRadius.button,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    width: '100%',
  },
});
