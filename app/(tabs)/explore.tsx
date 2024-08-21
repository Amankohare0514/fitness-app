import React from 'react'
import { ThemedView  } from '@/components/ThemedView'
import { SafeAreaView } from 'react-native-safe-area-context'
import Banner from '@/components/explore/banner'
import Challenge from '@/components/explore/challenge'
import ExploreWorkout from '@/components/explore/workout'
import { ScrollView } from 'react-native'

const Explore = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ThemedView>
          <Banner />
          <Challenge />
          <ExploreWorkout />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore