import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar, Input, Icon, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [avatar_url, setAvatarUrl] = useState(require('../assets/avatar.jpg'));

  const ToggleHandler = () => setToggle(!toggle);
  const ToggleConfirmHandler = () => setToggling(!toggling);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: '5%', padding: '5%'}}>
          <TouchableWithoutFeedback>
            <Avatar
              size="xlarge"
              imageProps={{resizeMode: 'center'}}
              source={avatar_url}
              containerStyle={{
                borderColor: '#e4e3e3',
                alignSelf: 'center',
              }}
              overlayContainerStyle={{backgroundColor: '#e4e3e3'}}
              rounded
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              fontSize: 50,
              fontWeight: '700',
              alignSelf: 'center',
              marginTop: '3%',
            }}>
            {' '}
            Login{' '}
          </Text>
          <View style={{marginTop: '8%'}}>
            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              leftIcon={
                <Icon
                  name="phone-android"
                  type="material"
                  size={24}
                  color="black"
                />
              }
              rightIconContainerStyle={{alignSelf: 'center'}}
              onChangeText={(text) => setPassword(text)}
            />

            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="Password"
              secureTextEntry={!toggle}
              rightIconContainerStyle={{alignSelf: 'center'}}
              onChangeText={(text) => setPassword(text)}
              leftIcon={
                <Icon name="lock" type="material" size={24} color="black" />
              }
              rightIcon={
                <TouchableOpacity onPress={ToggleHandler}>
                  {toggle ? (
                    <Icon name="visibility" type="material" />
                  ) : (
                    <Icon name="visibility-off" type="material" />
                  )}
                </TouchableOpacity>
              }
            />

            <Button
              title="Login"
              containerStyle={{
                marginTop: '15%',
                width: '40%',
                alignSelf: 'flex-end',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Contact')}>
            <Text
              style={{
                fontSize: 18,
                borderBottomColor: 'blue',
                color: 'blue',
                borderBottomWidth: 1,
                width: '28%',
              }}>
              {' '}
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    height: 40,
    borderColor: '#F4F6FF',
    color: 'black',
    fontSize: 12,
    backgroundColor: '#f4f4f4',
  },
  outerInput: {
    height: 40,
    borderColor: '#F4F6FF',
    borderWidth: 1,
    borderRadius: 20,
    color: 'black',
    marginTop: '3%',
    backgroundColor: '#f4f4f4',
  },
});

export default Login;
