import React, {useState, useRef, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Image, Avatar, Button} from 'react-native-elements';
import Spinner from '../Spinner/Spinner';

import WheelOfFortune from 'react-native-wheel-of-fortune';
import {
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Svg from 'react-native-svg';

const SelectButton = (props) => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        marginTop: '6%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, i) => {
        return (
          <TouchableOpacity key={`a${data}`}>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                {data}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
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
    backgroundColor: 'red',
    borderRadius: 25,
    flexBasis: '40%',
    margin: '1%',
  },
});

export default SelectButton;
