import {fireEvent, render, waitFor} from '@testing-library/react-native';

import {ICharactersPage} from '../src/types';
import {getCharacters} from '../src/api';
import Home from '../src/components/Home';
import ProfileCard from '../src/components/Profile/ProfileCard';

const characterPageResponse = {
  info: {count: 0, next: null, pages: 0, prev: null},
  results: [
    {
      id: 20,
      name: 'Ants in my Eyes Johnson',
      status: 'unknown',
      species: 'Human',
      type: 'Human with ants in his eyes',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Interdimensional Cable',
        url: 'https://rickandmortyapi.com/api/location/6',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/8'],
      url: 'https://rickandmortyapi.com/api/character/20',
      created: '2017-11-04T22:34:53.659Z',
    },
  ],
} as ICharactersPage;

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

jest.mock('../src/api');

it('Home renders the profile card', async () => {
  const mGetCharacters = jest.mocked(getCharacters);
  mGetCharacters.mockResolvedValue(characterPageResponse);
  const home = render(<Home />);
  expect(getCharacters).toHaveBeenCalledTimes(1);
  await waitFor(() => home.getByTestId('ProfileCard.Pressable'));
  expect(home).toMatchSnapshot();
});

it('Profile card navigates to profile', () => {
  const data = characterPageResponse.results[0];
  const profileCard = render(<ProfileCard data={data} />);
  fireEvent.press(profileCard.getByTestId('ProfileCard.Pressable'));
  expect(mockedNavigate).toHaveBeenCalledWith('Profile', {data});
});
