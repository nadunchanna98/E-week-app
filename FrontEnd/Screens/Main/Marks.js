import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions ,RefreshControl} from 'react-native'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';

const Marks = () => {

    const [marks, setMarks] = useState([]);
    const [refresh , setRefresh] = useState(false);


    const pullMe = () => {
  
      setRefresh(true);
      setTimeout(() => {
        setRefresh(false);
      }, 2000);
    }

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


    return (

        <ScrollView style={styles.container} 
        refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => pullMe()}
            />
          }  >
            {marks.map((item, index) => {
                return (
                    <View style={styles.bag} key={index}>
                        <Text style={styles.team}> {item.team}</Text>
                        <Text style={styles.marks}>  {item.total}</Text>
                        <Text style={styles.text}> ( Total Marks ) </Text>

                    </View>
                )
            })
            }

        </ScrollView>
    )
}

export default Marks

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: Dimensions.get('window').width * 0.7,

    },

    team: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 5,
        color: 'red',
    },

    marks: {
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