import {IEpisode} from '../types';

export const episodeSortFn = (first: IEpisode, second: IEpisode) =>
  first.episode > second.episode ? 1 : -1;
