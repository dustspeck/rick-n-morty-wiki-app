import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {BORDER_RADIUS} from '../../constants/styles';
import {LIGHT_GREEN} from '../../constants/colors';

const {width} = Dimensions.get('screen');

const ProfileCard = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card} />
    </TouchableWithoutFeedback>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: width / 2.5,
    borderRadius: BORDER_RADIUS,
    backgroundColor: LIGHT_GREEN,
    marginVertical: 5,
  },
});
