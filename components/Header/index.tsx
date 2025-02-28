import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {ChevronLeftIcon, ExitIcon} from '../../icons';
import Text from '../Text';
import {colors} from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  onExitIconPressed?: ((event: GestureResponderEvent) => void) | undefined;
  onChevronLeftIconPressed?:
    | ((event: GestureResponderEvent) => void)
    | undefined;
  titleStyle?: StyleProp<TextStyle>;
};
export default function Header(props: HeaderProps) {
  const {title, titleStyle} = props;

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <ChevronLeftIcon color={colors.grey} />
      </TouchableOpacity>

      <Text text={title} style={[titleStyle, styles.title]} />
      <TouchableOpacity onPress={handleGoBack}>
        <ExitIcon color={colors.grey} />
      </TouchableOpacity>
    </View>
  );
}
