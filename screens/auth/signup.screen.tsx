import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginColors } from "@/constants/Colors";

const SignUpScreen = () => {
  const router = useRouter();

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
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

  const handleSignUp = async () => {
    await axios
      .post(
        `https://fitness-app-server-qno7.onrender.com/api/v1/registration`,
        {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        }
      )
      .then(async (res) => {
        await AsyncStorage.setItem(
          "activation_token",
          res.data.activationToken
        );
        // toast.show(res.data.message, {
        //   type: "success",
        // });
        setButtonSpinner(false);
        router.push("/(routes)/verify-account");
      })
      .catch((error) => {
        setButtonSpinner(false);
        console.log(error);
        // toast.show("Something went wrong", {
        //   type: "danger",
        // });
      });
  };

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
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      {/* form  */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={"note"}
            size={30}
            color={loginColors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Full Name"
            placeholderTextColor={loginColors.secondary}
            // secureTextEntry={secureEntery}
            keyboardType="default"
            value={userInfo.name}
            onChangeText={(value) => setUserInfo({ ...userInfo, name: value })}
          />
        </View>
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
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={"lock"}
            size={30}
            color={loginColors.secondary}
          />
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            secureTextEntry={!isPasswordVisible}
            defaultValue=""
            placeholder="******"
            onChangeText={(value) => handlePasswordValidation(value)}
            placeholderTextColor={loginColors.secondary}
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
          <View>
            <Entypo name="cross" size={10} color="red" />
            <Text style={{ color: "red" }}>{error.password}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignUp}
        >
          {buttonSpinner ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={styles.loginText}>Sign up</Text>
          )}
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account!</Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: loginColors.white,
    padding: 20,
    height: "100%",
    justifyContent: "center"
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: loginColors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "bold",
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: loginColors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: loginColors.white,
    fontSize: 20,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
