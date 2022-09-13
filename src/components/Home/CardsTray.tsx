import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import ProfileCard from '../Profile/ProfileCard';
import Header from './Header';
import {ICharacter, IPageInfo} from '../../types';
import Footer from './Footer';

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
  const [hasListEnded, setHasListEnded] = useState(false); // determine if the entire list has loaded
  const [isFetching, setIsFetching] = useState(false); // makes sure the items are not duplicated on erroneous multiple onEndReached calls

  const handleOnEndReached = async () => {
    try {
      if (isFetching) return;
      let nextPageUrl = latestPageInfo.next;
      if (!nextPageUrl) throw 'list has ended';
      setIsFetching(true);
      const nextPageData = await getCharactersByURL(nextPageUrl);
      if (!nextPageData) throw 'no data fetched';
      setLatestPageInfo(nextPageData.info);
      setCharacters(characters.concat(nextPageData.results));
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
          ListFooterComponent={<Footer hasListEnded={hasListEnded} />} // PERF: using conditional rendering in footer can have minor performance issue at onEndReached
          // stickyHeaderIndices={[0]} // Note: Avoiding sticky headers, not performant for 60fps
          data={characters}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={1}
          renderItem={({item}) => <ProfileCard data={item} />}
          windowSize={height}
          initialNumToRender={10}
          removeClippedSubviews={true}
        />
      </View>
    </View>
  );
};

export default CardsTray;

const styles = StyleSheet.create({container: {minHeight: height}});
