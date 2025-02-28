import {StyleSheet} from 'react-native';
import {spacing} from '../../assets/spacing';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
  },
  headerContainer: {
    gap: spacing.m,
    alignItems: 'center',
    marginTop: spacing.s,
  },
  listHeaderComponent: {
    flexDirection: 'row',
    gap: 5,
  },
  indexMarker: {
    borderColor: colors.softCyan,
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    width: 8,
  },
});
