import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Chart from './Chart'
import LatestUpdate from './LatestUpdate'



const MainPage = () => {
  return (
    <View >
      <Chart />
      <views  style={styles.topic} >
        <Text style={styles.latest} >Last Update</Text>
        <LatestUpdate/>
      </views>

    </View>
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

  
  topic: {
    flex: 1,
    justifyContent: 'center', 
    padding: 8,
    paddingTop: 6,
    textAlign: 'center',
  }
})



