// components/Search.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput placeholder="Search for products..." />
      <Button title="Search" onPress={() => {/* Handle search */}} />
    </View>
  );
};

export default Search;
