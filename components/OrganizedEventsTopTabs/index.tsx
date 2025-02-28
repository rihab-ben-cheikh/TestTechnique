import React from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {EventData} from '../../utils/data';
import EventCard, {EventCardProps} from '../EventCard';
import SearchInput from '../SearchInput';
import Text from '../Text';
import {styles} from './styles';

export default function OrganizedEventsTopTabs() {
  const [index, setIndex] = React.useState(0);

  const handleIndex = (indexPressed: number) => {
    setIndex(indexPressed);
  };

  const currentIndexMarker = (isSelected: boolean) => {
    return (
      <View
        style={[
          styles.indexMarker,
          {backgroundColor: isSelected ? colors.softCyan : colors.grey},
        ]}
      />
    );
  };

  const renderItem: ListRenderItem<EventCardProps> = ({item}) => {
    return <EventCard {...item} />;
  };

  const renderContent = () => {
    switch (index) {
      case 0:
        return (
          <FlatList
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            data={EventData}
          />
        );

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
          <Text
            text="A VENIR"
            style={[
              styles.text,
              {color: index === 0 ? colors.white : colors.grey},
            ]}
          />
          {currentIndexMarker(index === 0 && true)}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleIndex(1)}
          style={styles.iconsContainer}>
          <Text
            text="PASSES"
            style={[
              styles.text,
              {color: index === 1 ? colors.white : colors.grey},
            ]}
          />
          {currentIndexMarker(index === 1 && true)}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleIndex(2)}
          style={styles.iconsContainer}>
          <Text
            text="ANNULER"
            style={[
              styles.text,
              {color: index === 2 ? colors.white : colors.grey},
            ]}
          />
          {currentIndexMarker(index === 2 && true)}
        </TouchableOpacity>
      </View>
      <View style={styles.searchInputContainer}>
        <SearchInput
          nativeProps={{placeholder: 'Rechercher une date, un nom...'}}
        />
      </View>
      {renderContent()}
    </View>
  );
}
