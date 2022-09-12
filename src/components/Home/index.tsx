import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {BLACK} from '../../constants/colors';
import {getCharacters} from '../../services/api/api';
import {ICharacter} from '../../types';
import SceneBuilder from '../common/SceneBuilder';
import CardsTray from './CardsTray';

const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const page = await getCharacters();
      if (!page) throw 'Error fetching';
      if (!page.results) throw 'No results';
      setCharacters(page.results);
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
      {!isLoading && <CardsTray characters={characters} />}
    </SceneBuilder>
  );
};

export default Home;
