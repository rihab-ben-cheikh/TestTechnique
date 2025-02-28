import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {sizes} from '../../assets/sizes';
import {spacing} from '../../assets/spacing';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: sizes.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    color: colors.grey,
    textAlign: 'center',
    fontFamily: 'Alegreya SC',
    fontWeight: '400',
    fontSize: 14,
  },
});
