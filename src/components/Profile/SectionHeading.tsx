import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GREY} from '../../constants/colors';
import {ISectionHeadingProps} from '../../types';

const SectionHeading = ({heading}: ISectionHeadingProps) => {
  return (
    <View>
      <Text style={styles.heading}>
        <Text style={{color: `${GREY}33`}}>{'─────     '}</Text>
        {`${heading}`.toUpperCase()}
        <Text style={{color: `${GREY}33`}}>{'     ─────'}</Text>
      </Text>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  heading: {textAlign: 'center', color: GREY, margin: 5, marginTop: 30},
});
