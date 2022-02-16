import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './Navigation/MealsNavigator';

enableScreens();

export default function App() {
  return (
    <MealsNavigator />
  );
};
