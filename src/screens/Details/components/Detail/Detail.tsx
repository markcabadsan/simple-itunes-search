import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export interface Detail {
  label: string;
  value?: string;
}

const Detail = ({ label, value }: Detail): JSX.Element => (
  <Text style={styles.detail}>
    <Text style={[styles.detail, styles.label]}>{label}:</Text> {value || '???'}
  </Text>
);

export default Detail;
