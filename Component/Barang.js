import React, { Component } from 'react';
import {
  Text,
  TextInput
} from 'react-native';

class Barang extends Component {
  constructor(props){
    super(props);
    this.state = {
      barang: "",
      jumlah: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value,e){
    this.setState({
      [value]: e
    });
  }

  render(){
    return(
      <>
        <TextInput
          onChangeText={e => this.handleChange("barang",e)}
          placeholder="Masukkan Nama Barang"
          value={this.state.barang}
        />
        <TextInput
          onChangeText={e => this.handleChange("jumlah",e)}
          placeholder="Masukkan Jumlah"
          keyboardType="numeric"
          value={this.state.jumlah}
        />
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang: {this.state.barang}</Text>
        <Text>Jumlah Barang: {this.state.jumlah}</Text>
      </>
    );
  }
}

export default Barang;
