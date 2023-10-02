import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Globals from '../../Globals';
import { PieChart } from 'react-native-gifted-charts';

function PieChartComp({ pieData, valorMaiorPorc, valorMaiorNome }: any): JSX.Element {
    return (

        <View style={{marginTop: 70,}}>
            <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                <PieChart
                    data={pieData.current}
                    donut
                    showGradient
                    sectionAutoFocus
                    radius={90}
                    innerRadius={50}
                    innerCircleColor={Globals.COLOR.LIGHT.COLOR4}
                    centerLabelComponent={() => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text
                                    style={{ fontSize: 22, color: Globals.COLOR.BRANCO, fontWeight: 'bold', fontFamily: Globals.FONT_FAMILY.BOLD }}>
                                    {valorMaiorPorc}
                                </Text>
                                <Text style={{ fontSize: 11, color: Globals.COLOR.BRANCO, fontFamily: Globals.FONT_FAMILY.REGULAR }}>{valorMaiorNome}</Text>
                            </View>
                        );
                    }}
                />
            </View>
            <View
                style={{

                    flexDirection: 'row',
                    zIndex: 10,
                    alignSelf: 'center',
                    marginLeft: 20

                }}>
                <View style={{flexDirection: 'column'}}>
                    {renderLegend('Alimentação', '#323131')}
                    {renderLegend('Vestuário', Globals.COLOR.LIGHT.COLOR1)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {renderLegend('Serviços', '#474747')}
                    {renderLegend('Entretenimento', Globals.COLOR.LIGHT.COLOR3)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {renderLegend('Eletrônicos', '#FFFFFF')}
                    {renderLegend('Outros', '#60625F')}
                </View>
            </View>
        </View>
    );
}
const renderLegend = (text: any, color: any) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View
                style={{
                    height: 11,
                    width: 11,
                    marginRight: 10,
                    borderRadius: 9,
                    backgroundColor: color || Globals.COLOR.BRANCO,
                }}
            />
            <Text style={{ color: Globals.COLOR.BRANCO, fontSize: 11, marginRight: 20, fontFamily: Globals.FONT_FAMILY.REGULAR, marginTop: -3 }}>{text || ''}</Text>
        </View>
    );
};
export default PieChartComp;
