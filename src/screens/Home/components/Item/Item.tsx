import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

interface Props {
  item: {
    artworkUrl60: string;
    trackName?: string;
    artistName?: string;
    collectionExplicitness: string;
  };
  onPress: () => void;
}

const Item: FC<Props> = ({ item, onPress }) => {
  const { artworkUrl60, trackName, artistName, collectionExplicitness } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: artworkUrl60 }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>Title: {trackName || '???'}</Text>
        <Text style={styles.detail}>Artist: {artistName || '???'}</Text>
        <Text style={styles.detail}>
          Explicit: {collectionExplicitness === 'explicit' ? 'Yes' : 'No'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
