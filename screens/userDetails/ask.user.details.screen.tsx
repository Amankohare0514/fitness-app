import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import AskAge from './_includes/ask-age';
import AskGender from './_includes/ask-gender';
import AskHeight from './_includes/ask-height';
import AskWeight from './_includes/ask-weight';
import AskActivityLevel from './_includes/ask-activity-level';
import { Ionicons } from '@expo/vector-icons';

const AskUserDetailsScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [scrollEnabled, setScrollEnabled] = React.useState(false);

  const handleNext = () => {
    setScrollEnabled(true);
    setTimeout(() => {
      swiperRef.current.scrollBy(1);
    }, 0);
  };

  const handlePrev = () => {
    setScrollEnabled(true);
    setTimeout(() => {
      swiperRef.current.scrollBy(-1);
    }, 0);
  };

  const swiperRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        scrollEnabled={scrollEnabled}
        onIndexChanged={(index) => {
          setIndex(index);
          setScrollEnabled(false);
        }}
        showsButtons={false}
      >
        <AskAge />
        <AskGender />
        <AskHeight />
        <AskWeight />
        <AskActivityLevel />
      </Swiper>
      <View style={styles.buttonWrapper}>
        {index > 0 && (
          <TouchableOpacity onPress={handlePrev}>
            <Ionicons name="caret-back-outline" style={styles.iconStyle} />
          </TouchableOpacity>
        )}
        {index < 4 && (
          <TouchableOpacity onPress={handleNext}>
            <Ionicons name="caret-forward-outline" style={styles.iconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AskUserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 36,
    color: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});
