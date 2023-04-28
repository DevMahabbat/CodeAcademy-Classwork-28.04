import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ id, iconUri, appTitle, appSize, lastUseDate, isOpen, setNewData, allData }) => {
    const convertOpen = () => {
        const findedApp = allData.find(item => item.id == id)
        console.log(findedApp);
        if (!findedApp) {
            return null
        }
        let newarr = allData.filter(item => item.id != id)
        findedApp.isOpen =  !(findedApp.isOpen)
        
        setNewData([...newarr,findedApp])
        console.log(allData)
    }
    

    return (
        <View style={styles.container}>


            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                    <Image style={styles.appIcon} source={{ uri: iconUri }} />
                </View>
                <View style={styles.appContainer}>
                    <Text style={styles.appTitle}>{appTitle}</Text>
                    <View style={styles.appDesciptionContainer}>
                        <Text style={styles.appDesciption}>{appSize} MB</Text>
                        <Text style={styles.appDesciption}> - {lastUseDate}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    {
                        isOpen ?
                            <TouchableOpacity onPress={convertOpen} style={styles.button}>
                                <Text style={styles.buttonText} >OPEN</Text>
                            </TouchableOpacity> : <TouchableOpacity style={styles.button} onPress={convertOpen}>
                                <Text style={styles.buttonText}>UPDATE</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    appContainer: {
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    appDesciptionContainer: {
        flexDirection: 'row',
    },
    appIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appTitle: {

    },
    appDesciption: {

    },
    button: {
        width: 50,
        height: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {

        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 5
    }
});

export default Card;
