import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {BLACK} from '../../constants/colors';

const {height} = Dimensions.get('screen');

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>That's all</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {height: height / 5},
  text: {color: BLACK},
});
