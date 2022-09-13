import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import ProfileCard from '../Profile/ProfileCard';
import Header from './Header';
import FilterBar from './FilterBar';
import {ICharacter, ICharacterFlatList, IPageInfo} from '../../types';
import Footer from './Footer';
import {mapCharactersListData} from '../../utils/misc';
import {getCharactersByURL} from '../../services/api/api';

const {height} = Dimensions.get('screen');

interface CardsTrayProps {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>;
  latestPageInfo: IPageInfo;
  setLatestPageInfo: React.Dispatch<React.SetStateAction<IPageInfo>>;
}

const CardsTray = ({
  characters,
  latestPageInfo,
  setCharacters,
  setLatestPageInfo,
}: CardsTrayProps) => {
  const stickyListData: ICharacterFlatList[] = [{id: -1}]; // sticky header list for filters
  const flatListData: ICharacterFlatList[] = mapCharactersListData(characters);

  const [hasListEnded, setHasListEnded] = useState(false); // determine if the entire list has loaded
  const [isFetching, setIsFetching] = useState(false); // makes sure the items are not duplicated on multiple onEndReached calls

  const handleOnEndReached = async () => {
    try {
      if (isFetching) return;
      let nextPageUrl = latestPageInfo.next;
      if (!nextPageUrl) throw 'list has ended';
      setIsFetching(true);
      const nextPageData = await getCharactersByURL(nextPageUrl);
      if (!nextPageData) throw 'no data fetched';
      setLatestPageInfo(nextPageData.info);
      setCharacters([...characters, ...nextPageData.results]);
    } catch (error) {
      console.log(error);
      setHasListEnded(true);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Header}
          ListFooterComponent={<Footer hasListEnded={hasListEnded} />}
          stickyHeaderIndices={stickyListData.map((_, i) => i + 1)} // map stickyList to i+1 array
          data={[...stickyListData, ...flatListData]}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.8}
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
