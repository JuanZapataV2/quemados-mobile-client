
import React, {useState} from 'react';
import type {Node} from 'react';
import {Form} from './src/components/Form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const nuevoUsuario: () => Node = () => {
  console.log("Nueva cita para el usuario");
}

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  const newUser = () =>{
    console.log('Diste clic en crear nuevo usuario');
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
      App de Quemados {''}
        <Text style={styles.sectionTitleBold}>UAM</Text>
      </Text>
      <Pressable onPress={() => setModalVisible(true)} style={styles.btnNuevoUsuario}>
        
        <Text style={styles.btnTxtNuevoUsuario}>Nueva cita</Text>
      </Pressable>
      <Form modalVisible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize:30,
    color: '#374151',
  },
  sectionTitleBold: {
    color: '#6D28D9',
    fontWeight: '900',
    textAlign: 'center',
  },
  btnNuevoUsuario:{
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTxtNuevoUsuario:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
