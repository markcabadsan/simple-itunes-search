import React, { FC } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

interface Props {
  open: boolean;
  groupBy: string;
  setOpen: (value: any) => void;
  setGroupBy: (value: any) => void;
}

const GroupControl: FC<Props> = ({ open, groupBy, setOpen, setGroupBy }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Group by:</Text>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={groupBy}
        setValue={setGroupBy}
        items={[
          { label: 'Album Name', value: 'album_name' },
          { label: 'Release Date', value: 'release_date' },
        ]}
        placeholder=""
        textStyle={styles.dropdownText}
        labelStyle={styles.dropdownLabel}
        dropDownContainerStyle={styles.dropdownContainer}
        style={styles.dropdown}
      />
    </View>
  );
};

export default GroupControl;
