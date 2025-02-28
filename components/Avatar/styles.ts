import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  hexagonImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIconContainer: {
    position: 'absolute',
    height: 13,
    width: 13,
    borderRadius: 7.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
    top: 25,
  },
  OnlineBigCircle: {
    position: 'absolute',
    height: 18,
    width: 18,
    borderRadius: 10,
    backgroundColor: colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    left: -10,
    borderWidth: 1,
    borderColor: colors.darkGrey,
  },
  OnlineMediumCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OnlineSmallCircle: {
    height: 11,
    width: 11,
    borderRadius: 6,
    backgroundColor: colors.softCyan,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bowTieIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
