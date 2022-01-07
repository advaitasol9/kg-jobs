//Module
import {Dimensions} from 'react-native';

// User screen Dimenssions and Calculation For UI that fits for each and every device
const {height: SCREEN_HEIGHT, width: CURRENT_WIDTH} = Dimensions.get('window');

const STANDARD_WIDTH = 375;
const K = CURRENT_WIDTH / STANDARD_WIDTH;
const USE_FOR_BIGGER_SIZE = true;
const ScaleHeight = SCREEN_HEIGHT / 812;

/**
 *
 * @param {*} size - Size (in numbers) given to width, heigth, paddings
 */
export function dynamicSize(size) {
  return K * size;
}

/**
 * function used for fontSizes
 * @param {*} size - font Size(in numbers)
 */
export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    return dynamicSize(size);
  }
  return size;
}

export const scaleHeight = height => Math.round(height * ScaleHeight);
