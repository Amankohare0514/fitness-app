import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import useUser from '@/hooks/auth/useUser';
import { Image } from 'react-native';
export default function TabLayout() {
  const {user} = useUser()
  const colorScheme = useColorScheme();

  return (
   <Tabs screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let isUri = false;
           if (route.name === "profile") {
            if (user?.avatar?.url) {
              iconName = { uri: user.avatar.url };
              isUri = true;
            } else {
              iconName = require("@/assets/images/profile.png");
            }
          }
          return (
            <Image
              source={iconName}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: isUri ? undefined : color, 
                borderRadius: isUri ? 50 : 1
              }}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'barbell' : 'barbell-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="diet"
        options={{
          title: 'Diet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flash' : 'flash-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
