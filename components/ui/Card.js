import { View, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // -> esta propiedad es solo para android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})