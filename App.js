import React from 'react';
import Login from './src/Component/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Contact from './src/Component/Contact';
import HomePage from './src/Component/HomePage';

const Stack = createStackNavigator();

// const Home = () => {
//   return (
//     <Stack.Navigator headerMode="screen" initialRouteName="HomePage">
//       <Stack.Screen name="HomePage" component={HomePage} />
//       {/* name="Main"
//         component={Main}
//         options={{
//           title: 'Quiz Room',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       /> */}
//     </Stack.Navigator>
//   );
// };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomePage">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
