export const revHexToDec = revHex => {
  return parseInt(
    revHex
      .split(/(.{2})/)
      .filter(O => O)
      .reverse()
      .join(''),
    16,
  );
};
