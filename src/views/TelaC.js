import React from 'react'
import { } from 'react-native'
// Components
import TextoCentral from '../components/TextoCentral'

export default props => {

    const r = props.route
    const numero = r && r.params && r.params.numero
        ? props.route.params.numero
        : 0

    return (
        <TextoCentral corFundo="#9932cd">
            TelaC - {numero}
        </TextoCentral>
    )
}