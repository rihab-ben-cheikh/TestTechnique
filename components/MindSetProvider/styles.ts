import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {spacing} from '../../assets/spacing';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackRGBA,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  dataContainer: {
    position: 'absolute',
    backgroundColor: colors.black,
    gap: 3,
    right: spacing.xl,
    top: Dimensions.get('screen').height / 2,
  },
  itemsParent: {backgroundColor: colors.black, gap: 1.5},
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontFamily: 'FiraSans Regular',
  },
});
