import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

// test the getFullYear function
describe('getFullYear', () => {
  it('returns the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  it('returns the correct string when called with no arguments', () => {
    expect(getFooterCopy()).toBe('Holberton School main dashboard');
  });

  it('returns the correct string when called with an invalid argument', () => {
    expect(getFooterCopy('invalid')).toBe('Holberton School main dashboard');
  });
});

// test the getFooterCopy function
describe('getFooterCopy', () => {
  it('returns the correct string when the argument is true or false', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

// test the getLatestNotification function
describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });

  it('returns the correct string when called with an argument', () => {
    expect(getLatestNotification('argument')).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
