import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigotor = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: {
    headerTintColor: Colors.primaryColor,
    headerBackTitle: 'Back'
  }
});

export default createAppContainer(MealsNavigotor);