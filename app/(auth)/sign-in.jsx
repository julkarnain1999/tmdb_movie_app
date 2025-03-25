import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { auth } from "../../config/firebaseConfig";


const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Signed in successfully!");
      router.replace("/"); // Navigate to main app
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/signin.png")}
      className="flex-1 items-center "
      resizeMode="cover"
    >
      <View className="flex-1  p-4 ">
        <Text className="text-2xl font-bold text-center  mt-10 text-white ">
          Hi🙋‍♂️ I'm Julkarnain welcome to my sign-in page.
        </Text>
        <View className="flex-1 justify-center  items-center p-4">
          <Text className="text-2xl font-bold mb-6 text-white">Sign In</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            value={email}
            typed-text="email"
            onChangeText={setEmail}
            className="w-full p-3 border rounded-lg mb-4 typed-text "
            style={{ backgroundColor: "#23d1d9" }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full p-3 border  rounded-lg mb-4 typed-text "
            style={{ backgroundColor: "#23d1d9" }}
          />

          <TouchableOpacity
            onPress={handleSignIn}
            className="  p-3 rounded-lg w-full"
          >
            <Text
              className="text-black p-3  text-center font-bold text-lg rounded-lg border-2 "
              style={{ backgroundColor: "#4fe854" }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/sign-up")}
            className="mt-4"
          >
            <Text className="text-center  text-gray-400">
              Don't have an account?
              <Text className="font-bold">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;
