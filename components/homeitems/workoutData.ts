// workoutData.ts

import { ImageProps } from 'react-native';

export interface Workout {
  imageSource: ImageProps;
  title: string;
  rating: number;
}

export const workouts: Workout[] = [
  {
    imageSource: require('@/assets/workouts/lower.png'),
    title: 'Lower Body Workout',
    rating: 4.5,
  },
  {
    imageSource: require('@/assets/workouts/upper.png'),
    title: 'Upper Body Workout',
    rating: 4,
  },
  {
    imageSource: require('@/assets/workouts/arm.png'),
    title: 'Arm Workout',
    rating: 3.5,
  },
  {
    imageSource: require('@/assets/workouts/leg.png'),
    title: 'Leg Workout',
    rating: 4.8,
  },
  {
    imageSource: require('@/assets/workouts/yoga.jpg'),
    title: 'Yoga',
    rating: 3.8,
  },
];
