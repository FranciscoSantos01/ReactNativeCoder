import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Im francisco</Text>
      <Text style={styles.subText}>This will be my Expense tracker app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize : '30px',
    fontWeight : 'bold',
    color: '#fff'
  },
  subText:{
    color: 'white',
    textDecorationLine: 'underline'
  }
});
