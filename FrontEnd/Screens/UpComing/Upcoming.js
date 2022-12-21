import React from 'react'
import UpComingContainer from './UpComingContainer'
import { Text, View , ScrollView  } from 'react-native'

function Upcoming() {
  return (
    <ScrollView>
    <View>
    <UpComingContainer />
    </View>
    </ScrollView>
  )
}

export default Upcoming