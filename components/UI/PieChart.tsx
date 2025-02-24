import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Globals from '@/Globals';
import { PieChart, } from 'react-native-gifted-charts';

interface PieChartCompProps {
    pieData: any;
    valorMaiorPorc: string;
    valorMaiorNome: string;
}

const PieChartComp: React.FC<PieChartCompProps> = ({ pieData, valorMaiorPorc, valorMaiorNome }) => {
    return (
        <View style={{ marginTop: 70 }}>
            <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                {
                    pieData.current.some((elem) => {
                        return elem.value > 0
                    }) ? (
                        <PieChart
                            data={pieData.current}
                            donut
                            showGradient
                            sectionAutoFocus
                            radius={90}
                            innerRadius={50}
                            innerCircleColor={Globals.COLOR.COLOR4}
                            centerLabelComponent={() => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}>
                                        {valorMaiorPorc}
                                    </Text>
                                    <Text style={{ fontSize: 11, color: 'white'}}>
                                        {valorMaiorNome}
                                    </Text>
                                </View>


                            )
                            }
                        />
                    ) :
                        (
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 75 }}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}>
                                    {valorMaiorPorc}
                                </Text>
                                <Text style={{ fontSize: 11, color: 'white'}}>
                                    {valorMaiorNome}
                                </Text>
                            </View>
                        )

                }

            </View>
            <View
                style={{
                    flexDirection: 'row',
                    zIndex: 10,
                    alignSelf: 'center',
                    marginLeft: 20,
                }}>
                <View style={{ flexDirection: 'column' }}>
                    {renderLegend('Alimentação', '#323131')}
                    {renderLegend('Vestuário', Globals.COLOR.COLOR1)}
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {renderLegend('Serviços', '#474747')}
                    {renderLegend('Entretenimento', Globals.COLOR.COLOR3)}
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {renderLegend('Eletrônicos', '#FFFFFF')}
                    {renderLegend('Outros', '#60625F')}
                </View>
            </View>
        </View>
    );
};

const renderLegend = (text: string, color: string): JSX.Element => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View
                style={{
                    height: 11,
                    width: 11,
                    marginRight: 10,
                    borderRadius: 9,
                    backgroundColor: color || 'white',
                }}
            />
            <Text
                style={{
                    color: 'white',
                    fontSize: 11,
                    marginRight: 20,
                    marginTop: -3,
                }}>
                {text || ''}
            </Text>
        </View>
    );
};

export default PieChartComp;
