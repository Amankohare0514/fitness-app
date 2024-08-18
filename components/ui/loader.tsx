
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <ThemedView>
      <AnimatedLoader
        visible={true}
        overlayColor="white"
        animationStyle={{ width: 350, height: 350 }}
        speed={1.5}
        source={require("@/assets/loading.json")}
      />
    </ThemedView>
  );
};

export default Loader;
