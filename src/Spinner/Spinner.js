import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';

import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rewards = participants.map((e) => ({
  uri: `https://i.pravatar.cc/300?$1`,
}));

class Spinner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      isUnmount: false,
      winners: 2,
    };

    this.child = React.createRef();
  }

  findNumber = () => {
    console.log('math ', Math.random());
    this.setState({winners: Math.floor(Math.random() * 10) + 1});
  };

  render() {
    return (
      <>
        <WheelOfFortune
          onRef={(ref) => (this.child = ref)}
          rewards={rewards}
          knobSize={20}
          borderWidth={3}
          borderColor={'#FFF'}
          innerRadius={30}
          duration={5000}
          winner={this.state.winners}
          playButton={() => (
            <>
              <Button
                containerStyle={{marginTop: '2%'}}
                title={'Press me'}
                onPressIn={this.findNumber.bind(this)}
                onPress={() => {
                  if (this.props.selectedValueIs == 0) {
                    return alert('Please firstly place a bait in any number');
                  }
                  return this.child._onPress();
                }}
              />
            </>
          )}
          getWinner={(value, index) => {
            this.props.value(this.state.winners);
            return this.setState({
              winnerValue: value,
              winnerIndex: this.state.winners,
            });
          }}
        />
      </>
    );
  }
}
export default Spinner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  winner: {
    width: '100%',
    position: 'absolute',
    padding: 10,
    backgroundColor: '#fff',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 26,
    color: '#666',
  },
  tapToStart: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
});
