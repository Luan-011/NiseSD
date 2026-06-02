import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";

type RootStackParamList = {
  Splas: undefined;
  Entrar: undefined;
  Tela1: undefined;
  DailyEvaluation: undefined;
  Welcome: undefined;
  Redefinir: undefined;
  Timer: undefined;
};

export default function TimerMindFulness() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
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

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleEnd = () => {
    setIsRunning(false);
    setSeconds(0);
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./assets/Mindfulness5.png")}
    >
      <View style={styles.container}>
        <View></View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>
        <View style={styles.containerLogo}>
          <SvgComponentLogoAzulInicio />
        </View>

        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>
        <TouchableOpacity style={styles.controlButton} onPress={handleEnd}>
          <Text style={styles.controlButtonText}>Encerrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    justifyContent: "center",
    marginLeft: 15,
    marginTop: -200,
    marginBottom: 200
  },
  backText: {
    color: "#1E1E2C",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#FFCC80",
    borderRadius: 25,
  },
  timerCircle: {
    borderRadius: 200,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#FFB201",
  },
  timerText: {
    color: "#555279",
    fontWeight: "bold",
    fontSize: 32,
  },
  controlButton: {
    backgroundColor: "#FFD980",
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  controlButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
