import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';
import styles from '../styles/globalStyles';
import logo from '../img/logo.png';

const Login = ({ navigation }) => { // Se hace el componente principal
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showDialog = (message) => { //Se define para mostrar dialogos de paper
    setAlertMessage(message);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const validatePassword = (password) => { // La validacion de contraseña se hace de acuerdo al taller igual que las demas validaciones
    const regex = /^(?=.*[A-Z])(?=.*[!@+#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    return regex.test(password);
  };

  const validateUser = () => {
    if (username.length > 10) {
      showDialog('El nombre de usuario no puede tener más de 10 caracteres.');
      return;
    }
    if (username.length === 0) { //Se hacen estas validaciones adicionales por si depronto se da clic con campos vacíos
      showDialog('El nombre de usuario no puede estar vacío.');
      return;
    }
    if (password.length === 0) {
      showDialog('La contraseña no puede estar vacía.');
      return;
    }
    if (!validatePassword(password)) {
      showDialog('La contraseña debe tener al menos 8 caracteres, incluyendo 1 mayúscula, 1 caracter especial, letras y números.');
      return;
    }
    
    // Si todas las validaciones estan ok, vamos al home o index
    navigation.navigate('Index');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Usuario:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUser}
          maxLength={11} // Se pone en 11 para que muestre la alerta
          placeholder="Digitar usuario"
        />
        <Text style={styles.title}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Digitar contraseña"
        />
        <Button 
          mode='contained' 
          onPress={validateUser} // Llama a validateUser para validar antes de navegar
          style={styles.button}
        >
          Quiero Iniciar
        </Button>
        <Button 
          mode='contained' 
          onPress={handleRegister} // llamo la funcion para traer la hoja de Registro
          style={styles.button}
        >
          No estoy Registrado
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}> // esta es la estructura para todos los mensajes
            <Dialog.Title>Revisa Nuevamente</Dialog.Title>
            <Dialog.Content>
              <Text>{alertMessage}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default Login;
