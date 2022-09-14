import {GREEN, GREY, RED} from '../constants/colors';
import {IStatus} from '../types';

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
