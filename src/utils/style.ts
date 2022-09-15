import {GREEN, GREY, RED} from '../constants/colors';
import {IGender, IStatus} from '../types';

export const selectStatusColor = (status: IStatus): string => {
  switch (status) {
    case 'Alive':
      return GREEN;
    case 'Dead':
      return RED;
    default:
      return GREY;
  }
};

export const selectGenderSymbol = (gender: IGender) => {
  switch (gender) {
    case 'Male':
      return '♂';
    case 'Female':
      return '♀';
    case 'Genderless':
      return '⚤';
    default:
      return '?';
  }
};
