import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Button } from "react-native";

const WelcomeIntro = () => {
  const router = useRouter();
  return <ThemedView>
    <ThemedText>Welcome intro</ThemedText>
    <Button title="Login" onPress={() => router.push("/(routes)/login")} />
  </ThemedView>
};

export default WelcomeIntro;
