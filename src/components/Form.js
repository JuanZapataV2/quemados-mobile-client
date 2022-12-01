import React from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export const Form = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            {'\n'} Formulario de registro {''}
            <Text style={styles.boldTitle}> Usuario</Text>
          </Text>
          <View style={styles.text_input}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholder="Nombre"
              placeholderTextColor={'#000000'}
            />

            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="email"
              placeholderTextColor={'#000000'}
            />

            <Text style={styles.label}>Celular</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor={'#000000'}
            />

            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholderTextColor={'#000000'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0069a3',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginIop: 20,
    marginEnd: 20,
    color: '#FFF',
  },
  boldTitle: {
    fontWeight: '700',
  },
  label: {
    color: '#FFF ',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 15,
    fontweight: '600',
  },
  text_input: {
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 100,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
