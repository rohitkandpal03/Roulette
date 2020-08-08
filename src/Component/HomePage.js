import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Header, Image, Input, Button} from 'react-native-elements';
import Spinner from '../Spinner/Spinner';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const HomePage = (props) => {
  const [selectedValue, setSelectedValue] = useState(0);

  const [previousState, setPreviousState] = useState([]);
  const [box, setBox] = useState({
    boxSelected1: '',
    boxSelected2: '',
    boxSelected3: '',
    boxSelected4: '',
    boxSelected5: '',
    boxSelected6: '',
    boxSelected7: '',
    boxSelected8: '',
    boxSelected9: '',
    boxSelected10: '',
  });
  // const [boxSelected, setBoxSelected] = useState(false);
  const arrButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  matchWinner = (value) => {
    if (value === selectedValue) {
      if (!alert('Congrates!! You Win..')) {
        return previousState.unshift(value);
      }
    } else {
      if (!alert('Sorry!! Lucky number is ' + value)) {
        return previousState.unshift(value);
      }
    }
  };

  InputHandler = (event, name, data) => {
    setSelectedValue(data);
    console.log([`${name}`], event.nativeEvent.text, 'number', data);
    return setBox({[`${name}`]: event.nativeEvent.text});
  };

  renderCenterComponent = () => {
    return (
      <Image
        source={require('../assets/avatar.jpg')}
        style={{width: '2%', height: '2%'}}
      />
    );
  };

  // const selectedNumber = (number) => {
  //   setSelectedValue(number);
  //   return setBoxSelected(!boxSelected);
  // };

  return (
    <>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={renderCenterComponent()}
        rightComponent={{
          onPress: () => console.log('Presssed bawa'),
          text: '1000',
          color: '#fff',
        }}
      />
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Button
            title="Play Private"
            type="outline"
            titleStyle={{color: 'black'}}
            onPress={() => console.log('Play Private')}
            containerStyle={{
              width: '50%',
              height: '120%',
            }}
            buttonStyle={{backgroundColor: 'white', borderColor: 'black'}}
          />
          <Button
            title="Play Public"
            type="outline"
            titleStyle={{color: 'black'}}
            onPress={() => console.log('Play Public')}
            containerStyle={{
              width: '50%',
              height: '120%',
            }}
            buttonStyle={{backgroundColor: 'white', borderColor: 'black'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: '1%',
            marginBottom: '2%',
          }}>
          <Spinner value={matchWinner} selectedValueIs={selectedValue} />
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            marginTop: '6%',
            marginBottom: '2%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {arrButton.map((data, i) => {
            return (
              <View
                key={`box${data + i}`}
                style={{
                  flexDirection: 'row',
                  flexBasis: '40%',
                  alignItems: 'center',
                  marginTop: '2%',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 24, marginRight: '5%'}}>{data}</Text>
                <TextInput
                  value={eval(`box.boxSelected${data}`)}
                  keyboardType="numeric"
                  onChange={(event) =>
                    InputHandler(event, `boxSelected${data}`, data)
                  }
                  style={styles.outerInput}
                />
              </View>
            );
          })}
        </View>
        {console.log('previous State ...', previousState)}
        <View style={{paddingVertical: '6%'}} />
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {previousState.map((data) => (
            <Button
              key={`${data}` + Math.random()}
              title={`${data}`}
              buttonStyle={{backgroundColor: '#808080'}}
              containerStyle={{width: '20%', height: '120%', marginLeft: '1%'}}
              TouchableComponent={TouchableWithoutFeedback}
            />
          ))}
        </View>
      </ScrollView>
    </>
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
  box: {
    width: '30%',
    height: '20%',

    flexBasis: '40%',
    margin: '1%',
  },
  unSelectedBox: {
    borderRadius: 25,
    backgroundColor: 'red',
  },
  selectedBox: {
    borderRadius: 25,
    backgroundColor: 'green',
  },

  outerInput: {
    marginTop: '1%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    width: '50%',
    color: 'black',
    marginTop: '1%',
    fontSize: 18,
    backgroundColor: 'white',
    borderBottomColor: 'white',
  },
});

export default HomePage;
