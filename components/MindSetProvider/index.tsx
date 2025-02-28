import {useAtom} from 'jotai';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {ArrowDownIcon} from '../../icons';
import {isMindSetVisibleAtom} from '../../stores';
import {mindSetData} from '../../utils/data';
import Text from '../Text';
import {styles} from './styles';

export interface FloatingButtonProviderProps {
  children: React.ReactNode;
}

export default function MindSetProvider(props: FloatingButtonProviderProps) {
  const {children} = props;

  const [isVisible, setIsVisible] = useAtom(isMindSetVisibleAtom);

  return (
    <>
      {isVisible && (
        <View style={styles.container}>
          <View style={styles.dataContainer}>
            <View style={styles.itemsParent}>
              {mindSetData.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setIsVisible(false)}
                  key={index}
                  style={[
                    styles.itemContainer,
                    {
                      backgroundColor: item.isSelected
                        ? colors.black
                        : colors.greyRGBA,
                    },
                  ]}>
                  <Text text={item.content} style={styles.content} />
                  {item.isSelected && (
                    <ArrowDownIcon color={colors.goldenOchre} size={8} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
      {children}
    </>
  );
}
