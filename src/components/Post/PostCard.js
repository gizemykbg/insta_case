import {View, Image, Text, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Post.styles';
import PostImage from './PostImage';

const PostCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: item.user.avatar}} style={styles.avatar} />
          <Text style={styles.text}>{item.user.name}</Text>
        </View>
        <Icon name="dots-horizontal" color="black" size={18} />
      </View>
      <PostImage item={item} />
      <View style={styles.inner_container}>
        <View style={styles.actions}>
          <View style={styles.left_actions}>
            <Icon name="heart-outline" color="black" size={24} />
            <Icon name="comment-processing-outline" color="black" size={24} />
            <Icon name="share-outline" color="black" size={24} />
          </View>
          <Icon name="bookmark-outline" color="black" size={24} />
        </View>
        <View>
          <Text style={styles.likes}>{item.likes} likes</Text>
          <Text>
            <Text style={styles.user_text}>{item.user.name}</Text>{' '}
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
