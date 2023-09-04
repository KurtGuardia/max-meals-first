import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import CategoryScreen from './screens/CategoryScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetail from './screens/MealDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Categories'
        component={CategoryScreen}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={
              {
                // title: 'All Categories',
              }
            }
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
