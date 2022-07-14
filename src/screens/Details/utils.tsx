import moment from 'moment';
import { Item } from '../Home/components/Item/Item';
import { Detail } from './components/Detail/Detail';

export const formatDetails = (params: Item): Detail[] => {
  const {
    trackName,
    artistName,
    collectionExplicitness,
    collectionName,
    releaseDate,
  } = params;

  return [
    { label: 'title', value: trackName },
    { label: 'artist', value: artistName },
    {
      label: 'explicit',
      value: collectionExplicitness === 'explicit' ? 'Yes' : 'No',
    },
    { label: 'album', value: collectionName },
    { label: 'released', value: moment(releaseDate).format('LL') },
  ];
};
