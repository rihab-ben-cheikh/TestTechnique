import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {spacing} from '../../assets/spacing';
import {sizes} from '../../assets/sizes';

export const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flex: 1,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl * 2.2,
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
    borderRadius: 2.5,
    borderWidth: 1,
    height: 5,
    width: 5,
  },
});
