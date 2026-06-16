import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const imageSources: ImageSourcePropType[] = [
  require('./assets/intro.png'),
  require('./assets/intro2.png'),
  require('./assets/intro4.png'),
  require('./assets/intro6.png'),
  require('./assets/intro7.png'),
];

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const opacityValues = useRef(imageSources.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = imageSources.map((_, i) => {
      return Animated.timing(opacityValues[i], {
        toValue: 1,
        duration: 200,  
        delay: i * 200,  
        useNativeDriver: true,
      });
    });

    // 🌟 CORRIGIDO: Agora a animação termina e te joga para a tela de login ('inicio'),
    // respeitando a trava de segurança que colocamos no App.tsx!
    Animated.sequence(animations).start(() => {
      navigation.navigate('inicio');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {imageSources.map((source, index) => (
        <Animated.Image
          key={index}
          source={source}
          style={[styles.image, { opacity: opacityValues[index] }]}
          resizeMode="cover"  
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    position: 'absolute',
    width: width,   // Ajustado para garantir que cubra a tela corretamente
    height: height, // Ajustado para garantir que cubra a tela corretamente
  },
});