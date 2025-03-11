import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const profileImage =
    "https://media.licdn.com/dms/image/v2/D5603AQF8Cuf2bXlc1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720038788229?e=1747267200&v=beta&t=TAEvI-lgDqEC8-Y5G2uagXB0tSV_xPMapQRa_QOrcqU"; 

  return (
    <SafeAreaView className="bg-['#030014'] flex-1 px-5">
      {/* Profile Header */}
      <View className="items-center mt-14">
        <Image
          source={{ uri: profileImage }}
          className="w-24 h-24 rounded-full border-2 border-gray-500"
          resizeMode="cover"
        />
        <Text className="text-white text-2xl font-bold mt-4">Md julkarnain</Text>
        <Text className="text-gray-400 text-sm">mdjulkarnain043@gmail.com</Text>
      </View>

      {/* Membership Details */}
      <View className="mt-8 bg-[#1a1a1a] p-5 rounded-lg">
        <Text className="text-gray-400 text-sm">Membership</Text>
        <Text className="text-white text-lg font-medium">Premium Plan</Text>
      </View>

      {/* Profile Options */}
      <View className="mt-5 space-y-3">
        <TouchableOpacity className="bg-[#333] py-3 rounded-lg">
          <Text className="text-white text-center text-lg font-semibold">
            Manage Profiles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#e50914] py-3 rounded-lg">
          <Text className="text-white text-center text-lg font-semibold">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
