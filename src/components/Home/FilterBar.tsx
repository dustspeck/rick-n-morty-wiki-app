import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK, ROOT_BG} from '../../constants/colors';

const FilterBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FilterBar</Text>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {backgroundColor: ROOT_BG},
  text: {color: BLACK},
});
