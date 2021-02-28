import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Item = ({ item, loading }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.scoreBox}>
        <Text style={styles.score} numberOfLines={1}>{item.rt_score}</Text>
      </View>
      <View style={styles.sideLeft}>
        <Text style={styles.filmTitle} numberOfLines={1}>{item.title} ({item.release_date})</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
      </View>
      <TouchableOpacity
        disabled={!loading ? false : true}
        activeOpacity={.7}
        onPress={async () => {
          !loading ? await actions.setFovarite({ item }) : null
        }}
        style={styles.sideRight}>
      </TouchableOpacity>
    </View>
  )
}

export default Item