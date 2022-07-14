import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (
  storageKey: string,
  value: object
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    const ret = await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log('storeData error', e);
  }
};

export const getData = async (storageKey: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('getData error', e);
  }
};
