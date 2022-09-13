import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import React, {memo} from 'react';
import {BORDER_RADIUS} from '../../constants/styles';
import {BLACK, CARD_BG, LIGHT_GREY} from '../../constants/colors';
import StatusIndicator from '../common/StatusIndicator';
import {ICharacter} from '../../types';
import GenderIndicator from '../common/GenderIndicator';

const {width} = Dimensions.get('screen');

const ProfileCard = memo(
  ({data}: {data: ICharacter}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.card}>
          <Image source={{uri: data.image}} style={styles.icon} />
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.mainText}>
                {data.name}
              </Text>
              <View style={styles.infoRow}>
                <Text
                  numberOfLines={1}
                  style={[styles.subText, {textTransform: 'uppercase'}]}>
                  {data.species}
                </Text>
                <Text numberOfLines={1} style={styles.subText}>
                  {data.type}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <StatusIndicator status={data.status} />
                <GenderIndicator gender={data.gender} />
              </View>
            </View>
            <View style={styles.viewContainer}>
              <Text style={styles.viewText}>→</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  },
  (prev, next) => prev.data.id === next.data.id,
);

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: width / 3.2,
    borderRadius: BORDER_RADIUS,
    backgroundColor: CARD_BG,
    marginVertical: 7,
    overflow: 'hidden',
    padding: 5,
  },
  icon: {
    height: '100%',
    width: width / 3.2 - 10,
    borderRadius: BORDER_RADIUS,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  infoRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  mainText: {
    color: BLACK,
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  subText: {
    color: LIGHT_GREY,
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  viewContainer: {justifyContent: 'center', marginHorizontal: 5},
  viewText: {color: BLACK, fontSize: 22, fontWeight: 'bold'},
});
