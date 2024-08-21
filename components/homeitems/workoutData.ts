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
    title: 'Lower Body Workout for Strength and Endurance',
    rating: 4.5,
  },
  {
    imageSource: require('@/assets/workouts/upper.png'),
    title: 'Upper Body Training: Build Muscle and Definition',
    rating: 4,
  },
  {
    imageSource: require('@/assets/workouts/arm.png'),
    title: 'Quick Arm Toning Routine: Sculpt Your Arms Fast',
    rating: 3.5,
  },
  {
    imageSource: require('@/assets/workouts/leg.png'),
    title: 'Powerful Leg Workout for Explosive Strength',
    rating: 4.8,
  },
  {
    imageSource: require('@/assets/workouts/yoga.jpg'),
    title: 'Revitalizing Yoga: Relax and Renew Your Body',
    rating: 3.8,
  },
];
