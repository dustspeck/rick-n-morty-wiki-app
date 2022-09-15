import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IChaptersSectionProps, IEpisode} from '../../types';
import SectionHeading from './SectionHeading';
import {getEpisodeByURL} from '../../api';
import ChapterRow from './ChapterRow';
import {episodeSortFn} from '../../utils/misc';
import ViewMoreButton from './ViewMoreButton';

const ChaptersSection = ({episodes}: IChaptersSectionProps) => {
  const total = episodes.length;
  const INITIAL_LOAD_COUNT = 3; // Initial amount of episode to load
  const LOAD_STEP_COUNT = 5; // Episodes to load on every load more request

  const [fetchedEpisodes, setFetchedEpisodes] = useState<IEpisode[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  /**
   * Fetch the episodes data from the urls and merge in `fetchedEpisodes`
   */
  const fetchEpisodes = (urls: string[]) => {
    /**
     * Note: Since each fetch request is resolved at different times
     * episodes are sorted after concatenating it to the fetched episodes.
     *
     * Using Promise.all would be a better approach if the list is very long,
     * since the list is small, forEach-and-sort approach is used to render the episode
     * as soon as it is fetched.
     */
    urls.forEach(async url => {
      setIsFetching(true);

      const episodeData = await getEpisodeByURL(url);
      if (episodeData)
        setFetchedEpisodes(e => e.concat(episodeData).sort(episodeSortFn)); // sort and concat the fetched episodes

      setIsFetching(false);
    });
  };

  /**
   * Determine which all episodes are required to fetch
   */
  const loadMoreEpisodes = () => {
    const fetchCount =
      loadedCount < INITIAL_LOAD_COUNT ? INITIAL_LOAD_COUNT : LOAD_STEP_COUNT; // Determine the count of urls to be loaded

    const newCount = loadedCount + fetchCount;
    const nextLot = episodes.slice(loadedCount, newCount); // Array of urls to be loaded next

    fetchEpisodes(nextLot); // Fetch the next slot
    setLoadedCount(newCount); // Update the new `loadedCount`
  };

  useEffect(() => {
    // Load episodes initially
    loadMoreEpisodes();
  }, []);

  return (
    <View>
      <SectionHeading heading="featured chapters" />
      <View style={{paddingTop: 20}}>
        {fetchedEpisodes.map(episode => (
          <ChapterRow key={`${episode.episode}`} episode={episode} />
        ))}
      </View>
      {total > loadedCount && (
        <ViewMoreButton isLoading={isFetching} onPress={loadMoreEpisodes} />
      )}
    </View>
  );
};

export default ChaptersSection;
