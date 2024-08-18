import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginColors } from "@/constants/Colors";
import useUser from "@/hooks/auth/useUser";

const LoginScreen = () => {
  const router = useRouter();
  const {user} = useUser()
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState(false);
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValues = /(?=.{6,})/;
    if (!passwordSpecialCharacter.test(password)) {
      setError({ ...error, password: "Enter atleast one special character" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({ ...error, password: "Enter atleast one number" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValues.test(password)) {
      setError({ ...error, password: "Enter atleast 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...error, password: "" });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleSignIn = async () => {
    console.log("clicked")
    if (!userInfo.email || !userInfo.password) {
      setRequired(true);
      return;
    }
    await axios
      .post(`https://fitness-app-server-qno7.onrender.com/api/v1/login`, {
        email: userInfo.email,
        password: userInfo.password,
      })
      .then(async (res) => {
        setButtonSpinner(true);
        console.log(res.data.user.age);
        await AsyncStorage.setItem("access_token", res.data.accessToken);
        await AsyncStorage.setItem("refresh_token", res.data.refreshToken);
        setButtonSpinner(false);
        // wait for 3 second before router.push
        if(!res.data.user.age){
          router.push("/(routes)/ask-user-details")
        }
        else{
          router.push("/(tabs)")
        }       
      })
      .catch((error) => {
        setButtonSpinner(false);
        console.log(error.message);
        // toast.show("Something went wrong", {
        //   type: "danger",
        // });
      });
  };

  console.log(userInfo);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={() => router.back()}
      >
        <Ionicons
          name={"arrow-back-outline"}
          color={loginColors.primary}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      {/* form  */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"mail-outline"}
            size={30}
            color={loginColors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={loginColors.secondary}
            keyboardType="email-address"
            value={userInfo.email}
            onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
          />
          {required && (
            <View>
              <Entypo name="cross" size={18} color={"red"} />
            </View>
          )}
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={"lock"}
            size={30}
            color={loginColors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={loginColors.secondary}
            placeholder="******"
            secureTextEntry={!isPasswordVisible}
            defaultValue=""
            onChangeText={(value) => handlePasswordValidation(value)}
            keyboardType="default"
          />
          <TouchableOpacity
            onPress={() => setisPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Ionicons
                name="eye-off-outline"
                size={20}
                color={loginColors.secondary}
              />
            ) : (
              <Ionicons
                name="eye-outline"
                size={20}
                color={loginColors.secondary}
              />
            )}
          </TouchableOpacity>
        </View>
        {error.password && (
          <View style={{ display: "flex", justifyContent: "center" }}>
            <Entypo name="cross" size={10} color="red" />
            <Text style={{ color: "red" }}>{error.password}</Text>
          </View>
        )}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.loginButtonWrapper}
        >
          {buttonSpinner ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/sign-up")}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: loginColors.white,
    padding: 20,
    justifyContent: "center",
    height: "100%",
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: loginColors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: loginColors.primary,
    fontWeight: "bold",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: loginColors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: loginColors.primary,
    marginVertical: 10,
    fontWeight: "bold",
  },
  loginButtonWrapper: {
    backgroundColor: loginColors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: loginColors.white,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    color: loginColors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: loginColors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: loginColors.primary,
  },
  signupText: {
    color: loginColors.primary,
    fontWeight: "bold",
  },
});
