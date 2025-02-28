import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PersonsIcon} from '../../icons';
import Separator from '../Separator';
import Text from '../Text';
import {styles} from './styles';

export interface InvitationCardProps {
  image: ImageSourcePropType | undefined;
  isVIP?: boolean;
  date: string;
  time: string;
  type: 'PRO' | 'PRIVÉ';
  participantNumber: string;
  prevente: string;
  title: string;
  location: string;
  organization: string;
  category: string;
  lineUp?: string;
  status: 'PLANIFIÉ' | 'EN COURS';
}

export default function InvitationCard(props: InvitationCardProps) {
  const {
    image,
    category,
    date,
    isVIP,
    location,
    organization,
    participantNumber,
    prevente,
    status,
    time,
    title,
    type,
    lineUp,
  } = props;

  const regex = /^(\d{2})\s(.+)$/;

  const match = date.match(regex);

  let day = '';
  let restOfDate = '';

  if (match) {
    day = match[1];
    restOfDate = match[2];
  }

  return (
    <View style={styles.parent}>
      <Image style={styles.image} source={image} />
      <View style={styles.descriptionContainer}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'black']}
          style={styles.linearGradient}>
          <View style={styles.leftDescriptionContainer}>
            {isVIP && <Text text="VIP" style={styles.vipText} />}
            <Text text={day} style={styles.dayText} />
            <Separator width={10} isAtCenter />
            <Text text={restOfDate} style={styles.dateTimeText} />
            <Text text={time} style={styles.dateTimeText} />
            <Separator width={60} isAtCenter />
            <Text text={type} />
            <Separator width={60} isAtCenter />
            <View style={styles.participantNumberContainer}>
              <PersonsIcon size={'tiny'} strokeWidth={1} />
              <Text text={participantNumber} style={{}} />
            </View>
          </View>
          <View style={styles.rightDescriptionContainer}>
            <View style={styles.preventContainer}>
              <Text text={prevente} style={styles.preventText} />
              <Text text=" - " />
              <Text text={status} style={styles.preventStatusText} />
            </View>
            <Text text={title} style={styles.title} numberOfLines={2} />
            <Separator width={50} />
            <Text text={location} style={styles.locationText} />
            <View style={styles.preventContainer}>
              <Text text={'Organisé par : '} style={styles.OrganizedText} />
              <Text text={organization} style={{}} />
            </View>
            <Text text={'Catégorie : '} style={styles.categoryLineUp} />
            <Text text={category} style={styles.list} />

            {lineUp && (
              <>
                <Text text={'line up : '} style={styles.categoryLineUp} />
                <Text text={lineUp} style={styles.list} numberOfLines={2} />
              </>
            )}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
