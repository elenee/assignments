import { isEven } from './utils';

describe('utils function', () => {
  describe('isEven function', () => {
    it('should return true when passed even number', () => {
      const res = isEven(4);
      expect(res).toBe(true);
    });
    it('should return false when passed odd number', () => {
      const res = isEven(5);
      expect(res).toBe(false);
    });
  });
});
