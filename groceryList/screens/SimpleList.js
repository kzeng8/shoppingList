import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CheckBox } from 'react-native-elements';

const initialList = [
  {
    id: 1,
    description: "bread",
    gotten: true,
  },


];

class SimpleList extends Component {
  constructor(props) {
    super(props);
    /constructor(props) {
      super(props);
      this.state = { data: this._addKeysToList(initialList) };

      this.checkfunction = this.checkFunction.bind(this);
      this.checkfunction = this._addKeysToList(this);

  }

  checkFunction (item) {
    let tempData = this.state.data.map(i => {
      if (item.author === i.author) {
        i.checked = !i.checked;
      }
        return i;
      });
      this.setState({ data: tempData });

  }

  _renderItem = ({item}) => {

    return(
      <CheckBox
      title={item.author}
      onPress={() => {this.checkFunction(item);}}
      checked={item.checked}
      >
  );
  };

  _addKeysToList = shopList => {

    // assigns a unique key based on the field listed
    // in this case it is the author field
    return initList.map(initList => {
      return Object.assign(initList, { key: initList.author });
    };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  row: { fontSize: 36, padding: 42, borderWidth: 1, borderColor: "#DDDDDD" }
});

export default SimpleList;
