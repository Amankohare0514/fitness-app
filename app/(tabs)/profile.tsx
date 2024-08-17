import Loader from "@/components/ui/loader";
import useUser from "@/hooks/auth/useUser";
import {
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {ScrollView, Image, TouchableOpacity, RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ProfileScreen() {
  const { user, loading, setRefetch,refetch } = useUser();
  const [image, setImage] = useState<any>(null);
  const [loader, setLoader] = useState(false);

  const onRefresh = useCallback(() => {
    setRefetch(true);

    setTimeout(() => {
      setRefetch(false);
    }, 2000);
  }, []);

  const logoutHandler = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    router.push("/(routes)/login");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setLoader(true);
      const base64Image = `data:image/jpeg;base64,${base64}`;
      setImage(base64Image);

      const accessToken = await AsyncStorage.getItem("access_token");
      const refreshToken = await AsyncStorage.getItem("refresh_token");

      try {
        const response = await axios.put(
          `https://fitness-app-server-qno7.onrender.com/api/v1/update-user-avatar`,
          {
            avatar: base64Image,
          },
          {
            headers: {
              "access-token": accessToken,
              "refresh-token": refreshToken,
            },
          }
        );
        if (response.data) {
          setRefetch(true);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      {loader || loading ? (
        <Loader />
      ) : (
        <LinearGradient
          colors={["#fff", "#fff"]}
          style={{ flex: 1, paddingTop: 80 }}
        >
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refetch} onRefresh={onRefresh} />
            }
          >
            <ThemedView style={{ flexDirection: "row", justifyContent: "center" }}>
              <ThemedView style={{ position: "relative" }}>
                <Image
                  source={{
                    uri:
                      image ||
                      user?.avatar?.url ||
                      "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",
                  }}
                  style={{ width: 90, height: 90, borderRadius: 100 }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 0,
                    width: 30,
                    height: 30,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 100,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={pickImage}
                >
                  <Ionicons name="camera-outline" size={25} />
                </TouchableOpacity>
              </ThemedView>
            </ThemedView>
            <ThemedText
              style={{
                textAlign: "center",
                fontSize: 25,
                paddingTop: 10,
                fontWeight: "600",
              }}
            >
             Hello, {user?.name}
            </ThemedText>
            <ThemedView style={{ marginHorizontal: 16, marginTop: 30 }}>
              <ThemedText
                style={{
                  fontSize: 20,
                  marginBottom: 16,
                }}
              >
                Account Details
              </ThemedText>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
                onPress={() => logoutHandler()}
              >
                <ThemedView
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 30,
                  }}
                >
                  <ThemedView
                    style={{
                      borderWidth: 2,
                      borderColor: "#dde2ec",
                      padding: 15,
                      borderRadius: 100,
                      width: 55,
                      height: 55,
                    }}
                  >
                    <Ionicons
                      style={{ alignSelf: "center" }}
                      name="log-out-outline"
                      size={20}
                      color={"black"}
                    />
                  </ThemedView>
                  <TouchableOpacity onPress={() => logoutHandler()}>
                    <ThemedText style={{ fontSize: 16 }}>Log Out</ThemedText>
                  </TouchableOpacity>
                </ThemedView>
                <TouchableOpacity>
                  <AntDesign name="right" size={26} color={"#CBD5E0"} />
                </TouchableOpacity>
              </TouchableOpacity>
            </ThemedView>
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
}
