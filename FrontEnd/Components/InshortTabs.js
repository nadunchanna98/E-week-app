import * as React from 'react';
import {  StyleSheet, useWindowDimensions , SafeAreaView ,StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AllResults from "../Screens/AllResults/AllResults";
import MainPage from "../Screens/Main/MainPage";
import Upcoming from "../Screens/UpComing/Upcoming";
import TopNavigation from './TopNavigation';


const renderScene = SceneMap({
  first: MainPage,
  second: AllResults,
  third: Upcoming
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);

  return (


  <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar ={ ()=><TopNavigation index = {index} setIndex = {setIndex} />}
    />

  );
}

