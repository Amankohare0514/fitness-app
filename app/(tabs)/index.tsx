import { ScrollView } from 'react-native'
import React from 'react'
import Workouts from '@/components/homeitems/workouts'
import ProfileData from '@/components/homeitems/profiledata'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '@/components/homeitems/category'
import SubCategory from '@/components/homeitems/subCategory'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileData />
        <Categories />
        <Workouts />
        <SubCategory />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen