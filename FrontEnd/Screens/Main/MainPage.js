import { View, Text, StyleSheet, ScrollView ,Dimensions } from 'react-native'
import React from 'react'
import Chart from './Chart'
import Marks from './Marks'
import Data from '../Data/Data'
// import LatestUpdate from './LatestUpdate'



const MainPage = () => {
  return (

    <ScrollView  style={styles.container}   >
    
      <View >

      <Text style={styles.latest} >Total Marks</Text>
        <Chart />
        {/* <Data />   */}
        <View style={styles.topic} >
          <Text style={styles.latest} >Last Update</Text>
          {/* <LatestUpdate /> */}
        </View>
      </View>

    
      <View style={styles.post} >
        <Marks />
      </View>



    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({

  latest: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "700",
    padding: 16,
    marginTop: 16,
    fontFamily: 'sans-serif-light',
  },

  post: {
    //backgroundColorImage: backgroundImage,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#FF1E1E',
    padding: 10,
  },

  topic: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingTop: 6,
    textAlign: 'center',
  },

  container: {
    paddingTop: 6,
    textAlign: 'center',
    width: Dimensions.get('window').width*0.9,
  }
})



