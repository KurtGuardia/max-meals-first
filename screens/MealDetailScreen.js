import { Image, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealsDetails from '../components/MealsDetails'

export default function MealScreen({ route }) {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find(
    (meal) => meal.id === mealId,
  )

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.text}>{selectedMeal.title}</Text>

      <MealsDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  text: { color: 'white', fontSize: 20 },
})
