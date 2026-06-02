import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface ExerciseCardProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ExerciseCard;