import {View} from 'react-native';
import React from 'react';
import {ILocation} from '../../types';
import LocationRow from './LocationRow';
import SectionHeading from './SectionHeading';

interface WhereaboutsSectionProps {
  origin: ILocation;
  location: ILocation;
}
const WhereaboutsSection = ({origin, location}: WhereaboutsSectionProps) => {
  return (
    <View>
      <SectionHeading heading="whereabouts" />
      <LocationRow type={'Origin'} location={origin} />
      <LocationRow type={'Location'} location={location} />
    </View>
  );
};

export default WhereaboutsSection;
