import { View, Text, StyleSheet, ScrollView, Dimensions, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';
import LastUpdate from './LastUpdate';

const MainPage = () => {

  const [refresh, setRefresh] = useState(false);
  const [marks, setMarks] = useState([]);

  useEffect(() => {

    axios.get(`${BASE_URL}teams/total`)
      .then(res => {
        setMarks(res.data);
      })
      .catch(err => {
        console.log(err);                  //clean up function
      })
    return () => {
      setMarks([]);
    }
  }
    , []);


  const getData = () => {
    axios.get(`${BASE_URL}teams/total`)
      .then(res => {
        setMarks(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    return () => {
      setMarks([]);
    }

  }

  const pullMe = () => {

    setRefresh(true);
    getData();

    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  }


  return (

    <ScrollView style={styles.container}

      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => pullMe()}
        />
      }
    >

      <LastUpdate />

      <View style={styles.topic} >
        <Text style={styles.latest} >Total Marks</Text>
      </View>

      <View style={styles.post} >

        {marks.map((item, index) => {

          return (
            <View style={styles.bag} key={index}>
              <Text style={styles.team}> {item.team}</Text>
              <Text style={styles.marks}>  {item.total}</Text>
              <Text style={styles.text}> ( Up to now ) </Text>

            </View>
          )
        })
        }

      </View>


    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({


  container: {
    paddingTop: 6,
    textAlign: 'center',
    width: Dimensions.get('window').width * 0.9,
    
  },


  latest: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "700",
    padding: 16,
    marginTop: 16,
    fontFamily: 'sans-serif-light',
  },

  post: {

    flexDirection: 'column',
    backgroundColor: 'white',
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



  team: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 5,

  },

  marks: {
    color: 'red',
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 5
  },

  text: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5
  },

  bag: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginBottom: 2,
    borderRadius: 20,
    borderRadius: 20,
    borderWidth: 4,
    backgroundColor: '#FEED30'
  }
})
