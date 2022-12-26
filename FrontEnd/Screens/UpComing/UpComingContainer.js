import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';

const UpComingContainer = () => {

  const [post, setPost] = useState([]);

  useEffect(() => {

    axios.get(`${BASE_URL}futureevents`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);                  //clean up function
      })
    return () => {
      setPost([]);
    }

  }, []);

  return (
    <View style={styles.AllPostContainer}>

      <View >
        <FlatList
          data={post}
          renderItem={({ item }) =>

            <View style={styles.post}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.event}>{item.event} {item.gender}  {item.type}</Text>
              <Text style={styles.date}>{
                Date(item.date).slice(0, 21)
              }</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.date}>{item.location}</Text>
            </View>
          }
          keyExtractor={item => item._id}  
        />
      </View>
    </View>
  )
}

export default UpComingContainer


const styles = StyleSheet.create({

  AllPostContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.9,
    backgroundColor: '#F9F9F9',
  },

  event: {
    textTransform:  'capitalize',
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10

  },


  date: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5
  },

  description: {
    textTransform:  'capitalize',
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5
  },

  post: {
    //backgroundColorImage: backgroundImage,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#FF1E1E',
    padding: Dimensions.get('window').width * 0.05,
  },

  image: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height *0.7 / 3,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  }


})