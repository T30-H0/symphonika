import { ScrollView, Text } from "react-native";

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text>Home Layout</Text>
    </ScrollView>
  );
};

export default Home;
