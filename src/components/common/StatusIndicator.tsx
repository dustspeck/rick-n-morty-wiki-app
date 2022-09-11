import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IStatus} from '../../types';
import {GREEN, GREY, LIGHT_GREY, RED} from '../../constants/colors';

const StatusIndicator = ({status}: {status: IStatus}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          {
            backgroundColor:
              status === 'Dead' ? RED : status === 'Alive' ? GREEN : GREY,
          },
        ]}
      />
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

export default StatusIndicator;

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
    height: 5,
    width: 5,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,
  },
});
