import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Button, Provider, Text } from 'react-native-paper';
import styles from '../styles/globalStyles';
import logo from '../img/logo.png';

const Index = ({ navigation }) => { // Acá pongo todo el menú de la aplicación 
  return (
    <Provider>  
      <ScrollView contentContainerStyle={styles.container}>
        <View>
        <Image source={logo} style={styles.logo} /> 

          
          <Text style={styles.title}>Bienvenidos a nuestra empresa</Text>
          <Text style={styles.description}>
            Somos una empresa dedicada a la venta de equipos de protección personal y de seguridad física, 
            garantizando la mejor calidad y protección para nuestros clientes.
          </Text>

         
          <Button mode='contained' onPress={() => navigation.navigate('PaymentBranch')} style={styles.button}>
            Sucursal de Pago
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Carrito')} style={styles.button}>
            Carrito de Compras
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Articulos')} style={styles.button}>
            Lista de Artículos y Búsqueda
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('DetalleArticulo')} style={styles.button}>
            Detalle de Artículos
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Categorias')} style={styles.button}>
            Categorías de Artículos
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('MisCompras')} style={styles.button}>
            Mis Compras
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Favoritos')} style={styles.button}>
            Mis Favoritos
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Ofertas')} style={styles.button}>
            Ofertas
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Perfil')} style={styles.button}>
            Perfil de Usuario
          </Button>
          <Button mode='contained' onPress={() => navigation.navigate('Ayuda')} style={styles.button}>
            Ayuda y Soporte (PQR)
          </Button>
        </View>
      </ScrollView>
    </Provider>
  );
};

export default Index;
