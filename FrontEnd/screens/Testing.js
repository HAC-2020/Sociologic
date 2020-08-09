import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Testing() {
  return (
    <View style={styles.container}>
      <Text>Testing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})