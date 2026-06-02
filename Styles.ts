import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#FFCC80',
    borderRadius: 25,
  },
  backText: {
    color: '#1E1E2C',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  timerCircle: {
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  timerText: {
    color: '#B3B3FF',
    fontSize: 32,
  },
  controlButton: {
    backgroundColor: '#4A4A73',
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
  },
  controlButtonText: {
    color: '#B3B3FF',
    fontSize: 18,
  },
  title: {
    color: '#B3B3FF',
    fontSize: 24,
    marginBottom: 20,
  },
});

