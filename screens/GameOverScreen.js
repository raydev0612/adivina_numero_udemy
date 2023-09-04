import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from '../components/ui/PrimaryButtons'
import Colors from "../constants/colors";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {

  const {width, height} = useWindowDimensions()

  let imageSize = 300

  if (width < 380){
    imageSize = 150
  }

  if (height < 400){
    imageSize = 80
  }
  
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>Seu telefone precisou de <Text style={styles.highLight}>{roundsNumber}</Text> rodadas para adivinhar o número <Text style={styles.highLight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onStartNewGame}>Começar Novo Jogo</PrimaryButton>
    </View>
    </ScrollView>
  );
};

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    //width: deviceWidth < 380 ? 180 : 300,
    //height: deviceWidth < 380 ? 180 : 300,
    //borderRadius: deviceWidth < 380 ? 90 : 150,
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
