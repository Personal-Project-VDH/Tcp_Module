const {Dimensions} = require('react-native');

const {heigth} = Dimensions.get('window');

export const getFontSize = size => {
  let sizeTemp = size / 10;
  return (heigth * sizeTemp) / 100;
};
