import React, {PropsWithChildren} from 'react';
import {View, ViewStyle, Dimensions, StyleSheet} from 'react-native';

import {ROOT_BG} from '../../constants/colors';
import {ROOT_PADDING} from '../../constants/styles';
import TopBar from './TopBar';

const {height} = Dimensions.get('screen');

/**
 * @description SceneBuilder is used to give default styling of every scene.
 */
const SceneBuilder = ({
  style,
  showTopBar,
  children,
}: PropsWithChildren<{style?: ViewStyle; showTopBar?: boolean}>) => {
  return (
    <>
      {showTopBar && <TopBar />}
      <View
        style={[
          styles.default,
          style, // for parent specific styling, can override defaults
          showTopBar && {paddingTop: 0},
        ]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: ROOT_PADDING,
    minHeight: height,
    backgroundColor: ROOT_BG,
  },
});

export default SceneBuilder;
