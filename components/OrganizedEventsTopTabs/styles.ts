import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {spacing} from '../../assets/spacing';
import {sizes} from '../../assets/sizes';

export const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flex: 1,
    gap: spacing.xl,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.l * 2.5,
    marginVertical: spacing.s,
    height: sizes.headerHeight,
  },
  iconsContainer: {
    marginTop: spacing.s,
    alignItems: 'center',
    height: sizes.headerHeight,
    gap: 5,
  },
  indexMarker: {
    borderColor: colors.softCyan,
    backgroundColor: colors.softCyan,
    borderRadius: 2,
    borderWidth: 1,
    height: 4,
    width: 4,
  },
  text: {
    fontFamily: 'FiraSansCondensed Regular',
  },
  searchInputContainer: {
    paddingHorizontal: spacing.xl * 2,
  },
});
