import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { VerifyScreenStyles } from "@/styles/verifyscreen/verifyscreenstyles";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { loginColors } from "@/constants/Colors";


const VerifyScreen = () => {
  const router = useRouter();

  const [code, setCode] = useState(new Array(4).fill(""));
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));

  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }
    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  const handleSubmit = async () => {
    const otp = code.join("");
    const activationToken = await AsyncStorage.getItem("activation_token");
    await axios
      .post(
        `https://fitness-app-server-qno7.onrender.com/api/v1/activate-user`,
        {
          activation_token: activationToken,
          activation_code: otp,
        }
      )
      .then((res) => {

        console.log(res.data)
        // toast.show(res.data.message, {
        //   type: "success",
        // });
        setCode(new Array(4).fill(""));
        router.push("/(routes)/login");
      })
      .catch((error) => {
        console.log(error.message);
        // toast.show("Otp is not valid or expired", {
        //   type: "danger",
        // });
      });
  };

  return (
    <View style={VerifyScreenStyles.container}>
      <Text style={VerifyScreenStyles.headerText}>Verification Code</Text>
      <Text style={VerifyScreenStyles.subText}>
        We have sent the verification code to your email
      </Text>
      <View style={VerifyScreenStyles.inputContainer}>
        {code.map((_, index) => (
          <TextInput
            key={index}
            style={VerifyScreenStyles.inputBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleInput(text, index)}
            value={code[index]}
            ref={inputs.current[index]}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={{ marginTop: 8 }}>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSubmit}
        >
            <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
        <Text style={{ fontSize: 18, paddingTop: 18, fontWeight: "500" }}>
          Go back to Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyScreen;

const styles =  StyleSheet.create({
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
});
