import {
    ScrollView,
    Image,
} from 'react-native';
import { View, Button } from 'tamagui'
import { useCallback, useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable'
import MenuSide from '@/components/Menus/MenuSide';
import ImagePicker from 'react-native-image-crop-picker';
import Validations from '@/utils/Validations';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Database, DatabaseBackup, FilePenLine, MousePointerClick, Replace, Save, Trash, User } from '@tamagui/lucide-icons';
import { useUser } from '@/context/UserProvider';
import InputAnimated from '@/components/Inputs/InputAnimated';
import ModalGeneric from '@/components/UI/ModalGeneric';
import ConfigurationSVG from '@/assets/svgs/configurationSVG';
import { replaceDatabase, resetDatabase, shareDatabase } from '@/server/database/services/ConfigDatabaseService';
import DocumentPicker from "react-native-document-picker";
import Title from '@/components/UI/Title';

export default function Profile(): JSX.Element {
    const [fileUri, setFileUri] = useState("");
    const [photoProfile, setPhotoProfile] = useState<any>(null);
    const { user, setUser } = useUser();
    const [isEditable, setIsEditable] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [imageProfile, _] = useState<string>(user?.image ?? "");
    const [name, setName] = useState<string>(user?.name ?? "");
    const [surname, setSurname] = useState<string>(user?.surname ?? "");
    const [email, setEmail] = useState<string>(user?.email ?? "");
    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false
    })

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
            setUser({
                image: image,
                name: name,
                surname: surname,
                email: email
            })
        }
    }

    const handleChoosePhoto = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            compressImageQuality: 0.7,
            width: 300,
            height: 300,
            cropping: true
        }).then((image: any) => {
            if (image) {
                setPhotoProfile(image);
            }
        });
    };

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.pickSingle({ type: DocumentPicker.types.allFiles });
            setFileUri(result.uri);
        } catch (error) {
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                <MenuSide>
                    <ModalGeneric
                        image={(style: any) => {
                            return <ConfigurationSVG style={style} tvParallaxProperties={undefined} />
                        }}
                        affirmFunc={putData}
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        title="Alterar configurações"
                        paragraph={"Tem certeza que deseja alterar as configurações?"}
                        textAffirmButton="Sim"
                        textNegButton="Não agora"
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10 }} >
                        <View style={{ gap: 10, flex: 1, flexDirection: 'column', justifyContent: "center" }}>

                            <View justify={"space-between"} flexDirection='row' mt={10} width={"100%"} >
                                <Title text='Configurações' style={{ marginTop: -10 }} />

                                {isEditable ?
                                    <Save onPress={() => setModalVisible(true)} />
                                    :
                                    <FilePenLine onPress={() => setIsEditable(true)} />
                                }
                            </View>
                            <Animatable.View animation='flipInY' duration={1000} style={{
                                width: 150,
                                height: 150,
                                position: 'relative',
                                margin: "auto"
                            }}>
                                <View
                                    width={150}
                                    height={150}
                                    borderColor={'$purple8'}
                                    borderTopLeftRadius={100}
                                    borderBottomRightRadius={100}
                                    borderEndStartRadius={100}
                                    borderStartEndRadius={100}
                                    borderWidth={3}
                                >

                                    {
                                        photoProfile !== null && photoProfile !== undefined ? <Image
                                            source={{ uri: photoProfile.path }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 75
                                            }}
                                        /> : (imageProfile == null || imageProfile === '' ?
                                            <User size={110} m={'auto'} color={'$purple8'} /> :
                                            <Image
                                                source={{ uri: imageProfile }}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: 75
                                                }}
                                            />)

                                    }
                                </View>
                                {isEditable &&
                                    <View onPress={handleChoosePhoto} position='absolute' p={8} b={0} r={5}
                                        borderTopLeftRadius={100}
                                        borderBottomRightRadius={100}
                                        borderEndStartRadius={100}
                                        borderStartEndRadius={100} borderWidth={1} borderColor={"$purple8"} bg={"$purple6"}>
                                        <FilePenLine size={20} />
                                    </View>}
                            </Animatable.View>
                            <InputAnimated placeholder="Name" value={name} delay={100} isEditable={isEditable} duration={300} setValue={setName} error={errors.name} />
                            <InputAnimated placeholder="Sobrenome" value={surname} delay={300} isEditable={isEditable} duration={300} setValue={setSurname} error={errors.surname} />
                            <InputAnimated placeholder="Email" value={email} delay={500} isEditable={isEditable} duration={300} setValue={setEmail} error={errors.email} />

                            <Title text='Database' />

                            <Button onPress={shareDatabase}>
                                <Button.Icon><DatabaseBackup /></Button.Icon>
                                <Button.Text fontWeight={'bold'}>Salvar Database</Button.Text>
                            </Button>

                            <InputAnimated placeholder="Selecione um arquivo..." value={fileUri} delay={0} isEditable={false} duration={0} animation={false} />

                            <Button onPress={pickFile}>
                                <Button.Icon><MousePointerClick /></Button.Icon>
                                <Button.Text fontWeight={'bold'}>Selecionar Database</Button.Text>
                            </Button>

                            <Button onPress={() => replaceDatabase(fileUri)}>
                                <Button.Icon><Replace /></Button.Icon>
                                <Button.Text fontWeight={'bold'}>Trocar Database</Button.Text>
                            </Button>

                            <Button color="red" onPress={resetDatabase}>
                                <Button.Icon><Trash /></Button.Icon>
                                <Button.Text fontWeight={'bold'}>Deletar Dados</Button.Text>
                            </Button>

                        </View>

                    </ScrollView>
                </MenuSide>
            </SafeAreaView>
        </View>
    );
}

