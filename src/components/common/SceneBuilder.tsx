import React, {PropsWithChildren} from 'react';
import {View, ViewStyle, Dimensions, StyleSheet} from 'react-native';

import {ROOT_BG} from '../../constants/colors';
import {ROOT_PADDING} from '../../constants/styles';

const {height} = Dimensions.get('screen');

/**
 * @description SceneBuilder is used to give default styling of every scene.
 * @param {ViewStyle} style Override style of SceneBuilder.
 */
const SceneBuilder = ({
  style,
  children,
}: PropsWithChildren<{style?: ViewStyle}>) => {
  return <View style={[styles.default, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: ROOT_PADDING,
    minHeight: height,
    backgroundColor: ROOT_BG,
  },
});

export default SceneBuilder;
