import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Dialog, Portal, Provider, Text, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select'; // Esta es para listas desplegables
import styles from '../styles/globalStyles';
import { StyleSheet } from 'react-native';

// Se hace la lista de departamentos y ciudades
const departments = [
  { label: 'Antioquia', value: 'Antioquia' },
  { label: 'Cundinamarca', value: 'Cundinamarca' },
  { label: 'Valle del Cauca', value: 'Valle' },
  { label: 'Atlántico', value: 'Atlántico' },
  { label: 'Bolívar', value: 'Bolívar' },
];

const cities = {
  Antioquia: [
    { label: 'Medellín', value: 'Medellín' },
    { label: 'Envigado', value: 'Envigado' },
    { label: 'Bello', value: 'Bello' },
    { label: 'Itagüí', value: 'Itagüí' },
    { label: 'Rionegro', value: 'Rionegro' },
  ],
  Cundinamarca: [
    { label: 'Bogotá', value: 'Bogotá' },
    { label: 'Soacha', value: 'Soacha' },
    { label: 'Chía', value: 'Chía' },
    { label: 'Zipaquirá', value: 'Zipaquirá' },
    { label: 'Facatativá', value: 'Facatativá' },
  ],
  Valle: [
    { label: 'Cali', value: 'Cali' },
    { label: 'Buenaventura', value: 'Buenaventura' },
    { label: 'Palmira', value: 'Palmira' },
    { label: 'Tuluá', value: 'Tuluá' },
    { label: 'Buga', value: 'Buga' },
  ],
  Atlántico: [
    { label: 'Barranquilla', value: 'Barranquilla' },
    { label: 'Soledad', value: 'Soledad' },
    { label: 'Malambo', value: 'Malambo' },
    { label: 'Sabanalarga', value: 'Sabanalarga' },
    { label: 'Galapa', value: 'Galapa' },
  ],
  Bolívar: [
    { label: 'Cartagena', value: 'Cartagena' },
    { label: 'Magangué', value: 'Magangué' },
    { label: 'Turbaco', value: 'Turbaco' },
    { label: 'El Carmen de Bolívar', value: 'El Carmen de Bolívar' },
    { label: 'Arjona', value: 'Arjona' },
  ],
};

// Se definen los campos y estados

const Register = ({ navigation }) => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [visible, setVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showDialog = (message) => {
    setAlertMessage(message);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$+%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/; // Esta validacion con regex es la misma de usuario
    return regex.test(password);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 && age <= 50;
  };

  // Mensajes de alerta para las validaciones que se ahcen
  const validateUser = () => {
    if (username.length > 10) {
      showDialog('El nombre de usuario no puede tener más de 10 caracteres.');
      return;
    }
    if (!validatePassword(password)) {
      showDialog('La contraseña debe tener al menos 8 caracteres, incluyendo 1 mayúscula, 1 caracter especial, letras y números.');
      return;
    }
    if (!validateEmail(email)) {
      showDialog('El correo no es válido.');
      return;
    }
    if (!validateAge(birthdate)) {
      showDialog('No está en el rango de edad para crear la cuenta.');
      return;
    }
    navigation.navigate('Index');
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Registrar Usuario</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUser}
            maxLength={10}
            placeholder="Digitar usuario"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Digitar contraseña"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digitar correo"
          />
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={setBirthdate}
            placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          />
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            maxLength={30}
            placeholder="Digitar dirección"
          />
          <RNPickerSelect
            onValueChange={(value) => setDepartment(value)}
            items={departments}
            placeholder={{ label: 'Seleccionar departamento', value: null }}
            style={pickerSelectStyles}
          />
          {department ? (
            <RNPickerSelect
              onValueChange={(value) => setCity(value)}
              items={cities[department]}
              placeholder={{ label: 'Seleccionar ciudad', value: null }}
              style={pickerSelectStyles}
            />
          ) : null}
          <Button mode='contained' onPress={validateUser} style={styles.button}>
            Registrar
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Login')} style={styles.button}>
            Volver a Iniciar Sesión
          </Button>
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Revisa Nuevamente</Dialog.Title>
            <Dialog.Content>
              <Text>{alertMessage}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...styles.input,
  },
  inputAndroid: {
    ...styles.input,
  },
});

export default Register;
