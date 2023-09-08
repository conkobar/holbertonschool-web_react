// returns the current year
const getFullYear = () => new Date().getFullYear();

// checks index and returns proper string
const getFooterCopy = (isIndex) =>
  'Holberton School' ? isIndex : 'Holberton School main dashboard';

// returns most recent notification
const getLatestNotification = () =>
  '<strong>Urgent requirement</strong> - complete by EOD';

export { getFullYear, getFooterCopy, getLatestNotification };
