import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsDetailScreen from "./src/screens/ResultsDetailScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: ResultsDetailScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);
