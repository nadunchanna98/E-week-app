import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity ,RefreshControl } from 'react-native'
import React, { useState, useEffect , createContext, useContext } from 'react'
import Chart from './Chart'
import Marks from './Marks'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';


const MainPage = () => {

  const [date, setDate] = useState();
  const [event, setEvent] = useState("");
  const [refresh , setRefresh] = useState(false);


  const pullMe = () => {

    setRefresh(true);
   
  

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }

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
      setDate();
    }
  }
    , []);


  return (

    <ScrollView style={styles.container}  
    
    refreshControl={
      <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
      />
    }
    >


      <View >

        <View>

          {
            event === '' ? <Text style={styles.wait}  >Loading...</Text>
              : <Text style={styles.date} >Last updated {event} {"\n"} at {Date(date).slice(3, 21)}  </Text>

          }

        </View>

        {
          event === '' ? <Text style={styles.wait}  >Loading...</Text> : <Chart />
        }

      </View>


      <View style={styles.topic} >
        <Text style={styles.latest} >Total Marks</Text>
      </View>

      <View style={styles.post} >
        {event === '' ? <Text style={styles.wait}  >Loading...</Text> : <Marks />}
      </View>

   
      

    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({

  reload: {
    position: 'absolute',
    top: 11,
    padding: 20,
    justifyContent: "space-between",
  },

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
    marginBottom: 16,
    fontFamily: 'sans-serif-light',
  },

  wait: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
    color: 'red',
    marginTop: 16,
    marginBottom: 16,
    fontFamily: 'sans-serif-light',
  },



  post: {

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



// E-week 2K22 Faculty of Engineering University of Jaffna created by Nadun Channa and Team 