import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IGenderIndicatorProps} from '../../types';
import {LIGHT_GREY} from '../../constants/colors';
import {selectGenderSymbol} from '../../utils/style';

const GenderIndicator = ({gender}: IGenderIndicatorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.indicator}>{`${selectGenderSymbol(gender)} `}</Text>
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
