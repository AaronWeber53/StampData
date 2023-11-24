import { NavBarData } from './nav-bar-data';

describe('NavBarData', () => {
  it('should create an instance', () => {
    expect(new NavBarData('', () => { } , '')).toBeTruthy();
  });
});
