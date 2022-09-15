import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILocation} from '../../types';
import {GREY} from '../../constants/colors';
import LocationRow from './LocationRow';

interface WhereaboutsSectionProps {
  origin: ILocation;
  location: ILocation;
}
const WhereaboutsSection = ({origin, location}: WhereaboutsSectionProps) => {
  return (
    <View>
      <Text style={styles.heading}>WHEREABOUTS</Text>
      <LocationRow type={'Origin'} location={origin} />
      <LocationRow type={'Location'} location={location} />
    </View>
  );
};

export default WhereaboutsSection;

const styles = StyleSheet.create({
  heading: {textAlign: 'center', color: GREY, margin: 5, marginTop: 10},
});
