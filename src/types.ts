interface IPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface IPage {
  info: IPageInfo;
  results: any[];
}

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
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
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersPage extends IPage {
  results: ICharacter[];
}
