import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';
import {RootStackParamList} from './navigations';

export interface IPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface IPage {
  info: IPageInfo;
  results: any[];
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IEpisode {
  name: string;
  episode: string;
  air_date: string;
}

export interface ILocationAll extends ILocation {
  type: string;
  dimension: string;
  residents: string[];
}

export type IStatus = 'Alive' | 'Dead' | 'unknown';
export type IGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface ICharacter {
  id: number;
  name: string;
  status: IStatus;
  species: string;
  type: string;
  gender: IGender;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersPage extends IPage {
  results: ICharacter[];
}

export interface ISceneBuilderProps extends PropsWithChildren {
  style?: ViewStyle;
  showTopBar?: boolean;
}
export interface IGenderIndicatorProps {
  gender: IGender;
}

export interface IStatusIndicatorProps {
  status: IStatus;
}

export interface ICardsTrayProps {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>;
  latestPageInfo: IPageInfo;
  setLatestPageInfo: React.Dispatch<React.SetStateAction<IPageInfo>>;
}

export interface IFooterProps {
  hasListEnded: boolean;
}

export interface IChapterRowProps {
  episode: IEpisode;
}

export interface IChaptersSectionProps {
  episodes: string[];
}

export interface IProfileProps
  extends NativeStackScreenProps<RootStackParamList, 'Profile'> {}

export interface IProfileCardProps {
  data: ICharacter;
}

export interface IProfileImageProps {
  character: ICharacter;
}

export interface PropRowProps {
  type: string;
  value: string;
  expandable?: boolean;
  onPress?: Function;
  ExpandedChild?: React.ReactNode;
}

export interface IPropSectionProps {
  character: ICharacter;
}

export interface ISectionHeadingProps {
  heading: string;
}

export interface IViewMoreButtonProps {
  isLoading: boolean;
  onPress: Function;
}

export interface WhereaboutsSectionProps {
  origin: ILocation;
  location: ILocation;
}
