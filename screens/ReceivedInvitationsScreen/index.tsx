import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import Header from '../../components/Header';
import {styles} from './styles';
import SearchInput from '../../components/SearchInput';
import InvitationCard, {
  InvitationCardProps,
} from '../../components/InvitationCard';
import {invitationsData} from '../../utils/data';

export default function ReceivedInvitationsScreen() {
  const renderItem: ListRenderItem<InvitationCardProps> = ({item}) => {
    return <InvitationCard {...item} />;
  };

  return (
    <View style={styles.container}>
      <Header title="INVITATION REÇUES" />
      <View style={styles.searchInputContainer}>
        <SearchInput
          nativeProps={{placeholder: 'Rechercher une date, un nom...'}}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={invitationsData}
      />
    </View>
  );
}
