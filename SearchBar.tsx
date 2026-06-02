import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default SearchBar;