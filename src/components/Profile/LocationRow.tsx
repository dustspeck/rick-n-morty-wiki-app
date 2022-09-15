import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ILocationAll, ILocation} from '../../types';
import PropRow from './PropRow';
import {getLocationByURL} from '../../services/api/api';
import {CARD_BG, GREY} from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/styles';

/**
 * Component for displaying basic `location` information of a character.
 * This is `expandable` and displays all location properties after fetching.
 */
interface LocationRowProps {
  type: string;
  location: ILocation;
}
const LocationRow = ({location, type}: LocationRowProps) => {
  // stores the fetched location data
  const [fetchedLocationData, setFetchedLocationData] =
    useState<ILocationAll | null>(null);

  // stores if the location fetch was successful
  const [fetchError, setFetchError] = useState<boolean>(false);

  const handleRowPress = async () => {
    try {
      if (fetchedLocationData) return; // data already fetched
      const locationData = await getLocationByURL(location.url);
      if (!locationData) throw 'Error fetching';
      setFetchedLocationData(locationData);
    } catch (error) {
      console.log(error);
      setFetchError(true);
    }
  };

  return (
    <PropRow
      type={type}
      value={location.name}
      // row must not be expandable for 'unknown' locations (ie. empty location url)
      // erroneous fetching will also make the row not expandable
      expandable={location.url && !fetchError ? true : false}
      onPress={handleRowPress}
      ExpandedChild={
        <LocationExpandedCard fetchedLocationData={fetchedLocationData} />
      }
    />
  );
};

export default LocationRow;

/**
 * Component used for displaying all the properties of the location.
 * This is passed to the `PropRow` as a `ExpandedChild`.
 */
interface LocationExpandedCardProps {
  fetchedLocationData: ILocationAll | null;
}
const LocationExpandedCard = ({
  fetchedLocationData,
}: LocationExpandedCardProps) => {
  if (!fetchedLocationData)
    return (
      <View style={styles.expandedContainer}>
        <ActivityIndicator color={GREY} />
      </View>
    );
  return (
    <View style={styles.expandedContainer}>
      <Text style={styles.expandedText}>
        {'Name: '}
        <Text style={styles.underlinedText}>{fetchedLocationData.name}</Text>
      </Text>
      <Text style={styles.expandedText}>
        {'Dimension: '}
        <Text style={styles.underlinedText}>
          {fetchedLocationData.dimension}
        </Text>
      </Text>
      <Text style={styles.expandedText}>
        {'# of residents: '}
        <Text style={styles.underlinedText}>
          {fetchedLocationData.residents.length}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  expandedContainer: {
    backgroundColor: `${CARD_BG}55`,
    borderRadius: BORDER_RADIUS,
    height: 80,
    padding: BORDER_RADIUS,
    marginHorizontal: '10%',
    marginBottom: 20,
    overflow: 'hidden',
  },
  expandedText: {
    color: GREY,
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
});
