import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {FlowerIcon, NotesIcon, ProfileIcon, StopWatchIcon} from '../../icons';
import FreeProfiles from '../FreeProfiles';
import {styles} from './styles';

export default function ProfilesTopTabs() {
  const [index, setIndex] = React.useState(0);

  const handleIndex = (indexPressed: number) => {
    setIndex(indexPressed);
  };

  const currentIndexMarker = () => {
    return <View style={styles.indexMarker} />;
  };

  const renderContent = () => {
    switch (index) {
      case 0:
        return <FreeProfiles />;

      default:
        return;
    }
  };

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleIndex(0)}
          style={styles.iconsContainer}>
          <ProfileIcon
            size={'small'}
            color={index === 0 ? colors.white : colors.darkBlack}
          />
          {index === 0 && currentIndexMarker()}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleIndex(1)}
          style={styles.iconsContainer}>
          <NotesIcon
            color={index === 1 ? colors.white : colors.darkBlack}
            size={'small'}
          />
          {index === 1 && currentIndexMarker()}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleIndex(2)}
          style={styles.iconsContainer}>
          <StopWatchIcon
            color={index === 2 ? colors.white : colors.darkBlack}
            size={'small'}
          />
          {index === 2 && currentIndexMarker()}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleIndex(3)}
          style={styles.iconsContainer}>
          <FlowerIcon
            color={index === 3 ? colors.white : colors.darkBlack}
            size={'small'}
          />
          {index === 3 && currentIndexMarker()}
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
}
