import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { dataUrl } from './src/config';
import { formatData } from './src/functions';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(dataUrl)
        const { data } = res
        const _data = formatData({data})
        setData(_data)
      } catch(e) {
        console.log('fetch data error', e)
      }
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      {data.map((item) => {
        const { id, username, age } = item
        return (
          <View style={styles.row} key={id}>
            <Text>ID: {id}</Text>
            <View style={{paddingHorizontal: 5}}/>
            <Text>Name: {username}</Text>
            <View style={{paddingHorizontal: 5}}/>
            <Text>Age: {age}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'
  }
});
