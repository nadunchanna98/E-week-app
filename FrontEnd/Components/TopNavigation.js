import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity ,Dimensions } from 'react-native'

function TopNavigation({ index, setIndex }) {
    return (

        <View style={{ ...styles.container, backgroundColor: "#FF1E1E" }}>

            {index === 0 ? (
                <TouchableOpacity style={styles.left}>
                    <Text style={{ ...styles.text, color: "white" }}>
                        <MaterialCommunityIcons name="theme-light-dark"
                            size={20}
                            color="white" />
                    </Text>
                    
                </TouchableOpacity>) : ( index === 1 ? (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <SimpleLineIcons name="arrow-left" size={15} color="White"  />
                    <Text
                        style={{ ...styles.text, color: "white" ,textAlignVertical : "center"}}
                    >
                    <View><Text style={{ ...styles.text, color: "white" }}  >Home</Text></View>    
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.left}
                    onPress={() => setIndex(index === 2 ? 1 : 2)}
                >
                    <SimpleLineIcons name="arrow-left" size={15} color="White" />
                    <Text style={{ ...styles.text, color: "white"  }}>
                        <View><Text style={{ ...styles.text, color: "white" }}  >All </Text></View> 
                    </Text>
                </TouchableOpacity>

            )
                )
            }

            <Text style={{ ...styles.center, color: "white"  }}>
                {index === 0 ? "Home" : (index === 1 ? "All Results " : "Future")}
            </Text>

            {index === 0 ? (

                <TouchableOpacity style={styles.right}  onPress={() => setIndex(index === 0 ? 1 : 0)} >
                    <Text style={{ ...styles.text, color: "white"}}>
                        All
                        <SimpleLineIcons name="arrow-right" size={15} color="White" />
                    </Text>
                </TouchableOpacity>
            ) : ( index === 1 ? (
                <TouchableOpacity
                    style={{...styles.right}}
                    onPress={() => setIndex(index === 1 ? 2 : 1)}
                >
                    <Text
                        style={{ ...styles.text, color: "white" }}
                    >
                        <View><Text style={{ ...styles.text, color: "white" ,   }}>New</Text></View> 
                    </Text>
                    <SimpleLineIcons name="arrow-right" size={15} color="#007FFF"   />
                </TouchableOpacity>
            ) : ( 
                <TouchableOpacity style={styles.right}
                    // onPress={() => }
                    >
                    <Text style={{ ...styles.text, color: "white" }}>
                    <AntDesign name="reload1" size={15} color="#007FFF" />
                    </Text>
                    </TouchableOpacity>
             )
              
             )
            }


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: Dimensions.get('window').height * 0.045,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.09,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#fff",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
        alignItems: "center",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 40,  
        justifyContent: "center",
        flexDirection: "row",

       

    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        alignItems: "center",

    },
    right: {


        width: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        
    },
});


export default TopNavigation