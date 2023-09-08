// returns the current year
const getFullYear = () => new Date().getFullYear();

// checks index and returns proper string
const getFooterCopy = (isIndex) =>
  'Holberton School' ? isIndex : 'Holberton School main dashboard';

export { getFullYear, getFooterCopy };
