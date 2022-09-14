import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CARD_BG, GREY} from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/styles';

const StatRow = ({type, value}: {type: string; value: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`${type}`.toUpperCase()}</Text>
      <Text numberOfLines={2} style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

export default StatRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '10%',
    marginVertical: 5,
  },
  type: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    backgroundColor: CARD_BG,
    fontSize: 13,
    paddingHorizontal: 10,
    marginRight: 5,
    paddingVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    minWidth: '20%',
  },
  value: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    backgroundColor: `${CARD_BG}55`,
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
