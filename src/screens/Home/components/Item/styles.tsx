import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  image: { height: 60, width: 60, resizeMode: 'contain' },
  detailsContainer: { marginLeft: 10, flex: 1 },
  detail: { color: 'black' },
});

export default styles;
