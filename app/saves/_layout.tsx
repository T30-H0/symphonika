import { COLORS } from "@/utils/Colors";
import { Stack } from "expo-router";
import React from "react";

const SavesLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Saves",
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: true,
        }}
      />
    </Stack>
  );
};

export default SavesLayout;
