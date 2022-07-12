import React, { FC, useEffect, useState } from 'react';
import { View, SectionList, Text } from 'react-native';
import Item from './components/Item';
import SearchBar from './components/SearchBar';
import SectionHeader from './components/SectionHeader';
import useFetch from './hooks/useFetch';
import styles from './styles';
import { formatData } from './utils';

export interface Sections {
  title: string;
  data: any[];
}

const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, fetchData] = useFetch('');

  useEffect(() => {
    console.log('fetchedData', data);
    if (Boolean(data) && Boolean(data.results)) {
      formatData(data.results);
    }
  }, [data]);

  const executeSearch = (searchText: string): void => {
    if (Boolean(searchText)) {
      const params = searchText.split(' ').join('+');
      fetchData(`https://itunes.apple.com/search?term=${params}`);
    } else {
      fetchData('');
    }
  };

  return (
    <View style={styles.parent}>
      <SearchBar
        placeholder="Search"
        searchText={searchText}
        setSearchText={setSearchText}
        isActive={isActive}
        setIsActive={setIsActive}
        executeSearch={executeSearch}
      />
      {Boolean(data?.results) ? (
        <SectionList
          style={styles.sectionList}
          sections={formatData(data.results)}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader title={title} />
          )}
          renderItem={({ item }) => <Item item={item} onPress={() => {}} />}
          stickySectionHeadersEnabled={true}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      ) : (
        <View style={styles.emptyList}>
          <Text>Empty</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
