import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {name:'A',id:'1'},
    {name:'B',id:'2'},
    {name:'C',id:'3'},
    {name:'D',id:'4'},
    {name:'E',id:'5'},
    {name:'F',id:'6'},
    {name:'G',id:'7'},
    {name:'H',id:'8'},
    {name:'I',id:'9'},
    {name:'A',id:'10'},
    {name:'A',id:'11'},
    {name:'B',id:'12'},
    {name:'C',id:'13'},
    {name:'D',id:'14'},
    {name:'E',id:'15'},
    {name:'F',id:'16'},
    {name:'G',id:'17'},
    {name:'H',id:'18'},
    {name:'I',id:'19'},
  ]);

  const press=(i)=>{
    console.log(i);
    setPeople((pre)=>{
      return pre.filter(pers=>pers.id !=i);
    })
  } 
  return (
    <View style={styles.container}>
      <FlatList 
       contentContainerStyle={styles.list}
       numColumns={2}
       data={people} 
       renderItem={({item})=>(
         <TouchableOpacity onPress={()=>press(item.id)}>
          <Text style={styles.text}>{item.name}</Text>          
         </TouchableOpacity>
      )} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe4',
    alignContent:'space-around',
    justifyContent: 'space-between',
    paddingTop:40,
    paddingHorizontal:20
  },
  list:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#f3d'
  },
  text:{
    padding:10,
    width:165,
    backgroundColor:'limegreen',
    margin:10,
    fontSize:40
  }
});
