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
