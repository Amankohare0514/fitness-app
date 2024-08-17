import { View, Text } from 'react-native'
import React from 'react'
import Workouts from '@/components/homeitems/workouts'
import ProfileData from '@/components/homeitems/profiledata'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '@/components/homeitems/category'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ProfileData />
      <Categories />
      <Workouts />
    </SafeAreaView>
  )
}

export default HomeScreen