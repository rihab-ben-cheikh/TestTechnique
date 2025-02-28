import {Dimensions, StyleSheet} from 'react-native';
import {spacing} from '../../assets/spacing';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - spacing.s * 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s,

    marginRight: spacing.s,
    marginLeft: spacing.s,
  },
  personalInfoContainer: {
    width: Dimensions.get('screen').width / 2 - spacing.s * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherInfoContainer: {
    width: 100,
  },
  mindSetInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    justifyContent: 'space-between',
    width: 100,
    marginBottom: spacing.s,
  },
  name: {
    fontFamily: 'AlegreyaSC Medium',
  },
  mindSetInfoTitle: {
    fontFamily: 'FiraSans Regular',
  },
  mindSetInfoDescription: {
    fontFamily: 'FiraSansCondensed Medium',
    color: colors.grey,
    fontSize: 11,
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
