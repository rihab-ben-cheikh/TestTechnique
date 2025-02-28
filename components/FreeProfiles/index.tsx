import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import {freeProfilesData} from '../../utils/data';
import FreeProfileItem, {FreeProfileItemProps} from '../FreeProfileItem';
import {styles} from './styles';
import Text from '../Text';
import {BowTieIcon} from '../../icons';

export default function FreeProfiles() {
  const renderItem: ListRenderItem<FreeProfileItemProps> = ({item}) => {
    return <FreeProfileItem {...item} />;
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View style={styles.indexMarker} />
          <View style={styles.listHeaderComponent}>
            <BowTieIcon />
            <Text text=": LIBRE CE SOIR" />
          </View>
        </View>
      }
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={freeProfilesData}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}
