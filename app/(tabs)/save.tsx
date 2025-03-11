import { View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

const SavedTab = () => {
  const router = useRouter();
 
  
  // For navigation

  const [savedMovies, setSavedMovies] = useState([
    {
      id: "1",
      title: "Stranger Things",
      poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      rating: 8.7,
      duration: "50 min per episode",
      description:
        "This is the title of the episode that will be published in the database and will be published in the database when the episode is published and",
    },
    {
      id: "2",
      title: "Money Heist",
      poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      rating: 8.2,
      duration: "40 min per episode",
      description:"This is the title of the episode that will be published in the database and will be published in the database when the episode is published and",
    },
    {
      id: "3",
      title: "Breaking Bad",
      poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rating: 9.5,
      duration: "58 min per episode",
      description:
        "This is the title of the episode that will be published in the database and will be published in the database when the episode is published and",
    },
    {
      id: "4",
      title: "Vikings",
      poster:
        "https://wallpapers.com/images/high/ragnar-lothbrok-4k-on-iron-throne-r9qa5phqru3z2kmx.webp",
      rating: 9.5,
      duration: "58 min per episode",
      description:
        "This is the title of the episode that will be published in the database and will be published in the database when the episode is published and",
    },
    {
      id: "5",
      title: "Avengers Endgame",
      poster:
        "https://wallpapers.com/images/high/2560x1440-marvel-avengers-endgame-heroes-fubwbtxf9nl1aar6.webp",
      rating: 9.5,
      duration: "58 min per episode",
      description:
        "This is the title of the episode that will be published in the database and will be published in the database when the episode is published and",
    },
  ]);

  return (
    <SafeAreaView className="bg-['#030014'] flex-1 px-5">
      {/* Header */}
      <Text className="text-white text-2xl font-bold mt-5">My List</Text>

      {/* Saved Movies Grid */}
      <FlatList
        data={savedMovies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="mt-5 w-[48%]"
            onPress={() =>
              router.push({
                pathname: "/movie-details",
                params: item, // Passing movie details
              })
            }
          >
            
            <Image
              source={{ uri: item.poster }}
              className="w-full h-32 rounded-md"
              resizeMode="cover"
            />
            <Text
              className="text-white text-sm font-semibold mt-1"
              numberOfLines={1}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SavedTab;
