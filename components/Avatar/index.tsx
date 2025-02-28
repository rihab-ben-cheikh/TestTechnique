import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg, {
  ClipPath,
  Defs,
  Image,
  LinearGradient,
  Polygon,
  Stop,
} from 'react-native-svg';
import {colors} from '../../assets/colors';
import {BowTieIcon, PlusIcon} from '../../icons';
import {styles} from './styles';

interface AvatarProps {
  userImage: string;
  avatarSize: number;
}
export default function Avatar(props: AvatarProps) {
  const {avatarSize, userImage} = props;
  return (
    <View>
      <View style={styles.hexagonImageContainer}>
        <Svg width={avatarSize} height={avatarSize + 20} viewBox="0 0 200 230">
          <Defs>
            <LinearGradient
              id="hexGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <Stop offset="0%" stopColor={colors.white} />
              <Stop offset="100%" stopColor={colors.borderGrey} />
            </LinearGradient>

            <ClipPath id="hexagonClip">
              <Polygon points="100,5 195,60 195,170 100,225 5,170 5,60" />
            </ClipPath>
          </Defs>

          <Polygon
            points="100,0 200,57.7 200,172.3 100,230 0,172.3 0,57.7"
            fill="url(#hexGradient)"
          />

          <Image
            width="100%"
            height="100%"
            href={userImage}
            clipPath="url(#hexagonClip)"
            preserveAspectRatio="xMidYMid meet"
          />
          <TouchableOpacity style={styles.plusIconContainer}>
            <PlusIcon color={colors.black} size={7} strokeWidth={1} />
          </TouchableOpacity>
          <View style={[styles.OnlineBigCircle, {top: avatarSize / 2 + 25}]}>
            <View style={styles.OnlineMediumCircle}>
              <View style={styles.OnlineSmallCircle} />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.bowTieIconContainer,
              {top: avatarSize, left: avatarSize / 2 - 15},
            ]}>
            <BowTieIcon />
          </TouchableOpacity>
        </Svg>
      </View>
    </View>
  );
}
