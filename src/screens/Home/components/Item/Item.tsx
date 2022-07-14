import moment from 'moment';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export interface Item {
  artworkUrl60: string;
  artworkUrl100?: string;
  trackName?: string;
  artistName?: string;
  collectionExplicitness: string;
  collectionName: string;
  releaseDate: string;
}
interface Props {
  item: Item;
  groupBy: string;
  onPress: (item: any) => void;
}

const Item: FC<Props> = ({ item, groupBy, onPress }) => {
  const {
    artworkUrl60,
    trackName,
    artistName,
    collectionExplicitness,
    collectionName,
    releaseDate,
  } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image source={{ uri: artworkUrl60 }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>Title: {trackName || '???'}</Text>
        <Text style={styles.detail}>Artist: {artistName || '???'}</Text>
        {/* <Text style={styles.detail}>
          Explicit: {collectionExplicitness === 'explicit' ? 'Yes' : 'No'}
        </Text>
        {groupBy === 'album_name' ? (
          <Text style={styles.detail}>
            Released: {moment(releaseDate).format('LL')}
          </Text>
        ) : (
          <Text style={styles.detail}>Album: {collectionName}</Text>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export default Item;
