import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useLayoutEffect } from 'react'

export default function MealsOverview({
  route,
  navigation,
}) {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  function pressHandler(item) {
    navigation.navigate('MealDetail', {
      item,
    })
  }

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      title: item.title,
      imgURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: () => pressHandler(item),
    }

    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
