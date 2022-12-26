import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React ,  { useState, useEffect } from 'react'
import Chart from './Chart'
import Marks from './Marks'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';

const MainPage = () => {

    const [date , setDate] = useState('waiting for data');
    const [event ,setEvent ] = useState('');

    useEffect(() => {

      axios.get(`${BASE_URL}latest/`)
          .then(res => {
             setDate(res.data[0].date);
             setEvent(res.data[0].event);
          })
          .catch(err => {
              console.log(err);                  //clean up function
          })
      return () => {
        setDate('waiting for data');
      }
  }
      , []);

  return (

    <ScrollView style={styles.container}   >

      <View >
      <Text style={styles.date} >Last updated {event} {"\n"} at {Date(date).slice(3, 21)}  </Text>
        <Text style={styles.latest} >Dash Board</Text>
        <Chart />

        <View style={styles.topic} >
          <Text style={styles.latest} >Total Marks</Text>
          
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

  date: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "700",
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
    width: Dimensions.get('window').width * 0.9,
  }
})



