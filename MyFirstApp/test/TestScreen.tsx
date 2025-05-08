import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../src/constants/RouteProps';
import {useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput} from 'react-native';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const initialValues = Array.from({length: 100}, (_, i) => (i + 1).toString());
  const [values, setValues] = useState(initialValues);

  const handleChange = (text: string, index: number) => {
    const updatedValues = [...values];
    updatedValues[index] = text;
    setValues(updatedValues);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // navigation bar varsa offset'i artır
    >
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
    padding: 16,
    paddingBottom: 300, // klavye alanı için boşluk bırak
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
