import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import React from 'react';
import ProfileCard from '../Profile/ProfileCard';
import Header from './Header';
import FilterBar from './FilterBar';
import {ICharacter} from '../../types';
import Footer from './Footer';

const {height} = Dimensions.get('screen');

const testData: ICharacter[] = [
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2',
    },
    location: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/6',
    created: '2017-11-04T19:50:28.250Z',
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Testicle Monster Dimension',
      url: 'https://rickandmortyapi.com/api/location/21',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11',
    ],
    url: 'https://rickandmortyapi.com/api/character/7',
    created: '2017-11-04T19:59:20.523Z',
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/8',
    created: '2017-11-04T20:03:34.737Z',
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/24'],
    url: 'https://rickandmortyapi.com/api/character/9',
    created: '2017-11-04T20:06:54.976Z',
  },
  {
    id: 10,
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    type: 'Superhuman (Ghost trains summoner)',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: "Worldender's lair",
      url: 'https://rickandmortyapi.com/api/location/4',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/25'],
    url: 'https://rickandmortyapi.com/api/character/10',
    created: '2017-11-04T20:19:09.017Z',
  },
  {
    id: 11,
    name: 'Albert Einstein',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/12'],
    url: 'https://rickandmortyapi.com/api/character/11',
    created: '2017-11-04T20:20:20.965Z',
  },
  {
    id: 12,
    name: 'Alexander',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Anatomy Park',
      url: 'https://rickandmortyapi.com/api/location/5',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/3'],
    url: 'https://rickandmortyapi.com/api/character/12',
    created: '2017-11-04T20:32:33.144Z',
  },
  {
    id: 13,
    name: 'Alien Googah',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'unknown',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/31'],
    url: 'https://rickandmortyapi.com/api/character/13',
    created: '2017-11-04T20:33:30.779Z',
  },
];

const CardsTray = () => {
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          stickyHeaderIndices={[1]}
          data={[{id: -1}, ...testData]}
          renderItem={({index, item}) => {
            if (index === 0) return <FilterBar />;
            // @ts-ignore
            return <ProfileCard character={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default CardsTray;

const styles = StyleSheet.create({container: {minHeight: height}});
