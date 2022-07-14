import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: { marginRight: 5, color: 'white' },
  dropdownText: {
    fontWeight: 'normal',
    color: 'black',
    fontSize: 14,
  },
  dropdownLabel: {
    fontWeight: 'normal',
    color: 'black',
    fontSize: 14,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    width: 150,
  },
  dropdown: { width: 150, borderColor: 'transparent' },
});

export default styles;
