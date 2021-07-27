import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
const Home = () => {
  const [count, setCount] = useState(0)
  const [list,setList] = useState([
    {key:1,title:'anna'},
    {key:2,title:'jiji'},
    {key:3,title:'ko'},
    {key:4,title:'kip'},
    {key:5,title:'anpo'},
    {key:6,title:'anpo'},
    {key:7,title:'anpo'},
    {key:8,title:'anpo'},
    {key:9,title:'anpo'}
  ])
  const handleCal =  (cal) =>{
    if(cal === 'increase'){
      const timeOut = setTimeout(function wait(){
        setCount(count + 1)
      },2000)
      return timeOut
    }else if(cal === 'decrease'){
      setCount(count - 1)
    }else return
  }
    return (
    <View style={styles.container}>
    <View style={styles.div}>
    <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Count: {count}</Text>
      <Pressable
      style={({press})=>[{
        backgroundColor:press?'#fff':'blue',
      }]}
      onPress={()=>handleCal('increase')}
      >
    <Text>
    Increase
    </Text>
      </Pressable>
      <Pressable
      style={({press})=>[{
        backgroundColor:press?'#fff':'blue',marginTop:5
      }]}
      onPress={()=>handleCal('decrease')}
      >
    <Text>
    Decrease
    </Text>
      </Pressable>
    </View>

      <ScrollView 
      style={styles.scroll}
      >
      <View style={styles.item}>
        <FlatList
        // horizontal
        inverted
        data={list}
        keyExtractor={(item)=>item.key}
        renderItem={({item})=>{
          return (
            <View key={item.key} style={styles.chil}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )
        }}
        />
      </View>
      </ScrollView>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  div:{
    marginTop:100,
    alignItems:'center'
  },
  item:{
    width:250,
    height:400,
    marginTop:20,
    alignItems:'center'
  },
  chil:{
    padding:10,
    width:200,
    height:50,
    backgroundColor:'green',
    margin:15,
  },
  title:{
    textAlign:'center',
    color:'#fff'
  },
  scroll:{
    marginHorizontal:40,
    marginTop:30
  }

});


export default Home
