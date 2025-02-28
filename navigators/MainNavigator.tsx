import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import OrganizedEventsScreen from '../screens/OrganizedEventsScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import ReceivedInvitationsScreen from '../screens/ReceivedInvitationsScreen';
import {MainNavigatorParamList} from '../utils/navigationParams';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
      <Stack.Screen
        name="ReceivedInvitations"
        component={ReceivedInvitationsScreen}
      />
      <Stack.Screen name="OrganizedEvents" component={OrganizedEventsScreen} />
    </Stack.Navigator>
  );
}
