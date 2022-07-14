import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Item } from '../Home/components/Item/Item';
import Detail from './components/Detail';
import styles from './styles';
import { formatDetails } from './utils';

interface Props {
  route: { params: Item };
  navigation: { pop: () => void };
}

const Details: FC<Props> = ({ route, navigation }) => {
  const { artworkUrl100, ...rest } = route.params;
  const formattedDetails = formatDetails(rest);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#00008B', 'black']}
      locations={[0, 0.5]}
    >
      <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image source={{ uri: artworkUrl100 }} style={styles.image} />
      <View style={styles.detailsContainer}>
        {formattedDetails.map(({ label, value }, index) => (
          <Detail key={index + label + value} label={label} value={value} />
        ))}
      </View>
    </LinearGradient>
  );
};

export default Details;
