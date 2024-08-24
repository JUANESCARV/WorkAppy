import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet } from 'react-native';
import { Button, Text, Card, Provider, Portal, Dialog } from 'react-native-paper';
import styles from '../styles/globalStyles';
import producto1 from '../img/producto1.png'; 
import producto2 from '../img/producto2.png'; 

const PaymentBranch = () => {
  const [items, setItems] = useState([
    { id: 1, image: producto1, description: 'Botas de Seguridad', value: '$180.000', quantity: '' },
    { id: 2, image: producto2, description: 'Guantes Dieléctricos', value: '$27.500', quantity: '' },
  ]);
  const [totalValue, setTotalValue] = useState(0);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [visible, setVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => {
      const itemValue = parseFloat(item.value) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return sum + (itemValue * itemQuantity);
    }, 0);
    setTotalValue(total);
  };

  const handlePayment = () => {
    // Espacio para API SIMULACION
    setAlertMessage('Pago simulado con éxito.');
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sucursal de Pago</Text>
        {items.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={item.image} style={styles.image} />
            <Card.Content>
              <Text style={styles.description}>{item.description}</Text>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={item.value}
                onChangeText={(value) => {
                  const updatedItems = items.map(i => i.id === item.id ? { ...i, value } : i);
                  setItems(updatedItems);
                  calculateTotal();
                }}
                placeholder='Valor'
              />
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={item.quantity}
                onChangeText={(quantity) => {
                  const updatedItems = items.map(i => i.id === item.id ? { ...i, quantity } : i);
                  setItems(updatedItems);
                  calculateTotal();
                }}
                placeholder='Cantidad'
              />
            </Card.Content>
          </Card>
        ))}
        <Text style={styles.title}>Valor Total: {totalValue.toFixed(2)}</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          maxLength={30}
          placeholder='Dirección de entrega'
        />
        <TextInput
          style={styles.input}
          value={paymentMethod}
          onChangeText={setPaymentMethod}
          placeholder='Forma de pago (PSE, Tarjeta de crédito, Efecty)'
        />
        <Button mode='contained' onPress={handlePayment} style={styles.button}>
          Simular Pago
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Listo pago Simulado</Dialog.Title>
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

export default PaymentBranch;
