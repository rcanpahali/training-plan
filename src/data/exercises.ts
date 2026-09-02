export interface Exercise {
  key: string
  name: string
  alt?: string
  sets: string
  image: string
  default: number
  even: boolean
}

export type DayAccent = 'blue' | 'gold' | 'green'

export interface Day {
  label: string
  weekday: string
  focus: string
  accent: DayAccent
  exercises: Exercise[]
}

export const days: Day[] = [
  {
    label: 'Upper A',
    weekday: 'Monday',
    focus: 'Strength',
    accent: 'blue',
    exercises: [
      {
        key: 'chest-press',
        name: 'Chest Press Machine',
        alt: 'Bench Press',
        sets: '4 × 5',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/12/machine-chest-press-resized.png',
        default: 40,
        even: false,
      },
      {
        key: 'overhead-press',
        name: 'Standing Overhead Press',
        sets: '3 × 6',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/barbell-military-press-resized.png',
        default: 30,
        even: false,
      },
      {
        key: 'lat-pulldown',
        name: 'Lat Pulldown (Wide Grip)',
        sets: '4 × 6',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/wide-grip-lat-pull-down-resized.png',
        default: 75,
        even: false,
      },
      {
        key: 'chest-supported-row',
        name: 'Chest Supported Row',
        alt: 'Row Machine',
        sets: '3 × 8',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png',
        default: 18,
        even: false,
      },
      {
        key: 'db-lateral-raise',
        name: 'Dumbbell Lateral Raise',
        alt: 'Lateral Raise Machine',
        sets: '4 × 12–15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/12/Seated-Dumbbell-Lateral-Raise-resized.png',
        default: 10,
        even: true,
      },
      {
        key: 'hammer-curl',
        name: 'Cross-Body Hammer Curl',
        sets: '4 × 6',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/Dumbbell-cross-body-hammer-curl.png',
        default: 16,
        even: true,
      },
      {
        key: 'rope-pushdown',
        name: 'Cable Tricep Rope Pushdown',
        sets: '4 × 10',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/Triceps-Rope-Pushdown-resized.png',
        default: 40,
        even: false,
      },
      {
        key: 'incline-db-curl',
        name: 'Incline Dumbbell Curl',
        sets: '3 × 10',
        image: 'https://weighttraining.guide/wp-content/uploads/2017/01/Incline-Dumbbell-Curl-resized.png',
        default: 8,
        even: true,
      },
    ],
  },
  {
    label: 'Lower + Shoulders',
    weekday: 'Wednesday',
    focus: 'Lower body',
    accent: 'gold',
    exercises: [
      {
        key: 'leg-press',
        name: 'Leg Press',
        sets: '4 × 10–12',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/Sled-45-degree-Leg-Press-resized.png',
        default: 72,
        even: false,
      },
      {
        key: 'back-extension',
        name: 'Weighted Back Extension',
        sets: '3 × 10–12',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/45-degree-hyperextension.png',
        default: 15,
        even: false,
      },
      {
        key: 'leg-extension',
        name: 'Leg Extension',
        sets: '3 × 12',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png',
        default: 60,
        even: false,
      },
      {
        key: 'seated-leg-curl',
        name: 'Seated Leg Curl',
        sets: '3 × 12',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/seated-leg-curl-resized.png',
        default: 40,
        even: false,
      },
      {
        key: 'cable-lateral-raise-wed',
        name: 'Cable Lateral Raise',
        alt: 'Lateral Raise Machine',
        sets: '3 × 15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/11/cable-one-arm-lateral-raise-resized.png',
        default: 25,
        even: false,
      },
      {
        key: 'face-pull',
        name: 'Face Pull',
        sets: '3 × 15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/Face-pull-resized.png',
        default: 105,
        even: false,
      },
      {
        key: 'cable-crunch',
        name: 'Cable Crunch',
        sets: '3 × 15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/10/Cable-Kneeling-Crunch-resized.png',
        default: 70,
        even: false,
      },
    ],
  },
  {
    label: 'Upper B',
    weekday: 'Friday',
    focus: 'Hypertrophy',
    accent: 'green',
    exercises: [
      {
        key: 'db-incline-press',
        name: 'Dumbbell Incline Press',
        alt: 'Incline Bench Press',
        sets: '4 × 8',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/11/incline-dumbbell-bench-press-resized.png',
        default: 20,
        even: true,
      },
      {
        key: 'db-shoulder-press',
        name: 'Dumbbell Shoulder Press',
        sets: '3 × 10',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png',
        default: 18,
        even: true,
      },
      {
        key: 'cable-row-fri',
        name: 'Seated Close-Grip Cable Row',
        sets: '4 × 10–12',
        image: 'https://weighttraining.guide/wp-content/uploads/2017/02/straight-back-seated-cable-row-resized-1.png',
        default: 70,
        even: false,
      },
      {
        key: 'cable-lateral-raise-fri',
        name: 'Cable Lateral Raise',
        alt: 'Lateral Raise Machine',
        sets: '3 × 15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/11/cable-one-arm-lateral-raise-resized.png',
        default: 25,
        even: false,
      },
      {
        key: 'rear-delt-raise',
        name: 'Chest-Supported Rear Delt Raise',
        sets: '3 × 15',
        image: 'https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Rear-Lateral-Raise-resized.png',
        default: 8,
        even: true,
      },
      {
        key: 'preacher-curl',
        name: 'EZ-Bar Preacher Curl',
        alt: 'Concentration Curl',
        sets: '4 × 10',
        image: 'https://weighttraining.guide/wp-content/uploads/2018/07/barbell-preacher-curl-resized.png',
        default: 12,
        even: false,
      },
      {
        key: 'overhead-triceps',
        name: 'Overhead Cable Triceps Ext.',
        sets: '4 × 12',
        image: 'https://weighttraining.guide/wp-content/uploads/2018/04/Standing-overhead-one-arm-cable-triceps-extension-resized.png',
        default: 35,
        even: false,
      },
    ],
  },
]
