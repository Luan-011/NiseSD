import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface RecordsButtonProps {
  title: string;
  onPress?: () => void;
}

const RecordsButton: React.FC<RecordsButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d9e7ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
});

export default RecordsButton;