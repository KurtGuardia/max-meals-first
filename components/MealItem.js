import { useNavigation } from '@react-navigation/native'
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import MealsDetails from './MealsDetails'

export default function MealItem({
  id,
  title,
  imgURL,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation()

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>
          pressed && styles.buttonPressed
        }
        onPress={selectMealItemHandler}
      >
        <View>
          <View style={styles.innerContainer}>
            <Image
              source={{
                uri: imgURL,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow:
      Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
