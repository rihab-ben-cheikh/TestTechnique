import {StyleSheet} from 'react-native';
import {spacing} from '../../assets/spacing';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  parent: {},
  image: {},
  descriptionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    gap: 30,
  },
  leftDescriptionContainer: {
    flex: 1 / 3,
    gap: spacing.xxs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightDescriptionContainer: {
    flex: 2 / 3,
    gap: spacing.xxs,
  },
  participantNumberContainer: {
    flexDirection: 'row',
    gap: spacing.xxs,
  },
  preventContainer: {
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 280,
  },
  vipText: {
    color: colors.goldenOchre,
    fontFamily: 'FiraSans SemiBold',
    fontWeight: '800',
  },
  dateTimeText: {
    fontFamily: 'FiraSans Light',
    fontWeight: '400',
    fontSize: 16,
  },
  dayText: {
    fontFamily: 'RobotoMono ExtraLight',
    fontSize: 48,
    fontWeight: '100',
  },
  preventText: {
    fontFamily: 'FiraSans SemiBold',
    fontWeight: '800',
    fontSize: 12,
  },
  preventStatusText: {
    color: colors.softCyan,
    fontFamily: 'FiraSans SemiBold',
    fontWeight: '800',
    fontSize: 12,
  },
  title: {
    fontFamily: 'AlegreyaSC Regular',
    fontWeight: '400',
    fontSize: 20,
    marginBottom: spacing.xl,
  },
  locationText: {
    fontFamily: 'FiraSans Regular',
    fontSize: 14,
  },
  OrganizedText: {
    color: colors.grey,
  },
  categoryLineUp: {
    fontFamily: 'FiraSans Regular',
    fontSize: 11,
  },
  list: {
    fontFamily: 'FiraSans Italic',
    fontSize: 11,
    fontWeight: '200',
  },
});
