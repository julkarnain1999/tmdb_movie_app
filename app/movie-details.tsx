import { View, Text, Image , TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { icons } from "@/constants/icons";

const MovieDetails = () => {
  const { title, poster, rating, duration, description } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-black flex-1 px-5">
      <Image
        source={{ uri: poster }}
        className="w-full h-80 rounded-lg mt-2"
        resizeMode="cover"
      />

      <Text className="text-white text-2xl font-bold mt-3">{title}</Text>

      <Text className="text-gray-400 text-lg mt-1">⭐ {rating} / 10</Text>
      <Text className="text-gray-400 text-lg mt-1">⏳ {duration}</Text>
      <Text className="text-gray-400 text-lg mt-2">{description}</Text>
      <TouchableOpacity
              className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
              onPress={router.back}
            >
              <Image
                source={icons.arrow}
                className="size-5 mr-1 mt-0.5 rotate-180"
                tintColor="#fff"
              />
              <Text className="text-white font-semibold text-base">Go Back</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MovieDetails;
