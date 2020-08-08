import React, {useState, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [city, setCity] = useState('');
  const [refered, setRefered] = useState('');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'Name':
        return {name: action.text};
      case 'MOBILE':
        return {mobileNo: action.text};
      case 'CITY':
        return {city: action.text};
      case 'REFERED_BY':
        return {refered: action.text};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    mobileNo: '',
    city: '',
    refered: '',
  });

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'column',
            padding: '5%',
            marginVertical: '30%',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
            }}>
            Contact Us
          </Text>
          <View style={{marginTop: '10%'}}>
            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="Name"
              leftIcon={
                <Icon name="person" type="material" size={24} color="black" />
              }
              onChangeText={(text) => dispatch({type: 'NAME', text: text})}
            />

            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="Mobile Number"
              leftIcon={
                <Icon
                  name="phone-android"
                  type="material"
                  size={24}
                  color="black"
                />
              }
              onChangeText={(text) => dispatch({type: 'MOBILE', text: text})}
            />
            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="City Name"
              leftIcon={
                <Icon
                  name="location-city"
                  type="material"
                  size={24}
                  color="black"
                />
              }
              onChangeText={(text) => dispatch({type: 'CITY', text: text})}
            />
            <Input
              containerStyle={styles.outerInput}
              inputContainerStyle={styles.textInput}
              placeholder="Refered By"
              leftIcon={
                <Icon name="share" type="material" size={24} color="black" />
              }
              onChangeText={(text) =>
                dispatch({type: 'REFERED_BY', text: text})
              }
            />
            <Button
              title="Submit"
              containerStyle={{
                marginTop: '6%',
                width: '40%',
                alignSelf: 'flex-end',
              }}
            />
          </View>
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

export default Contact;
