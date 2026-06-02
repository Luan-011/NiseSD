import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FBB03B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default PrimaryButton;