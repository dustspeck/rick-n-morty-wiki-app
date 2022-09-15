import axios, {AxiosResponse} from 'axios';
import {CHARACTERS_ROUTE} from '../../constants/api';
import {ICharactersPage, ILocationAll} from '../../types';
import {apiClient} from './config';

/**
 * @description Fetches characters without any pagination.
 * Used for initial characters load.
 * @returns {Promise<ICharactersPage | null>} Returns the first characters page.
 * Returns `null` on errors.
 */
export const getCharacters = async (): Promise<ICharactersPage | null> => {
  try {
    const response: AxiosResponse = await apiClient.get(CHARACTERS_ROUTE);
    const data: ICharactersPage = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * @description Fetches characters of the given page number.
 * @param {number} page Page number to be fetched.
 * @returns {Promise<ICharactersPage | null>} Returns the nth characters page.
 * * Returns `null` on errors.
 */
export const getCharactersByPage = async (
  page: number,
): Promise<ICharactersPage | null> => {
  try {
    const response: AxiosResponse = await apiClient.get(
      `${CHARACTERS_ROUTE}/page=${page}`,
    );
    const data: ICharactersPage = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * @description Fetches characters from the given page url.
 * @param {string} url URL to be fetched from.
 * @returns {Promise<ICharactersPage | null>} Returns the nth characters page.
 * * Returns `null` on errors.
 */
export const getCharactersByURL = async (
  url: string,
): Promise<ICharactersPage | null> => {
  try {
    if (!url) return null;
    const response: AxiosResponse = await apiClient.get(`${url}`);
    const data: ICharactersPage = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
/**
 * Fetches location from the given url.
 * @param { string} url URL to be fetched from.
 * @returns {Promise<ILocationAll | null>} Returns the nth location page.
 * * Returns `null` on errors.
 */
export const getLocationByURL = async (
  url: string,
): Promise<ILocationAll | null> => {
  try {
    if (!url) return null;
    const response: AxiosResponse = await apiClient.get(`${url}`);
    const data: ILocationAll = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
