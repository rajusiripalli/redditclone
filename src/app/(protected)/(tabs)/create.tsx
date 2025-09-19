import { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";


export default function CreateScreen() {
  const [title, setTitle] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);





  const goBack = () => {
    setTitle("");
    setBodyText("");
    router.back();
  };


  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10 }}
    >
      {/* HEADER */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => goBack()}
        />
        <Pressable
          style={{ marginLeft: "auto" }}
        >
          <Text style={styles.postText}>
            Post
          </Text>
        </Pressable>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 15 }}
        >
          {/* COMMUNITY SELECTOR */}
          <Link href={"GroupSelector"} asChild>
            <Pressable style={styles.communityContainer}>
                  <Text style={styles.rStyles}>r/</Text>
                  <Text style={{ fontWeight: "600" }}>Select a community</Text>
            </Pressable>
          </Link>

          {/* INPUTS */}
          <TextInput
            placeholder="Title"
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 20 }}
            value={title}
            onChangeText={(text) => setTitle(text)}
            multiline
            scrollEnabled={false}
          />

          {image && (
            <View style={{ paddingBottom: 20 }}>
              <AntDesign
                name="close"
                size={25}
                color="white"
                onPress={() => setImage(null)}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  right: 10,
                  top: 10,
                  padding: 5,
                  backgroundColor: "#00000090",
                  borderRadius: 20,
                }}
              />
              <Image
                source={{ uri: image }}
                style={{ width: "100%", aspectRatio: 1 }}
              />
            </View>
          )}

          <TextInput
            placeholder="body text (optional)"
            value={bodyText}
            onChangeText={(text) => setBodyText(text)}
            multiline
            scrollEnabled={false}
          />
        </ScrollView>

        {/* FOOTER */}
        <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
          <Feather name="link" size={20} color="black" />
          <Feather name="image" size={20} color="black" />
          <Feather name="youtube" size={20} color="black" />
          <Feather name="list" size={20} color="black" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postText: {
    color: "white",
    backgroundColor: "#115BCA",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  rStyles: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold",
  },
  communityContainer: {
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    gap: 5,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
});