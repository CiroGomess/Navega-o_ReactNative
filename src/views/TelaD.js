import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { View, Button } from 'react-native'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000)
                    }}
                />

            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#ff1170' corTexto='#fff'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}