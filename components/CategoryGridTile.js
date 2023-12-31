import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function CategoryGridTile({
  title,
  color,
  onPress,
}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 10,
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
})
