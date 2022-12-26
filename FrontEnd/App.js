import { StyleSheet, SafeAreaView ,StatusBar } from 'react-native';
import InshortTabs from './Components/InshortTabs';


export default function App() {
  return (
      <SafeAreaView  style={styles.container}  > 
      <InshortTabs />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
