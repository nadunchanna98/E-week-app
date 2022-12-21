import { StyleSheet, Text, View } from 'react-native';
import InshortTabs from './Components/InshortTabs';


export default function App() {
  return (
    <View style={styles.container}>
      <InshortTabs />
    </View>
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
