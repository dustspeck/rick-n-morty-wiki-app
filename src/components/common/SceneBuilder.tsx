import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import {ROOT_BG} from '../../constants/colors';
import {ROOT_PADDING} from '../../constants/styles';
import {ISceneBuilderProps} from '../../types';
import TopBar from './TopBar';

const {height} = Dimensions.get('screen');

/**
 * @description SceneBuilder is used to give default styling of every scene.
 */
const SceneBuilder = ({style, showTopBar, children}: ISceneBuilderProps) => {
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
