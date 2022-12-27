import { StyleSheet,View ,StatusBar } from 'react-native';
import InshortTabs from './Components/InshortTabs';

export default function App() {
  return (
      <View style={styles.container}  > 
        <StatusBar  backgroundColor="#000" barStyle="default" />
      <InshortTabs />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    // marginTop:StatusBar.currentHeight *0.01,
    alignItems: 'center', // aligns items horizontally in the center of the screen 
    justifyContent: 'center',  // This is the important line for vertical centering of the content in the container 
  },
});
