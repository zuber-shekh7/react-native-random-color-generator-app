const generateRandomColor = () => {
  const [red, green, blue] = generateRandomNumber();
  return `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
};

const generateRandomNumber = () => {
  return [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
};

const rgbToHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
export default generateRandomColor;
