import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import { bottomTabIcons } from '../components/home/BottomTabs'
import BottomTabs from '../components/home/BottomTabs'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView 
      // contentContainerStyle={{flexGrow: 1}}
      >
      <Stories />
        {POSTS.map((post, index) => (
        <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})

export default HomeScreen