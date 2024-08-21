// workoutData.ts

import { ImageProps } from 'react-native';

export interface yoga {
  imageSource: ImageProps;
  title: string;
  description:  string,
}

export const YogaData: yoga[] = [
  {
    imageSource: require('@/assets/yoga/hatha.webp'),
    title: 'Hatha Yoga',
    description: 'Hatha Yoga is a general term for any type of yoga that teaches physical postures. It is typically slow-paced and gentle, making it a good choice for beginners. Hatha yoga focuses on basic poses and breathing exercises.'
  },
  {
    imageSource: require('@/assets/yoga/Vinyasa.webp'),
    title: 'Vinyasa Yoga',
    description: 'Vinyasa Yoga, also known as "flow" yoga, involves a dynamic sequence of poses that are synchronized with the breath. It is a more vigorous style that emphasizes continuous movement and fluid transitions between poses.'
  },
  {
    imageSource: require('@/assets/yoga/Ashtanga.webp'),
    title: 'Ashtanga Yoga',
    description: 'Ashtanga Yoga is a fast-paced and intense style of yoga that follows a specific sequence of postures. It focuses on building strength, flexibility, and stamina, and it requires a high level of discipline and commitment.'
  },
  {
    imageSource: require('@/assets/yoga/Bikram.jpg'),
    title: 'Bikram Yoga',
    description: ' Bikram Yoga, also known as "hot yoga," consists of a series of 26 challenging postures practiced in a heated room (around 105°F with 40% humidity). The heat helps to increase flexibility and detoxify the body through sweat.'
  },
  {
    imageSource: require('@/assets/yoga/Kundalini.webp'),
    title: 'Kundalini Yoga',
    description: 'Kundalini Yoga combines physical postures, breath work, chanting, and meditation to awaken the spiritual energy (Kundalini) at the base of the spine. It aims to elevate consciousness and promote spiritual growth.'
  },
  {
    imageSource: require('@/assets/yoga/Power.jpg'),
    title: 'Power Yoga',
    description: 'Power Yoga is a vigorous, fitness-based approach to Vinyasa yoga. It emphasizes strength, flexibility, and stamina, often incorporating challenging poses and a fast-paced sequence to build endurance.'
  },
  {
    imageSource: require('@/assets/yoga/Jivamukti.jpg'),
    title: 'Jivamukti Yoga',
    description: ' Jivamukti Yoga integrates physical postures, meditation, music, and spiritual teachings into a holistic practice. It emphasizes ethical living, including non-violence and environmentalism, along with a vigorous asana practice.'
  },
];
