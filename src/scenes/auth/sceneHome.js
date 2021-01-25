import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/global/layout/DefaultPage'
import TextButton from '../../components/global/ui/Button'
import IconButton from '../../components/global/ui/IconButton'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/bg_abstract_01.jpeg'
import logo from '../../../assets/AllBitsEqual_logo_light.png'
import VersionTag from '../../components/other/VersionTag'
const SceneHome = ({ navigation, logout }) => (
    <BackgroundPage background={backgroundImage}>
        <Image
            source={logo}
            style={styles.logo}
        />
        <IconButton
            icon="⚙️"
            size={42}
            customStyles={styles.buttonSettings}
            onPress={() => navigation.navigate('Settings')}
        />
        <IconButton
            icon="❌"
            size={30}
            customStyles={styles.buttonExit}
            onPress={logout}
        />
        <TextButton
            title="Play the game"
            type="primary"
            onPress={() => navigation.navigate('GameHome')}
        />
        <View style={styles.versionTag}>
            <VersionTag />
        </View>
    </BackgroundPage>
)
const styles = StyleSheet.create({
    logo: {
        width: 230,
        height: 210,
        marginBottom: 100,
    },
    buttonSettings: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    versionTag: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
})

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    logout: (name) => dispatch(userLogout({ name })),
})

export default connect(
    null,
    mapDispatchToProps,
)(SceneHome)