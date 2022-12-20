import { StyleSheet, Text, View , StatusBar } from 'react-native';
import InshortTabs from './Components/InshortTabs';

export default function App() {
  return (
    <View style={{...styles.container,backgroundColor:"#fff"}}>

        <InshortTabs />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar
    // alignItems: 'center',
    // justifyContent: 'center'
  },  
});




//npm i @expo/vector-icons   //for icons