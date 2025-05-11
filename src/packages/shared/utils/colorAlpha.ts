export const getColorAlpha = (color: string, opacity = 1): string => {
  return (
    color +
    Math.floor(0xff * opacity)
      .toString(16)
      .padStart(2, '0')
  );
};
