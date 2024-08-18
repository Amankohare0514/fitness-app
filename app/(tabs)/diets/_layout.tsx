import { Stack } from 'expo-router'

const DietTabLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerTitle: "Diet page"   , headerShown: false,}}  />
        <Stack.Screen name="[id]" options={{headerTitle: "Diet details page"}}  />
    </Stack>
  )
}

export default DietTabLayout