import {View} from 'react-native';
import React from 'react';
import {ICharacter} from '../../types';
import StatRow from './PropRow';

type CharacterTypes = keyof ICharacter;

const ProfileStat = ({character}: {character: ICharacter}) => {
  // Properties of character to be shown in list
  const filter_props = ['gender', 'species', 'status', 'type'];

  // Anonymous function to filer out null properties of the character
  const characteristics = (o =>
    o.filter(ch => character[ch as CharacterTypes]))(filter_props);

  return (
    <View>
      {characteristics.map(ch => (
        <StatRow
          key={ch}
          type={ch}
          value={`${character[ch as CharacterTypes]}`}
        />
      ))}
    </View>
  );
};

export default ProfileStat;
