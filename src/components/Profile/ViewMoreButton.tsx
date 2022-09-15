import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {CARD_BG, GREY} from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/styles';

const ViewMoreButton = ({
  isLoading,
  onPress,
}: {
  isLoading: boolean;
  onPress: Function;
}) => {
  const handleOnPress = () => {
    onPress();
  };
  return (
    <Pressable
      style={styles.viewMoreButton}
      onPress={handleOnPress}
      disabled={isLoading}>
      <Text
        style={{
          color: GREY,
          textAlign: 'center',
          backgroundColor: CARD_BG,
          marginHorizontal: '30%',
          paddingVertical: 10,
          borderRadius: BORDER_RADIUS / 2,
        }}>
        {isLoading ? <ActivityIndicator color={GREY} /> : 'LOAD MORE'}
      </Text>
    </Pressable>
  );
};

export default ViewMoreButton;

const styles = StyleSheet.create({
  viewMoreButton: {
    padding: 10,
    color: GREY,
  },
});
