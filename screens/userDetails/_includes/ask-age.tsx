import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from "@react-native-community/slider"
import { useUserContext } from '@/store/store'

const AskAge = () => {
  const {age, setAge} = useUserContext()
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 40 }}>How old are you?</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={age}
        onValueChange={(value) => setAge(value)}
        step={1}
      />
      <Text style={{marginLeft: 20}}>{age}</Text>
    </View>
  );
}

export default AskAge

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})