import { Stack } from 'expo-router';

export default function FreeMedicineLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          title: ""
        }} 
      />
    </Stack>
  );
}
