import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity ,RefreshControl } from 'react-native'
import React, { useState, useEffect , createContext, useContext } from 'react'
import axios from 'axios';
import BASE_URL from '../../Common/BaseURL';




export default function Latest() {

    const [date, setDate] = useState();
    const [event, setEvent] = useState("");



  return (
    <View>
      <Text>Latest</Text>
    </View>
  )
}