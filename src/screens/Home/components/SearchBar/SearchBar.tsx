import React, { FC } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { capitalize } from './utils';

interface Props {
  placeholder: string;
  searchText: string;
  isActive: boolean;
  setSearchText: (searchText: string) => void;
  setIsActive: (bool: boolean) => void;
  executeSearch: (searchText: string) => void;
}

const SearchBar: FC<Props> = (props) => {
  const {
    placeholder,
    searchText,
    isActive,
    setSearchText,
    setIsActive,
    executeSearch,
  } = props;

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="black" />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(text) => setSearchText(capitalize(text))}
        value={searchText}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onSubmitEditing={({ nativeEvent: { text } }) => executeSearch(text)}
        autoCapitalize="words"
      />
      {isActive && Boolean(searchText) && (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Ionicons name="close-outline" size={25} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
