import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {BLACK} from '../../constants/colors';
import {getCharacters} from '../../api';
import {ICharacter, IPageInfo} from '../../types';
import SceneBuilder from '../../components/common/SceneBuilder';
import CardsTray from '../../components/Home/CardsTray';

const Home = () => {
  const initPageInfo: IPageInfo = {count: 0, pages: 0, next: null, prev: null};

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [latestPageInfo, setLatestPageInfo] = useState<IPageInfo>(initPageInfo);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const page = await getCharacters();
      if (!page) throw 'Error fetching';
      if (!page.results) throw 'No results';
      setCharacters(page.results);
      setLatestPageInfo(page.info);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCharacters(); //initial page load
  }, []);

  return (
    <SceneBuilder>
      {isLoading && <ActivityIndicator testID="Home.Loader" color={BLACK} />}
      {!isLoading && (
        <CardsTray
          characters={characters}
          setCharacters={setCharacters}
          latestPageInfo={latestPageInfo}
          setLatestPageInfo={setLatestPageInfo}
        />
      )}
    </SceneBuilder>
  );
};

export default Home;
