import pg from '../../package';

import VERSION from '../../src/VERSION';

describe('VERSION', () => {
  it('should have correct version number format', () => {
    expect(/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(VERSION)).toBe(true);
  });

  it('must match version in package.json', () => {
    expect(VERSION).toBe(pg.version);
  });
});
