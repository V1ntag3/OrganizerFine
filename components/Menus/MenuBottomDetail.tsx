import { ArrowLeft, FilePenLine, HandCoins, Trash } from "@tamagui/lucide-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View } from "tamagui";
import ModalGeneric from "../UI/ModalGeneric";
import { useState } from "react";
import { deleteLoan } from "@/server/database/services/LoansService";
import { router } from "expo-router";
import Globals from "@/Globals";
import DeleteTrash from "@/assets/svgs/deleteTrashSVG"
export default function MenuBottomDetail({ item }) {
    const [modalRemove, setModalRemove] = useState(false)

    const removeLoan = async () => {
        deleteLoan(item.id).then(() => {
            router.replace("/loan/listLoan")
        })
    }


    return (
        <>
            <View style={styles.menuBottom}>
                <TouchableOpacity onPress={() => {
                    router.navigate("/loan/listLoan");
                }} style={styles.menuBottomButton}>
                    <ArrowLeft size={25} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {/* <TouchableOpacity style={styles.menuBottomButton}>
<PDFSVG width={40} height={34} />
</TouchableOpacity> */}

                    <TouchableOpacity onPress={() => {
                        router.navigate({ pathname: "/loan/updateLoan", params: item });
                    }} style={styles.menuBottomButton}>
                        <FilePenLine size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        router.navigate({ pathname: "/loan/addTransaction", params: item });
                    }} style={[styles.menuBottomButton]}>
                        <HandCoins size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setModalRemove(true);
                    }} style={[styles.menuBottomButton, { backgroundColor: Globals.COLOR_GASTO }]}>
                        <Trash size={25} />
                    </TouchableOpacity>

                </View>

            </View>
            <ModalGeneric image={(style: any) => {
                return <DeleteTrash style={style} tvParallaxProperties={undefined} />;
            }} affirmFunc={removeLoan}
                modalVisible={modalRemove}
                setModalVisible={setModalRemove}
                title={"Remover Empréstimo"}
                paragraph={"Tem certeza que deseja remover o empréstimo?"}
                textAffirmButton="Sim"
                textNegButton="Não agora" />
        </>
    )
}

const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'column',
        marginTop: 20
    },
    menuBottom: {
        width: '100%',
        backgroundColor: Globals.COLOR.COLOR1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        bottom: 0,
        paddingVertical:10,
        paddingBottom:20
        
    },
    menuBottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 55,
        width: 55,
        maxWidth: 55,
        maxHeight: 55,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.COLOR2
    }
});