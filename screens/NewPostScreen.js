import {Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
        <AddNewPost />
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

export default NewPostScreen