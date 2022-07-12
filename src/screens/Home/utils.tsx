import { Sections } from './Home';

export const formatData = (data: any[]): Sections[] => {
  let formattedData: Sections[] = [];
  const sectionTitles = [
    ...new Set(data.map(({ collectionName }) => collectionName)),
  ];
  sectionTitles.sort().forEach((title) => {
    const subData = [
      ...new Set(data.filter(({ collectionName }) => collectionName === title)),
    ];
    formattedData.push({
      title,
      data: subData.sort((a, b) => a.trackName.localeCompare(b.trackName)),
    });
    console.log('formattedData', formattedData);
  });

  return formattedData;
};
