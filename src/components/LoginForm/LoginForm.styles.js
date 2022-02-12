import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  img_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  input: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    minHeight: 40,
    borderRadius: 5,
    justifyContent: 'center',
    tintColor: '#ffff',
    marginHorizontal: 5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
