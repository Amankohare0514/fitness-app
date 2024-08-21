import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Banner from '@/components/explore/banner'
import Challenge from '@/components/explore/challenge'
import ExploreWorkout from '@/components/explore/workout'
import { ScrollView } from 'react-native'
import YogaTypes from '@/components/explore/YogaTypes'

const Explore = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Banner />
        <Challenge />
        <ExploreWorkout />
        <YogaTypes />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore