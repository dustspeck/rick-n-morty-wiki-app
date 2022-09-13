import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BLACK, GREY} from '../../constants/colors';

const {height} = Dimensions.get('screen');

const Footer = ({hasListEnded}: {hasListEnded: boolean}) => {
  return (
    <View style={styles.container}>
      {hasListEnded ? (
        <Text style={styles.text}>That's all</Text>
      ) : (
        <ActivityIndicator color={GREY} size="small" />
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {height: height / 5},
  text: {color: BLACK},
});
