import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {spacing} from '../../assets/spacing';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    gap: spacing.m,
    flex: 1,
  },
  searchInputContainer: {
    paddingHorizontal: spacing.xl * 2,
  },
});
