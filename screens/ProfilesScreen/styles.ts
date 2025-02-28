import {StyleSheet} from 'react-native';

import {sizes} from '../../assets/sizes';
import {spacing} from '../../assets/spacing';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: spacing.m,
    height: sizes.headerHeight,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: sizes.buttonHeight,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'FiraSans Regular',
    fontSize: 11,
  },
});
