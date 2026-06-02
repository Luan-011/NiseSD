import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "./Styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";

type RootStackParamList = {
  Splas: undefined;
  Entrar: undefined;
  Tela1: undefined;
  DailyEvaluation: undefined;
  Welcome: undefined;
  Redefinir: undefined;
  Timer: undefined;
};

export default function Timer() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}s`;
  };
  const handleLua = () =>{
    setIsRunning(!isRunning)
  }

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleEnd = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./assets/Meditação-4.png")}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>
        <Text style={styles.title}>MEDITAÇÃO</Text>
        <TouchableOpacity onPress={handleLua}>
          <ImageBackground
            style={styles.timerCircle}
            source={require("./assets/moon.png")}
          >
            <Text style={styles.timerText}>{formatTime(seconds)}</Text>
          </ImageBackground>
        </TouchableOpacity>
        {isRunning ? (
          <TouchableOpacity style={styles.controlButton} onPress={handlePause}>
            <Text style={styles.controlButtonText}>
              PAUSAR &#10074;&#10074;
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.controlButton} onPress={handleStart}>
            <Text style={styles.controlButtonText}>INICIAR &#9654;</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.controlButton} onPress={handleEnd}>
          <Text style={styles.controlButtonText}>ENCERRAR &#10006;</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
