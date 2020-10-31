/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useState} from 'react';
// import {View, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import globalStyles from '../../globalstyles/globalStyles';

import {
  Layout,
  Text,
  Input,
  Button,
  Icon,
  Divider,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';
import {Directions} from 'react-native-gesture-handler';
import {View} from 'native-base';

const ForwardIcon = (props) => (
  <Icon name="arrow-forward-outline" {...props}></Icon>
);

const JoinIcon = (props) => <Icon name="link-outline" {...props}></Icon>;

const CreateChannel = (props) => {


  return (
    
    <Layout style={globalStyles.homeContainer} level="1">
      <Layout style={globalStyles.homeScreenContainer} level="1">
        <Text
          style={{alignSelf: 'flex-start', fontWeight: 'bold'}}
          category="h5">
          Lets get you started!
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate('Video');
          }}
          size="large"
          accessoryRight={ForwardIcon}
          style={{
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 25,
            marginBottom: 15,
          }}>
          Create a Channel
        </Button>
        <Divider />
        <Text
          style={{
            alignSelf: 'flex-start',
            marginTop: 15,
            marginBottom: 5,
            fontWeight: 'bold',
          }}
          category="h5">
          Join!
        </Text>

        <Formik initialValues={{channelId: ''}} onSubmit={(values) => {
          props.navigation.navigate('Video',{channelId:values.channelId})
        }}>
          {(props) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Input
                placeholder="Channel Id"
                size="large"
                onChangeText={props.handleChange('channelId')}
                value={props.values.channelId}
                style={{width: '80%', margin: 2}}></Input>
              <Button
                size="large"
                appearance="ghost"
                onPress={props.handleSubmit}
                accessoryLeft={ForwardIcon}></Button>
            </View>
          )}
        </Formik>

        {/* <Input status></Input>
        <Layout level='3' style={{height:'20%',width:'20%',flex: 1, flexDirection: 'row'}}>

          
        </Layout> */}

        {/* <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
          
        }}>
        {(props) => (
          
        )}
      </Formik> */}
      </Layout>
      {/* <Layout level="2" style={{flex: 1, flexDirection: 'row', width: '90%'}}>
        <Input placeholder="Channel Id"></Input>
        <Button size="tiny">Join</Button>
      </Layout> */}
    </Layout>
  );
};

// const styles = StyleSheet.create({});

export default CreateChannel;
