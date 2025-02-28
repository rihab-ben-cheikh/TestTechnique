import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {
  BurgerMenuIcon,
  ChatIcon,
  GemIcon,
  PersonIcon,
  SearchIcon,
  WorldIcon,
} from '../../icons';
import ProfilesScreen from '../../screens/ProfilesScreen';
import {styles} from './styles';

export default function TopTabs() {
  const [index, setIndex] = React.useState(0);

  const handleIndex = (indexPressed: number) => {
    setIndex(indexPressed);
  };

  const renderItem = () => {
    switch (index) {
      case 0:
        return <ProfilesScreen />;
      case 1:
        return;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      case 5:
        return;

      default:
        return;
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleIndex(0)}>
          <BurgerMenuIcon size={'small'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIndex(1)}>
          <ChatIcon color={colors.grey} size={'small'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIndex(2)}>
          <WorldIcon color={colors.grey} size={'small'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIndex(3)}>
          <GemIcon color={colors.grey} size={'small'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIndex(4)}>
          <PersonIcon color={colors.grey} size={'small'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIndex(5)}>
          <SearchIcon size={'small'} />
        </TouchableOpacity>
      </View>
      {renderItem()}
    </View>
  );
}
