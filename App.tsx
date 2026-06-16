import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 🌟 IMPORTAÇÃO DAS SUAS TELAS (Verifique se os caminhos/nomes batem com os seus arquivos)
import SplashScreen from "./Splas"; 
import EntrarScreen from "./EntrarScreen"; 
import CadCriar from "./CadCriar"; 
import CadPaci from "./CadPaci";
import CadProfi from "./CadProfi";
import RedefinirScreen from "./Redefinir";

// Telas internas do App (Projeto Nise)
import Tela1 from "./Tela";
import WelcomeScreen from "./WelcomeScreen";
import DailyEvaluationScreen from "./DailyEvaluationScreen";
import RespiracaoTipos from "./RespiracaoTipos";
import Timer from "./Timer";
import FeedbackIAScreen from "./FeedbackIAScreen"; // Ajuste o caminho
import Diario from "./Diario";
import RedeDeApoio from "./RedeDeApoio";
import OndasSonoras from "./OndasSonoras";
import Respiracao from "./Respiracao";
import MindFulness from "./MindFulness";
import LerArtigos from "./LerArtigos";
import MindFulnessSobre from "./MindFulnessSobre";
import MindFulnessPratica from "./MindFulnessPratica";
import TimerMindFulness from "./TimerMindFulness";
import TelaLerArtigos from "./TelaLerArtigos";
import ConfigPaciente from "./ConfigPaciente";
import TelaDeTestes from "./TelaDeTestes";
import RedeDeApoioPessoas from "./RedeDeApoioPessoas";
import RespiracaoDiafragmatica from "./RespiracaoDiafragmatica";

const Stack = createNativeStackNavigator();

export default function App() {
  // 🔐 Começa como 'false' para obrigar o usuário a passar pela tela de login/registro.
  const [isLogged, setIsLogged] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {!isLogged ? (
          // 🚪 FLUXO DE DESLOGADO (Autenticação / Registro)
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            
            {/* CORRIGIDO: Injeção de props com tipagem explícita 'any' para o TypeScript */}
            <Stack.Screen name="inicio">
              {(props: any) => (
                <EntrarScreen {...props} setIsLogged={() => setIsLogged(true)} />
              )}
            </Stack.Screen>
            
            {/* CORRIGIDO: Passando via render callback tipado para evitar conflitos de rota */}
            <Stack.Screen name="Cadastro criar">
              {(props: any) => <CadCriar {...props} />}
            </Stack.Screen>
            
            <Stack.Screen name="Cadastro paciente" component={CadPaci} />
            <Stack.Screen name="Cadastro profissional" component={CadProfi} />
            <Stack.Screen name="Redefinir" component={RedefinirScreen} />
          </>
        ) : (
          // 🏠 FLUXO DE LOGADO (Telas Internas do App)
          <>
            <Stack.Screen name="home" component={Tela1} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="DailyEvaluation" component={DailyEvaluationScreen} />
            <Stack.Screen name="RespiracaoTipos" component={RespiracaoTipos} />
            <Stack.Screen name="Timer" component={Timer} />
            <Stack.Screen name="Diario" component={Diario} />
            <Stack.Screen name="RedeDeApoio" component={RedeDeApoio} />
            <Stack.Screen name="FeedbackIA" component={FeedbackIAScreen} />
            <Stack.Screen name="OndasSonoras" component={OndasSonoras} />
            <Stack.Screen name="Respiracao" component={Respiracao} />
            <Stack.Screen name="MindFulness" component={MindFulness} />
            <Stack.Screen name="LerArtigos" component={LerArtigos} />
            <Stack.Screen name="MindFulnessSobre" component={MindFulnessSobre} />
            <Stack.Screen name="MindFulnessPratica" component={MindFulnessPratica} />
            <Stack.Screen name="TimerMindFulness" component={TimerMindFulness} />
            <Stack.Screen name="TelaLerArtigos" component={TelaLerArtigos} />
            <Stack.Screen name="ConfigPaciente" component={ConfigPaciente} />
            <Stack.Screen name="TelaDeTestes" component={TelaDeTestes} />
            <Stack.Screen name="RedeDeApoioPessoas" component={RedeDeApoioPessoas} />
            <Stack.Screen name="RespiracaoDiafragmatica" component={RespiracaoDiafragmatica} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}