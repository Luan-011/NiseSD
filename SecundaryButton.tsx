import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

interface SecondaryButtonProps {
  title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title }) => {
  const navigation = useNavigation<NavigationProp<any>>();

const confirm = () =>{
  Alert.alert(
    'Deseja cancelar?',
    'Todos os dados serão perdidos.',
    [
      {
        text: 'Não',
        onPress: () => navigation.goBack,
        style: 'cancel',
        
      },
      {
        text: 'Sim',
        onPress: () => navigation.navigate("home"),
        style: 'destructive',
        
      },
    ],
    {
      cancelable: true,
      onDismiss: (() => navigation.goBack
        ),
    },
  );

}

  return (
      <TouchableOpacity style={styles.button} onPress={confirm}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default SecondaryButton;
