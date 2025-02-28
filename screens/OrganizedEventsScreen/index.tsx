import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import OrganizedEventsTopTabs from '../../components/OrganizedEventsTopTabs';
import {styles} from './styles';

export default function OrganizedEventsScreen() {
  return (
    <View style={styles.container}>
      <Header title="ÉVÉNEMENTS ORGANISÉS" />
      <OrganizedEventsTopTabs />
    </View>
  );
}
