/**
 * КОМПОНЕНТ вывод списка фильмов студии “Ghibli” 
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash-es'
import { FlatList, ActivityIndicator, View, Text, SafeAreaView } from 'react-native'
import styles from './styles'
import Item from '../../components/item'

import { loadData } from '../../redux/actions/films'

const FilmList = () => {
    const menuData = useSelector((state) => state["films"].menuData)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData())
    }, [])

    useEffect(() => {
        if (menuData.length > 0) return setLoading(false)
    }, [menuData])

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <FlatList
                data={menuData}
                contentContainerStyle={styles.sListBox}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                renderItem={({ item }) => (
                    <Item item={item} loading={loading} />
                )}
                ListEmptyComponent={() => !loading ? <View style={styles.srBox}><Text style={styles.srt}>Список пуст.</Text></View> : null}
                keyExtractor={(item) => "item_" + item.id.toString()}
                ListFooterComponent={() => loading ? <View style={styles.srBox}><ActivityIndicator size="large" /></View> : null}
            />
        </SafeAreaView>
    )
}
export default FilmList