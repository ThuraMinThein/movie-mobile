import { Stack } from "expo-router";
import './globals.css';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <>
    <StatusBar style="light" backgroundColor="transparent" translucent />
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  </>
}
