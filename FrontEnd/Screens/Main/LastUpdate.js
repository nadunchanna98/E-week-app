import { View, Text, StyleSheet, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';
import Moment from 'moment';


const LastUpdate = () => {

    const [date, setDate] = useState();
    const [event, setEvent] = useState("");
    

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

        <View >
            <View>

                {
                    event === '' ? <Text style={styles.wait}  >Loading...</Text>
                        : <Text style={styles.date} >Last updated {event} {"\n"} At {Moment(date).format('LLL')} </Text>
                }

            </View>

            {
                event === '' ? <Text style={styles.wait}  >Loading...</Text> : <Chart />
            }

        </View>
    )
}

export default LastUpdate


const styles = StyleSheet.create({

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
    })    