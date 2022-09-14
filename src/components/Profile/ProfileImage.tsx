import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICharacter} from '../../types';
import {selectStatusColor} from '../../utils/style';
import {GREY} from '../../constants/colors';

const {width} = Dimensions.get('screen');

const ProfileImage = ({character}: {character: ICharacter}) => {
  const statusColor = selectStatusColor(character.status);
  return (
    <View>
      <Image
        source={{uri: character.image}}
        style={[styles.image, {borderColor: statusColor}]}
      />
      <View style={styles.statusContainer}>
        <Text style={[styles.statusText, {backgroundColor: statusColor}]}>
          {`${character.status}`.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    height: width / 2,
    width: width / 2,
    marginHorizontal: width / 4,
    marginTop: 10,
    marginBottom: -16,
    borderRadius: width / 2,
    borderWidth: 4,
    borderColor: GREY,
  },
  statusContainer: {width: '100%', alignItems: 'center'},
  statusText: {
    textAlign: 'center',
    padding: 2,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
