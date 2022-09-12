import {ICharacter, ICharacterFlatList} from '../types';

const charactersListTemplate = (character: ICharacter): ICharacterFlatList => {
  const {id, ...rest} = character;
  return {
    id: character.id,
    character: {
      id,
      ...rest,
    },
  };
};

export const mapCharactersListData = (
  characters: ICharacter[],
): ICharacterFlatList[] => characters.map(charactersListTemplate);
