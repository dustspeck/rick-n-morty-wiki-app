import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Profile from '../src/screens/Profile';
import {getEpisodeByURL, getLocationByURL} from '../src/api';

import {ICharactersPage, IEpisode, ILocationAll} from '../src/types';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../src/navigations/index';
import LocationRow from '../src/components/Profile/LocationRow';

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

const episodePageResponse = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  url: 'https://rickandmortyapi.com/api/episode/1',
  created: '2017-11-10T12:56:33.798Z',
} as IEpisode;

const locationResponse = {
  dimension: '',
  name: '',
  residents: [''],
  type: '',
  url: '',
} as ILocationAll;

const mockedNavigationProp = {
  canGoBack: jest.fn().mockReturnValue(true),
  goBack: jest.fn(),
} as any;
const route = {
  key: '',
  name: 'Profile',
  params: {data: characterPageResponse.results[0]},
  path: '',
} as RouteProp<RootStackParamList, 'Profile'>;

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

jest.mock('../src/api');

it('Profile renders with chapter view', async () => {
  const mGetEpisodeByURL = jest.mocked(getEpisodeByURL);
  mGetEpisodeByURL.mockResolvedValue(episodePageResponse);

  const profile = render(
    <Profile navigation={mockedNavigationProp as any} route={route} />,
  );
  await waitFor(() => profile.getByTestId('ChapterRow.View'));
  expect(profile).toMatchSnapshot();
});

it('Location Row renders correctly without location url', async () => {
  const mGetLocationByURL = jest.mocked(getLocationByURL);
  mGetLocationByURL.mockResolvedValue({} as ILocationAll);
  const locationRow = render(
    <LocationRow location={{name: '', url: ''}} type="test" />,
  );
  const expandButton = locationRow.queryByTestId('PropRow.ExpandButton');
  expect(expandButton).toBeFalsy();
  expect(locationRow).toMatchSnapshot();
});

it('Location Row logs with incorrect location url', async () => {
  console.log = jest.fn();

  const mGetLocationByURL = jest.mocked(getLocationByURL);
  mGetLocationByURL.mockResolvedValue(null as any);

  const locationRow = render(
    <LocationRow location={{name: 'test', url: 'incorrect_url'}} type="test" />,
  );
  const expandButton = locationRow.queryByTestId('PropRow.ExpandButton');
  if (!expandButton) fail();
  fireEvent(expandButton, 'press');
  await waitFor(() => locationRow.queryByTestId('LocationExpandedCard.View'));
  expect(console.log).toHaveBeenCalledWith('Error fetching');
});

it('Location Row renders correctly with location url', async () => {
  const mGetLocationByURL = jest.mocked(getLocationByURL);
  mGetLocationByURL.mockResolvedValue(locationResponse);
  const locationRow = render(
    <LocationRow location={{name: 'test', url: 'sample_url'}} type="test" />,
  );
  const expandButton = locationRow.queryByTestId('PropRow.ExpandButton');
  expect(expandButton).toBeTruthy();
  if (!expandButton) fail();
  fireEvent(expandButton, 'press');
  await waitFor(() => locationRow.queryByTestId('LocationExpandedCard.View'));
  expect(locationRow.queryByTestId('LocationExpandedCard.View')).toBeTruthy();
  expect(locationRow).toMatchSnapshot();
});
