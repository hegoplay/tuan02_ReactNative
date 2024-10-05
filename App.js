import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from 'react-native';

const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solution, setSolution] = useState('');

  const solveQuadratic = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    const delta = numB * numB - 4 * numA * numC;
    if (delta < 0) {
      setSolution('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const x = -numB / (2 * numA);
      setSolution(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
      setSolution(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Giải Phương Trình Bậc 2</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập a"
          keyboardType="numeric"
          value={a}
          onChangeText={setA}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập b"
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập c"
          keyboardType="numeric"
          value={c}
          onChangeText={setC}
        />
      </View>

      <Button title="Giải phương trình" onPress={solveQuadratic} />

      {solution ? <Text style={styles.solution}>{solution}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  solution: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
