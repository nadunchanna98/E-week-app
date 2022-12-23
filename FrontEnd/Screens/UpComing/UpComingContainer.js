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
              <Text style={styles.date}>{item.location}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          }
          keyExtractor={item => item._id}  //
        />
      </View>
    </View>
  )
}

export default UpComingContainer


const styles = StyleSheet.create({

  AllPostContainer: {
    //backgroundImage: `url(${backgroundImage})`,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.9,
    backgroundColor: '#F9F9F9',
  },

  event: {
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
    padding: 10,
  },

  image: {
    width: 320,
    height: 180,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  }


})