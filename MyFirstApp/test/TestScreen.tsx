import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {MyRouteProps} from '../src/constants/RouteProps';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const initialValues = Array.from({length: 20}, (_, i) => (i + 1).toString());
  const [values, setValues] = useState(initialValues);

  const handleChange = (text: string, index: number) => {
    const updatedValues = [...values];
    updatedValues[index] = text;
    setValues(updatedValues);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView contentContainerStyle={styles.container}>
        {values.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={text => handleChange(text, index)}
            keyboardType="numeric"
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default MyTestScreen;
