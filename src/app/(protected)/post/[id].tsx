import { useLocalSearchParams } from "expo-router";
import { View, Text} from "react-native";

export default function PostDetailed() {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>Post ID: {id}</Text>
        </View>
    )
}