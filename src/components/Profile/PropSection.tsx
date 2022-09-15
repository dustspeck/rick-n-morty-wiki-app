import {View} from 'react-native';
import React from 'react';
import {ICharacter, IPropSectionProps} from '../../types';
import PropRow from './PropRow';

import SectionHeading from './SectionHeading';

type CharacterTypes = keyof ICharacter;

const PropSection = ({character}: IPropSectionProps) => {
  // Properties of character to be shown in list
  const filter_props = ['gender', 'species', 'status', 'type'];

  // Anonymous function to filer out null properties of the character
  const characteristics = (o =>
    o.filter(ch => character[ch as CharacterTypes]))(filter_props);

  return (
    <View>
      <SectionHeading heading="properties" />
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
