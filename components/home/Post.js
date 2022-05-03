import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const PostFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    likedImageUrl: 'https://img.icons8.com/fluency/96/000000/hearts.png'
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/speech-bubble--v1.png'
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/paper-plane.png'
  },
  {
    name: 'Save',
    imageUrl: 'https://img.icons8.com/material-outlined/96/ffffff/bookmark-ribbon--v1.png'
  }
]

const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <CommentsSection post={post} />
          <Comments post={post} />
        </View>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={ {uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{ post.user }</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.threedot}>...</Text>
    </View>
  </View>
)

const PostImage = ({post}) =>  (
  <View>
    {/* <Divider width={1} orientation='vertical' /> */}
   <Image 
    source={{uri: post.imageUrl}} 
    style={ styles.image }
    // style={{height: '100%', resizeMode: 'cover'}} 
   />
   {/* <Divider width={1} orientation='vertical' /> */}
  </View>
)

const PostFooter = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
    </View>
  </View>
)

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '700'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: 'white' }}>
      <Text style={{ fonztWeight: '700' }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
)

const CommentsSection  = ({post}) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
    <Text style={{color: 'gray'}}>
      View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
      {post.comments.length > 1 ? 'comments' : 'comment'}
    </Text>
    )}
  </View>
)

const Comments = ({post}) => (
  <>
    {post.comments.map((comment,index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '700'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
)

const styles = StyleSheet.create({
  story: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth: 1.6,
      borderColor:'#ff8501'
  },

  image: {
    height: 300,
    resizeMode: 'cover'
  },

  threedot: {
    color: 'white', 
    fontWeight: '700',
    marginRight: 5
  },

  footerIcon: {
    width: 30,
    height: 30
  },

  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  }
})

export default Post
