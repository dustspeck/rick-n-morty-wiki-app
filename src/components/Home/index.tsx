import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {BLACK} from '../../constants/colors';
import {getCharacters} from '../../services/api/api';
import {ICharacter, IPageInfo} from '../../types';
import SceneBuilder from '../common/SceneBuilder';
import CardsTray from './CardsTray';

const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [latestPageInfo, setLatestPageInfo] = useState<IPageInfo>({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });
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
    fetchCharacters();
  }, []);

  return (
    <SceneBuilder>
      {isLoading && <ActivityIndicator color={BLACK} />}
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
