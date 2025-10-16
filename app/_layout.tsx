import { COLORS } from "@/utils/Colors";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs tintColor={COLORS.textDark} blurEffect="systemChromeMaterial">
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon
          sf={{ default: "house", selected: "house.fill" }}
          drawable="home_drawable"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saves">
        <Label>Saves</Label>
        <Icon
          sf={{ default: "heart", selected: "heart.fill" }}
          drawable="heart_drawable"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon
          sf={{ default: "gearshape", selected: "gearshape.fill" }}
          drawable="settings_drawable"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
