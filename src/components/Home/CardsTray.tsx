import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import React from 'react';
import ProfileCard from '../Profile/ProfileCard';
import Header from './Header';
import FilterBar from './FilterBar';
import {ICharacter, ICharacterFlatList} from '../../types';
import Footer from './Footer';
import {mapCharactersListData} from '../../utils/misc';

const {height} = Dimensions.get('screen');

const CardsTray = ({characters}: {characters: ICharacter[]}) => {
  const stickyListData: ICharacterFlatList[] = [{id: -1}];
  const flatListData: ICharacterFlatList[] = mapCharactersListData(characters);

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          stickyHeaderIndices={stickyListData.map((_, i) => i + 1)}
          data={[...stickyListData, ...flatListData]}
          renderItem={({item}) => {
            if (!item.character) return <FilterBar />;
            else return <ProfileCard data={item.character} />;
          }}
        />
      </View>
    </View>
  );
};

export default CardsTray;

const styles = StyleSheet.create({container: {minHeight: height}});
