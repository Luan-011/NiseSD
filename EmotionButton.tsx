import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

interface EmotionButtonProps {
  name: string;
  emoji: string;
  handlePress?(): void;
}

const EmotionButton: React.FC<EmotionButtonProps> = ({ name, emoji, handlePress }) => {
  const [buttonEmo, setButtonEmo] = useState(false);
  const onPressEmo = () => {
    setButtonEmo(!buttonEmo);
    handlePress && handlePress();
  };

  return (
    <GestureHandlerRootView style={styles.button}>
      <View style={styles.div}>
        <TouchableOpacity
          onPress={onPressEmo}
          style={[styles.styleButton, buttonEmo ? styles.press : null]}
        >
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "22%",
    alignItems: "center",
    marginBottom: 10,
  },
  div:{
    width: 69,
  },
  styleButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 70
  },
  press: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    height: 70,
    width: 69 
  },
  emoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  text: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EmotionButton;
