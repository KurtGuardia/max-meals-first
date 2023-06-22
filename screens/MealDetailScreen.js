import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'

export default function MealScreen({ route }) {
  const title = route.params.mealId

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { color: 'white', fontSize: 20 },
})
