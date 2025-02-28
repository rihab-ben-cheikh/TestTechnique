/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../Text';
import {styles} from './styles';
import {spacing} from '../../assets/spacing';
import Button from '../Button';
import {colors} from '../../assets/colors';

export interface EventCardProps {
  image: ImageSourcePropType | undefined;
  isVIP?: boolean;
  date: string;
  type: 'PRO' | 'PRIVÉ';
  prevente: string;
  title: string;
  cashflow: string;
  status: string;
}

export default function EventCard(props: EventCardProps) {
  const {image, date, isVIP, prevente, status, title, type, cashflow} = props;

  const splitWordsWithDash = (text: string): string[] => {
    const match = text.match(/^(.*?)( - )(.*)$/);

    if (match) {
      return [match[1], match[2], match[3]];
    }

    return [text];
  };

  const words = splitWordsWithDash(status);

  const getWordColors = (word: string): string => {
    const colorMapping: {[key: string]: string} = {
      SIGNALE: colors.red,
      PLANIFIE: colors.softCyan,
      'EN COURS': colors.softCyan,
      MODIFIE: colors.red,
      'NON PUBLIE': colors.purple,
    };

    return colorMapping[word] || colors.white;
  };
  return (
    <View>
      <Image source={image} />
      <View style={styles.descriptionContainer}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'black']}
          style={styles.linearGradient}>
          <View style={styles.parent}>
            <View style={{gap: spacing.xs}}>
              <View style={styles.preventContainer}>
                {isVIP && (
                  <>
                    <Text text="VIP" style={styles.vipText} />
                    <Text text={' - '} />
                  </>
                )}

                <Text text={prevente} style={styles.preventText} />
              </View>
              <Text text={title} numberOfLines={2} style={styles.title} />
            </View>

            <View style={styles.eventDescriptionParent}>
              <View>
                <View style={styles.eventDescriptionContainer}>
                  <Text text="Fin : " style={styles.dateText} />
                  <Text text={date} style={styles.dateText} />
                </View>
                <View style={styles.eventDescriptionContainer}>
                  <Text
                    text="Cashflow : "
                    style={[styles.vipText, {color: colors.white}]}
                  />
                  <Text text={cashflow} style={styles.vipText} />
                </View>
              </View>
              <View>
                <Text
                  text={type}
                  style={[styles.vipText, {color: colors.white}]}
                />

                <View style={{flexDirection: 'row'}}>
                  {words.map((word, index) => {
                    return (
                      <Text
                        text={word}
                        key={index}
                        style={[styles.status, {color: getWordColors(word)}]}
                      />
                    );
                  })}
                </View>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                text="RÉGULARISER LA SITUATION"
                textProps={[{color: colors.red}, styles.buttonText]}
              />
              <Button
                text="GÉRER LES ENTRÉES"
                textProps={[{color: colors.white}, styles.buttonText]}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
