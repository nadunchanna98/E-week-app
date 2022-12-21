import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import {   BarChart } from 'react-native-chart-kit';

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
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 24,
                                fontWeight: "700",
                                padding: 16,
                                marginTop: 16,
                                fontFamily: 'sans-serif-light',
                                
                            }}>
                            Totel Marks 
                        </Text>  

                        <BarChart 
  
                            data={this.data}
                            width={Dimensions.get('window').width - 16}
                            height={220}
                            showValuesOnTopOfBars={true}
                            chartConfig={{
                                backgroundColor: '#A20E0E',
                                backgroundGradientFrom: '#FEED30',
                                backgroundGradientTo: '#FFD868',
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
        flex: 1,
        justifyContent: 'center', 
        padding: 8,
        paddingTop: 6,
        // backgroundColor: '#ecf0f1',
        
    },
});