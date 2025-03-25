import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { auth } from "../../config/firebaseConfig";


const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully!");
      router.push("/(tabs)"); // Navigate to Tab Navigator (Home Screen)
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/signup.png")}
      className="flex-1 items-center "
      resizeMode="cover"
    >
      <View className="flex-1  p-4 ">
        <Text className="text-2xl font-bold text-center mt-10 text-[#a6a7de] ">
          Hi🙋‍♂️ I'm Julkarnain welcome to my sign-up page.
        </Text>

        <View className="flex-1 justify-center items-center p-4 ">
          <Text className="text-2xl font-bold mb-6 text-gray-400 ">
            Sign Up
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={"white"}
            value={email}
            onChangeText={setEmail}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-transparent typed-text text-white"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-transparent typed-text text-white"
          />

          <TouchableOpacity
            onPress={handleSignUp}
            className=" p-3 bg-red-500 rounded-lg w-full"
            
          >
            <Text className="text-white text-center font-bold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/sign-in")}
            className="mt-4"
          >
            <Text className="text-center">
              Already have an account?{" "}
              <Text className="font-bold "> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;
