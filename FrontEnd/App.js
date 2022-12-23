import { StyleSheet, SafeAreaView } from 'react-native';
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
