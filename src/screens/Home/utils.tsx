import { Sections } from './Home';

export const formatData = (data: any[], groupBy: string): Sections[] => {
  let formattedData: Sections[] = [];
  const sectionTitles = [...new Set(data.map((item) => item[groupBy]))];
  sectionTitles.sort().forEach((title) => {
    const subData = [
      ...new Set(data.filter((item) => item[groupBy] === title)),
    ];
    formattedData.push({
      title,
      data: subData.sort((a, b) => a.trackName.localeCompare(b.trackName)),
    });
  });

  return formattedData;
};
