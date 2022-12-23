import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image , Dimensions } from 'react-native'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';

const AllPostContainer = () => {

  const [post, setPost] = useState([]);

  useEffect(() => {

    axios.get(`${BASE_URL}posts`)
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
              <Text style={styles.firstN}>First Place  =  {item.firstN} {item.firstT}</Text>
              <Text style={styles.secondN}>Second Place  =  {item.secondN} {item.secondT}</Text>
              <Text style={styles.thirdN}>Third Place  =  {item.thirdN} {item.thirdT}</Text>
              <Text style={styles.date}>{

                Date(item.date).slice(0, 21)
              }
              </Text>
              <Text style={styles.date}>{item.description}</Text>

              {/* <Text style={styles.date}>{item.image}</Text> */}
            </View>
          }
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  )
}

export default AllPostContainer


const styles = StyleSheet.create({

  AllPostContainer: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.9,
    backgroundColor: '#F9F9F9',
  },

  event: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10

  },

  firstN: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5
  },

  secondN: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5
  },

  thirdN: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5
  },

  date: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5
  },

  description: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5
  },

  post: {
 
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