import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginTop: 6 }}>
        {/* <Divider style={{marginBottom: 6}} width={1} orientation='vertical' /> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) =>(
                <View key={index} style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={{ uri: story.image }} style={ styles.story }/>
                    </TouchableOpacity>
                        <Text style={ styles.storyText }>
                        {story.user.length > 12 
                            ? story.user.slice(0, 11).toLowerCase() + '...' 
                            : story.user.toLowerCase()}
                        </Text>
                </View>
            ))}
        </ScrollView>
        {/* <Divider style={{marginTop: 6}} width={1} orientation='vertical' /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 12,
        borderWidth: 3,
        borderColor:'#ff8501',
    },

    storyText: {
        color: 'white',
        alignItems: 'center',
        marginLeft: 12,
    }
})

export default Stories