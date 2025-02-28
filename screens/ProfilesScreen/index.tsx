import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {
  BurgerMenuIcon,
  ChatIcon,
  FilterIcon,
  GemIcon,
  PersonIcon,
  SearchIcon,
  TriIcon,
  WorldIcon,
} from '../../icons';

import ProfilesTopTabs from '../../components/ProfilesTopTabs';
import Text from '../../components/Text';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainNavigatorParamList} from '../../utils/navigationParams';

export default function ProfilesScreen() {
  const [index, setIndex] = React.useState(0);

  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  const handleIndex = (indexPressed: number) => {
    setIndex(indexPressed);
  };

  const renderContent = () => {
    switch (index) {
      case 0:
        return <ProfilesTopTabs />;

      default:
        return <Text text="Just content" />;
    }
  };

  const handleNavigation = (destination: keyof MainNavigatorParamList) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.parent}>
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
      {renderContent()}
      {index === 0 && (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleNavigation('OrganizedEvents')}>
            <Text
              text="FILTRER"
              style={[{color: colors.grey}, styles.footerText]}
            />
            <FilterIcon size={12} color={colors.grey} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleNavigation('ReceivedInvitations')}>
            <TriIcon size={12} color={colors.grey} />
            <Text
              text="TRIER"
              style={[{color: colors.grey}, styles.footerText]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
