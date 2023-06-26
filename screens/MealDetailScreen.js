import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealsDetails from '../components/MealsDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'

export default function MealScreen({ route }) {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find(
    (meal) => meal.id === mealId,
  )

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealsDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOutuerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOutuerContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
