import moment from 'moment';
import React, { FC, useState, useEffect } from 'react';
import { View, SectionList, Text, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getData, storeData } from '../../utils/AsyncStorage';
import GroupControl from './components/GroupControl';
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

interface Props {
  navigation: {
    push: (screen: string, params: object) => void;
  };
}

const Home: FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, fetchData] = useFetch('');
  const [open, setOpen] = useState<boolean>(false);
  const [groupBy, setGroupBy] = useState<string>('');

  useEffect(() => {
    !groupBy && initializeGroupBy();
    Boolean(groupBy) && saveGroupBy(groupBy);
  }, [groupBy]);

  const initializeGroupBy = async (): Promise<void> => {
    const savedData = await getData('@groupBy');
    setGroupBy(Boolean(savedData) ? savedData.groupBy : 'album_name');
  };

  const saveGroupBy = async (groupBy: string): Promise<void> => {
    const json = {
      groupBy: groupBy,
    };
    storeData('@groupBy', json);
  };

  const executeSearch = (searchText: string): void => {
    if (Boolean(searchText)) {
      const params = searchText.split(' ').join('+');
      fetchData(`https://itunes.apple.com/search?term=${params}`);
    } else {
      fetchData('');
    }
  };

  const onTouchOutside = (): boolean => {
    setOpen(false);
    Keyboard.dismiss();

    return true;
  };

  return (
    <LinearGradient
      style={styles.parent}
      colors={['#00008B', 'black']}
      locations={[0, 0.5]}
      onStartShouldSetResponder={onTouchOutside}
    >
      <SearchBar
        placeholder="Search"
        searchText={searchText}
        setSearchText={setSearchText}
        isActive={isActive}
        setIsActive={setIsActive}
        executeSearch={executeSearch}
      />
      <GroupControl
        open={open}
        setOpen={setOpen}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
      />
      {Boolean(data?.results) ? (
        <SectionList
          style={styles.sectionList}
          sections={formatData(
            data.results,
            groupBy === 'album_name' ? 'collectionName' : 'releaseDate'
          )}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader
              title={
                groupBy === 'album_name' ? title : moment(title).format('LL')
              }
            />
          )}
          renderItem={({ item }) => (
            <Item
              item={item}
              onPress={(item) => navigation.push('Details', { ...item })}
              groupBy={groupBy}
            />
          )}
          stickySectionHeadersEnabled={true}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      ) : (
        <View style={styles.emptyList}>
          <Text>Empty</Text>
        </View>
      )}
    </LinearGradient>
  );
};

export default Home;
