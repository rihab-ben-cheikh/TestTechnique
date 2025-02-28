import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import usePersonalityDropDown from '../../hooks/usePersonalityDropDown';
import {ArrowDownIcon} from '../../icons';
import Avatar from '../Avatar';
import Text from '../Text';
import {styles} from './styles';
import useMindSetDropDown from '../../hooks/useMindSetDropDown';

export interface FreeProfileItemProps {
  personality: string;
  mindSet: string;
  avatar: string;
  name: string;
  age: string;
}

export default function FreeProfileItem(props: FreeProfileItemProps) {
  const {age, mindSet, name, personality, avatar} = props;

  const {showPersonalityDropDown} = usePersonalityDropDown();

  const handleShowPersonalityDropDown = () => {
    showPersonalityDropDown();
  };

  const {showMindSetDropDown} = useMindSetDropDown();

  const handleShowMindSetDropDown = () => {
    showMindSetDropDown();
  };

  return (
    <View style={styles.container}>
      <Avatar avatarSize={100} userImage={avatar} />
      <View style={styles.personalInfoContainer}>
        <Text text={name} style={styles.name} />
        <Text text={age} style={styles.mindSetInfoDescription} />
      </View>
      <View style={styles.otherInfoContainer}>
        <Text text={"Etats d'esprit"} style={styles.mindSetInfoTitle} />
        <View style={styles.mindSetInfoContainer}>
          <Text text={mindSet} style={[styles.mindSetInfoDescription]} />
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={handleShowMindSetDropDown}>
            <ArrowDownIcon color={colors.goldenOchre} size={8} />
          </TouchableOpacity>
        </View>

        <Text
          text={'Tempérament personnalité'}
          style={styles.mindSetInfoTitle}
        />
        <View style={styles.mindSetInfoContainer}>
          <Text text={personality} style={styles.mindSetInfoDescription} />
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={handleShowPersonalityDropDown}>
            <ArrowDownIcon color={colors.goldenOchre} size={8} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
