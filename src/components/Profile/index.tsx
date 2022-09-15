import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SceneBuilder from '../common/SceneBuilder';
import {RootStackParamList} from '../../navigations';
import {BLACK, GREY} from '../../constants/colors';
import {ROOT_PADDING} from '../../constants/styles';
import ProfileImage from './ProfileImage';
import PropSection from './PropSection';
import WhereaboutsSection from './WhereaboutsSection';

const Profile = (
  props: NativeStackScreenProps<RootStackParamList, 'Profile'>,
) => {
  const character = props.route.params.data;

  return (
    <SceneBuilder showTopBar={true}>
      <ScrollView
        centerContent
        showsVerticalScrollIndicator={false}
        style={styles.container}
        onScrollEndDrag={() => {
          console.log('ended');
        }}>
        <View>
          {/* Profile Image */}
          <ProfileImage character={character} />
          {/* Character Name */}
          <Text numberOfLines={2} style={styles.name}>
            {character.name}
          </Text>
          {/* Basic Properties */}
          <PropSection character={character} />
          {/* Advanced Properties */}
          <WhereaboutsSection
            origin={character.origin}
            location={character.location}
          />

          {/* End Note */}
          <View style={{height: 200}}>
            <Text style={styles.footerText}>That's all we know!</Text>
          </View>
        </View>
      </ScrollView>
    </SceneBuilder>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {marginHorizontal: -ROOT_PADDING},
  footerText: {
    color: `${GREY}55`,
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
  },
  name: {
    color: BLACK,
    fontSize: 28,
    width: '100%',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
