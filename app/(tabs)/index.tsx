import { View, Text } from 'react-native'
import React from 'react'
import Workouts from '@/components/homeitems/workouts'
import ProfileData from '@/components/homeitems/profiledata'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ProfileData />
      <Workouts />
    </SafeAreaView>
  )
}

export default HomeScreen