import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IGender} from '../../types';
import {LIGHT_GREY} from '../../constants/colors';

const GenderIndicator = ({gender}: {gender: IGender}) => {
  const genderSymbol = (gender: IGender) => {
    switch (gender) {
      case 'Male':
        return '♂';
      case 'Female':
        return '♀';
      case 'Genderless':
        return '⚤';
      default:
        return '?';
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.indicator}>{`${genderSymbol(gender)} `}</Text>
        {gender}
      </Text>
    </View>
  );
};

export default GenderIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: LIGHT_GREY,
    fontSize: 16,
    marginVertical: 5,
  },
  indicator: {
    fontSize: 20,
  },
});
