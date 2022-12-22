import { View, Text } from 'react-native'
import React , { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../../Common/BaseURL';
import { BarChart } from 'react-native-chart-kit';

const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}teams/total`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);                  //clean up function
            })
        return () => {
            setData([]);
        }
    }
    , []);
        


  return (
    <View>
      {data.map((item, index) => {
        return (
          <View key={index}>
    
            <Text>{item.team}</Text>
            <Text>{item.total}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default Data 