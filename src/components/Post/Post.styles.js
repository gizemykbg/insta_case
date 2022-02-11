import {StyleSheet, Dimensions} from 'react-native';

const witdh = Dimensions.get('window').width;
const ratio = 1080 / witdh;
const height = 607 / ratio;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inner_container: {
    paddingHorizontal: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignTems: 'center',
    height: 40,
  },
  left_actions: {
    flexDirection: 'row',
    marginRight: 12,
  },
  likes: {
    fontWeight: 'bold',
  },
  user_text: {
    fontWeight: 'bold',
  },
  flatlist: {
    width: witdh,
    height: height,
  },
});
