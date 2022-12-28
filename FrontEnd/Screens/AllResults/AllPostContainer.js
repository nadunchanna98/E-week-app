import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image , Dimensions  } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons'; 
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';
import Moment from 'moment';

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
              <Text style={styles.firstN}><FontAwesome5 name="medal" size={20} color="gold" />  {item.firstN} {item.firstT}</Text>
              <Text style={styles.secondN}><FontAwesome5 name="medal" size={20} color="#B2B2B2" />  {item.secondN} {item.secondT}</Text>
              <Text style={styles.thirdN}><FontAwesome5 name="medal" size={20} color="#CD7F32" />  {item.thirdN} {item.thirdT}</Text>
              <Text style={styles.date}>{Moment(item.date).format('LLLL')}</Text>
              <Text style={styles.date}>{item.description}</Text>
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
    padding: Dimensions.get('window').width * 0.05,
  },

  image: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height *0.7 / 3,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },


  AllPostContainer: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.9,
    backgroundColor: '#F9F9F9',
  },

  event: {
    textTransform:  'capitalize',
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10

  },

  firstN: {
    textTransform:  'capitalize',
    fontSize: 17,
    padding : 3,
    fontWeight: "700",
    marginBottom: 5
  },

  secondN: {
    textTransform:  'capitalize',
    fontSize: 17,
    padding : 3,
    fontWeight: "700",
    marginBottom: 5
  },

  thirdN: {
    textTransform:  'capitalize',
    fontSize: 17,
    padding : 3,
    fontWeight: "700",
    marginBottom: 13
  },

  date: {
    padding : 3,
    fontSize: 15,
    fontWeight: "400",
  },

  description: {
    textTransform:  'capitalize',
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 5
  },



  

})