import { Image, View, StyleSheet, Text } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from '../components/ui/PrimaryButtons'
import Colors from "../constants/colors";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>Seu telefone precisou de <Text style={styles.highLight}>{roundsNumber}</Text> rodadas para adivinhar o número <Text style={styles.highLight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onStartNewGame}>Começar Novo Jogo</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
});
