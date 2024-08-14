import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import Globals from '../../Globals';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../LoadingScreen';
import UserSVG from '../../components/SVGComponentes/userSVG';
import EditarSVG from '../../components/SVGComponentes/editarSVG';
import SaveSVG from '../../components/SVGComponentes/saveSVG';
import ConfigurationSVG from '../../components/SVGComponentes/configurationSVG';
import * as Animatable from 'react-native-animatable'
import Menu from '../../components/Menu';
import Modal from '../../components/ModalGeneric';
import styles from './ProfileEditStyles';
import PencilSVG from '../../components/SVGComponentes/pencilImageSVG'
import ImagePicker from 'react-native-image-crop-picker';
import Validations from '../../Validations';

function ProfileEdit({ route, navigation }: any): JSX.Element {

    const [photoProfile, setPhotoProfile] = useState<any>(null);

    const handleChoosePhoto = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            compressImageQuality: 0.7,
            width: 300,
            height: 300,
            cropping: true
        }).then((image: any) => {
            console.log(image)
            if (image) {
                setPhotoProfile(image);
            }
        });
    };

    const [isEditable, setIsEditable] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [imageProfile, setImageProfile] = useState<string | null>('');
    const [name, setName] = useState<string | null>('');
    const [surname, setSurname] = useState<string | null>('');
    const [email, setEmail] = useState<string | null>('');

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false
    })

    const getUserDetails = async () => {
        try {
            const keys = ['@image_user', '@name_user', '@surname_user', '@email_user'];

            const result = await AsyncStorage.multiGet(keys);

            const userDetails = result.reduce((acc, [key, value]) => {
                if (value !== null) {
                    switch (key) {
                        case '@image_user':
                            acc.image = value;
                            break;
                        case '@name_user':
                            acc.name = value;
                            break;
                        case '@surname_user':
                            acc.surname = value;
                            break;
                        case '@email_user':
                            acc.email = value;
                            break;
                        default:
                            break;
                    }
                }
                return acc;
            }, {} as Record<string, string | null>);

            setEmail(userDetails.email)
            setImageProfile(userDetails.image)
            setName(userDetails.name)
            setSurname(userDetails.surname)

            return userDetails;
        } catch (error) {
            console.error('Failed to fetch user details', error);
            throw error;
        }
    };

    const putData = async () => {
        setModalVisible(false)

        var obj_errors = {
            name: Validations.onlyBlankSpaces(name),
            surname: Validations.onlyBlankSpaces(surname),
            email: !Validations.isEmail(email),
        }
        setErrors(obj_errors)

        if (!Validations.hasTruthyValue(obj_errors)) {
            var image = photoProfile !== null ? photoProfile.path : imageProfile ?? ''
            const keyValuePairs = [
                ['@image_user', image],
                ['@name_user', name ?? ''],
                ['@surname_user', surname ?? ''],
                ['@email_user', email ?? ''],
            ].filter(([_, value]) => value !== '') as [string, string][];

            await AsyncStorage.multiSet(keyValuePairs).then(() => {
                navigation.navigate('Home')
            });
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    const [modalVisible, setModalVisible] = useState(false)

    const screen =
        <>
            <Modal
                image={(style: any) => {
                    return <ConfigurationSVG style={style} />
                }}
                affirmFunc={putData}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title="Alterar configurações"
                paragraph={"Tem certeza que deseja alterar as configurações?"}
                textAffirmButton="Sim"
                textNegButton="Não agora"
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: Globals.HEIGHT }}>
                <View style={{ height: Globals.HEIGHT - 25 }}>
                    {isEditable ? (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(false)}>
                        <EditarSVG />
                    </TouchableOpacity>) : (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setModalVisible(true)}>
                        <SaveSVG />
                    </TouchableOpacity>)}
                    <Text style={styles.tituloView}>Configurações</Text>
                    <Animatable.View animation='flipInY' duration={1000} style={{
                        width: 150,
                        height: 150,
                        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
                        borderColor: Globals.COLOR.LIGHT.COLOR5,
                        borderRadius: Globals.WIDTH * 0.20,
                        borderWidth: 4,
                        alignSelf: 'center',
                        marginTop: 20,
                    }}>
                        <View style={{
                            alignSelf: 'center', position: 'relative', width: '100%',
                            height: '100%'

                        }}>
                            {
                                photoProfile !== null && photoProfile !== undefined ? <Image
                                    source={{ uri: photoProfile.path }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 75
                                    }}
                                /> : (imageProfile == null ? <UserSVG style={{ marginTop: 10, marginLeft: 13 }} /> : <Image
                                    source={{ uri: imageProfile }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 75
                                    }}
                                />)

                            }
                            {!isEditable && <TouchableOpacity onPress={handleChoosePhoto} style={{ position: 'absolute', bottom: 0, padding: 8, borderRadius: 20, right: 5, zIndex: 1000000, backgroundColor: Globals.COLOR.LIGHT.COLOR5, borderWidth: 1, borderColor: 'white' }}><PencilSVG width={20} height={20} fill={'white'} /></TouchableOpacity>}
                        </View>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={100}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }, { marginTop: Globals.HEIGHT * 0.05 }]}
                            value={name}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={errors.name ? Globals.COLOR_ERROR : (isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5)}
                            onChangeText={text => { setName(text); }}
                            placeholder="Nome" />
                        <Text style={[styles.errorStyle, { display: errors.name ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={300}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                            value={surname}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={errors.surname ? Globals.COLOR_ERROR : isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5}
                            onChangeText={text => { setSurname(text); }}
                            placeholder="Sobrenome" />
                        <Text style={[styles.errorStyle, { display: errors.surname ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={500}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                            value={email}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={errors.email ? Globals.COLOR_ERROR : (isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5)}
                            onChangeText={text => { setEmail(text); }}
                            placeholder="Email" />
                        <Text style={[styles.errorStyle, { display: errors.email ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                </View>
            </ScrollView></>

    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? <LoadingScreen /> : (<></>)
            }
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </SafeAreaView>
    );
}

export default ProfileEdit;


