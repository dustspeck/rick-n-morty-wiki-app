import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SceneBuilder from '../common/SceneBuilder';
import {RootStackParamList} from '../../navigations';
import {BLACK} from '../../constants/colors';
import {ROOT_PADDING} from '../../constants/styles';
import ProfileImage from './ProfileImage';
import ProfileStat from './ProfileProp';

const Profile = (
  props: NativeStackScreenProps<RootStackParamList, 'Profile'>,
) => {
  const character = props.route.params.data;

  return (
    <SceneBuilder showTopBar={true}>
      <View style={{margin: -ROOT_PADDING}}>
        <ProfileImage character={character} />
        <Text numberOfLines={2} style={styles.name}>
          {character.name}
        </Text>
        <ProfileStat character={character} />
      </View>
    </SceneBuilder>
  );
};

export default Profile;

const styles = StyleSheet.create({
  name: {
    color: BLACK,
    fontSize: 28,
    width: '100%',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
