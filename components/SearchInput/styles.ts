import {StyleSheet} from 'react-native';
import {sizes} from '../../assets/sizes';
import {colors} from '../../assets/colors';
import {spacing} from '../../assets/spacing';
import {borderRadius} from '../../assets/borderRadius';

export const styles = StyleSheet.create({
  parent: {
    gap: spacing.m,
    width: '100%',
  },
  container: {
    borderRadius: borderRadius.TextInput,
    backgroundColor: colors.lightBlack,
    height: sizes.textInputHeight,
    paddingHorizontal: spacing.xs,
    borderColor: colors.grey,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
    width: '100%',
  },
  textInputContainer: {
    borderWidth: 0,
    flex: 1,
  },
  textInput: {
    fontFamily: 'FiraSans Light',
    fontSize: 12,
    color: colors.grey,
  },
});
