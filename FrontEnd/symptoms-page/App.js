import * as React from 'react';
import { Text, View, StyleSheet, CheckBox, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
const onSave = () => false

  const [isSelected, setSelection] = React.useState(false);
  const [isSelected1, setSelection1] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);
  const [isSelected3, setSelection3] = React.useState(false);
  const [isSelected4, setSelection4] = React.useState(false);
  const [isSelected5, setSelection5] = React.useState(false);

  return (
    <View style={styles.container}>
     <Text style={styles.header}>
        Enter your symptoms(if any)
        </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Congestion and Sore throat</Text>
      </View>
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Feeling cold</Text>
      </View>
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Dry Cough</Text>
      </View>
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Fever</Text>
      </View>
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Nausea</Text>
      </View>
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected5}
          onValueChange={setSelection5}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Totally fine</Text>
      </View>
      <View style={styles.btn}>
      <Button title="Save" 
      onPress={onSave}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor:'#f5f5f5'
  },
  header: {
    fontSize: 18,
    color:'#C44536',
    fontWeight:'bold',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#283D3B',
    borderBottomWidth:1
  },
  checkboxContainer: {
    flexDirection: "column",
    marginBottom: 10
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8,
  },
  btn: {
    alignSelf:'stretch'
  }
});

export default App;
