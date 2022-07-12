export const capitalize = (searchText: string): string => {
  const words = searchText.split(' ');
  let formattedWords: string[] = [];
  words.forEach((word) => {
    formattedWords.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  });

  return formattedWords.join(' ');
};
