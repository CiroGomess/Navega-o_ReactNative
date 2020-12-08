import React from 'react'
// Components
import TextoCentral from '../components/TextoCentral'

export default props => {
    props.navigation.navigate("TelaB")

    return (
        <TextoCentral corFundo="#00688B">
            Tela A
        </TextoCentral>
    )
}