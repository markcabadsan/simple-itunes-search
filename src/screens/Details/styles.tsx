import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: 150, width: 150, resizeMode: 'contain' },
  detailsContainer: { marginTop: 40 },
  back: { position: 'absolute', top: 10, left: 10 },
});

export default styles;
