import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text
} from 'react-native';
import Barang from './Component/Barang';

class App extends Component {
  render(){
    return(
      <>
        <StatusBar backgroundColor="gray" />
        <View>
          <Text>TUGAS 2 REACT NATIVE</Text>
          <Barang namabelanja="================ Total Belanja ================" />
        </View>
      </>
    );
  }
}

export default App;
