import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const SectionHeader: FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SectionHeader;
