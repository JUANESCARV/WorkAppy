import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FAD386',
  },
  form: {
    width: '100%',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6600', // Naranja principal
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: '80%', 
    height: undefined, // Esto es para que se ajuste
    aspectRatio: 1, // Mantiene las proporciones
    padding: 2,
    resizeMode: 'contain', // Asegura que la imagen se ajuste dentro del contenedor sin recortarse
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ff6600', // Naranja principal
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    color: '#ff6600', // Naranja principal
    marginTop: 10,
    fontSize: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333', // Color de texto
  },
  card: {
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default styles;
