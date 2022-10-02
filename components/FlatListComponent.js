import * as React from "react";
import {Text, StyleSheet, View, FlatList} from 'react-native';
import { PREVIOUSTRIPS } from "../const";
import { testlist } from "../const";

export const FlatListComponent = (props) => { 

    const PrevTrips = ({item,msg}) => {
      return(
          <Text>
              {msg} {item}
          </Text>
      )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigGreen}>Previous Trips</Text>
      <Text style={styles.smallGreen}>Here is an overview of you previous purchases:</Text>
      <View>
      <FlatList
            style = {{height:80}}
            data = {testlist}
            renderItem={({ item }) => {
                return(
                    <View>
                        <Text style={styles.tinyGreen}>
                            {item.name}:
                        </Text>
                        <Text>Date: {item.Date}</Text>
                        <Text>Days: {item.Days}</Text>
                        <Text>Pack: {item.Pack}</Text>
                        <Text>Type: {item.Type}</Text>
                        <Text>Amount: {item.Amount}</Text>
                        <Text>Price: {item.Price}</Text>
                        
                    </View>
                )
            }}
        />
      </View>
    </View> 
  )
}

export default FlatListComponent; 

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1
    },
    inlineScroll:{
      height:800
    },
    bigGreen: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 40,
      height: 150,
      top: 75,
      left: 40,
      textShadowColor: '#171717', 
      textShadowOffset: {width: -1, height: 1}, 
      textShadowRadius: 1,
    },
    smallGreen: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        height: 100,
        top: 10,
        left: 10,
        textShadowColor: '#171717', 
        textShadowOffset: {width: -1, height: 1}, 
        textShadowRadius: 1,
      },
    EtEllerAndetTitleStyle: {
        color: "green",
        fontSize: 30,
        fontWeight:'600',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10,

  },
    tinyGreen: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        height: 95,
        top: 60,
        left: 0,
        textShadowColor: '#171717', 
        textShadowOffset: {width: -1, height: 1}, 
        textShadowRadius: 1,
  },

  });