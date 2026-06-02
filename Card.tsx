import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}></View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    height: 50,
    marginBottom: 10,
    backgroundColor: '#ccc',
    width: '100%',
  },
  text: {
    fontSize: 14,
  },
});

export default Card;