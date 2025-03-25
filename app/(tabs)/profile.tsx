import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "expo-router";


export default function ProfileScreen() {
  const auth = getAuth();
  const router = useRouter(); // Use router for navigation
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      // If user is not logged in, redirect to Sign-In page
      if (!user) {
        router.replace("/sign-in"); // Ensure user is redirected to sign-in
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/sign-in"); // Redirect immediately after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
   
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/images/profile.png")}
      className="flex-1 "
      resizeMode="cover"
      blurRadius={10}
    >
      {/* Header */}
      <View className="flex-row items-center justify-center p-4">
        <Text className="text-2xl font-bold text-gray-400">Hi🙋‍♂️ i'm julkarnain </Text>

      </View>
      <View className="flex-1 justify-center items-center  p-4">
        {/* Profile Picture */}
        <Image
          source={{
            uri:
              user?.photoURL ||
              "https://media.licdn.com/dms/image/v2/D5603AQF8Cuf2bXlc1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720038788229?e=1747872000&v=beta&t=V3tpnglcttcxgbLKwDgnivsX_ZF6YcF6xHz5tY63UqM",
          }}
          className="w-24 h-24 rounded-full mb-4"
        />

        {/* User Info */}
        <Text className="text-2xl text-white font-bold">
          {user?.displayName || "User"}
        </Text>
        <Text className="text-lg text-gray-600 mb-4">{user?.email}</Text>

        {/* Logout Button */}
        <TouchableOpacity
          className="bg-red-500 p-3 rounded-lg mt-4"
          onPress={handleLogout}
        >
          <Text className="text-white text-lg font-semibold">SignOut</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

