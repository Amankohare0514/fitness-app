import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "../ThemedText";

const Loader = () => {
  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
    >
      <ThemedText style={{ textAlign: "center" }}>Loading...</ThemedText>
    </LinearGradient>
  );
};

export default Loader;
