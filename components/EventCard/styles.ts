import {StyleSheet} from 'react-native';
import {spacing} from '../../assets/spacing';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
  },
  parent: {
    gap: spacing.l,
  },
  preventContainer: {
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: spacing.l * 2,
    paddingTop: spacing.m,
    height: 280,
  },
  vipText: {
    color: colors.goldenOchre,
    fontFamily: 'AlegreyaSansSC Light',
    fontWeight: '800',
    fontSize: 12,
  },
  dateText: {
    fontFamily: 'FiraSans Regular',
    fontWeight: '600',
    fontSize: 14,
    color: colors.lightGrey,
  },

  preventText: {
    fontFamily: 'AlegreyaSansSC Light',
    fontWeight: '800',
    fontSize: 12,
  },
  title: {
    fontFamily: 'AlegreyaSC Regular',
    fontWeight: '600',
    fontSize: 16,
  },

  eventDescriptionContainer: {
    flexDirection: 'row',
  },
  eventDescriptionParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  buttonsContainer: {
    gap: spacing.xs,
  },
  status: {
    fontFamily: 'AlegreyaSansSC Light',
    fontWeight: '700',
    fontSize: 12,
  },
  buttonText: {
    fontFamily: 'FiraSansCondensed Regular',
    fontSize: 12,
  },
});
