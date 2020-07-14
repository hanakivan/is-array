import isArray from './index';

test('generates string', () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray("array")).toBeFalsy();
    expect(isArray("object")).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray([])).toBeTruthy();
});