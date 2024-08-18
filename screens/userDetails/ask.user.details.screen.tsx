import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import AskAge from './_includes/ask-age'
import AskGender from './_includes/ask-gender'
import AskHeight from './_includes/ask-height'
import AskWeight from './_includes/ask-weight'
import AskActivityLevel from './_includes/ask-activity-level'

const AskUserDetailsScreen = () => {
  const [index, setIndex] = React.useState(0)
  console.log(index)
  
  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        prevButton={<Text> Prev </Text>}
        nextButton={<Text>Next </Text>}
        disableScrollViewPanResponder={true}
        onIndexChanged={(index) => setIndex(index)}
        showsButtons={true}
        paginationStyle={{ bottom: 70 }}
        
      >
        <AskAge />
        <AskGender />
        <AskHeight />
        <AskWeight />
        <AskActivityLevel />
      </Swiper>
    </View>
  )
}

export default AskUserDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});