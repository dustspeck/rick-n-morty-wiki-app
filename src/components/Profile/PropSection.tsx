import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICharacter} from '../../types';
import PropRow from './PropRow';
import {GREY} from '../../constants/colors';

type CharacterTypes = keyof ICharacter;

const PropSection = ({character}: {character: ICharacter}) => {
  // Properties of character to be shown in list
  const filter_props = ['gender', 'species', 'status', 'type'];

  // Anonymous function to filer out null properties of the character
  const characteristics = (o =>
    o.filter(ch => character[ch as CharacterTypes]))(filter_props);

  return (
    <View>
      <Text style={styles.heading}>
        <Text style={{color: `${GREY}33`}}>{'───────     '}</Text>
        PROPERTIES
        <Text style={{color: `${GREY}33`}}>{'     ───────'}</Text>
      </Text>
      {characteristics.map(ch => (
        <PropRow
          key={ch}
          type={ch}
          value={`${character[ch as CharacterTypes]}`}
        />
      ))}
    </View>
  );
};

export default PropSection;

const styles = StyleSheet.create({
  heading: {textAlign: 'center', color: GREY, margin: 5, marginTop: 10},
});
