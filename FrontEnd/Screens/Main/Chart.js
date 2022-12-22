import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BarChart } from 'react-native-chart-kit';
import BASE_URL from '../../Common/BaseURL';


// const [marks, setMarks] = useState([]);

//     useEffect(() => {
         
//         axios.get(`${BASE_URL}teams/`)
//             .then(res => {
//                 setMarks(res.data);
//                 console.log(res.data);
//             })
//             .catch(err => {
//                 console.log(err);                  //clean up function
//             })
//         return () => {
//             setMarks([]);
//         }
//     }
//     , []);


export default class Chart extends React.Component {




    data={


                          
        labels: ["E-18", "E-19", "E-20", "E-21", "Stuff"],
        datasets: [
          {
              data: [8000, 9944, 4022, 3045, 6028]
          }
      ],
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                      
                        <BarChart 
  
                            data={this.data}
                            width={Dimensions.get('window').width * 0.87}
                            height={220}
                            showValuesOnTopOfBars={true}
                            chartConfig={{
                                backgroundColor: '#A20E0E',
                                backgroundGradientFrom: '#FEED30',
                                backgroundGradientTo: '#FEED30',
                                decimalPlaces: 0,
                                color: (opacity = 2) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}

                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}


                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        paddingTop: 6,
        textAlign: 'center',
        width: Dimensions.get('window').width*0.9,
        //height: Dimensions.get('window').height*0.9,
        // backgroundColor: '#ecf0f1',

        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#FF1E1E',
    },






});