import React from 'react';

import Globals from '../Globals';
import DatePicker from 'react-native-modern-datepicker';

function DatePickerGen({type, realDate} :any): JSX.Element {
   
    return (
     <>
            {console.log(String(realDate).slice(0,10))}
          <DatePicker
                mode="calendar"
                isGregorian={true}
                selectorStartingYear={new Date().getFullYear()}
                minimumDate={String(realDate).slice(0,10)}
                maximumDate={String(realDate).slice(0,10)}
                current={String(realDate).slice(0,10)}
                selected={String(realDate).slice(0,10)}
                selectorEndingYear={new Date().getFullYear()}
                style={{
                    marginTop:10,
                    width: '90%',
                    borderRadius: 25,
                    alignSelf: 'center'
                }}
                options={{
                    backgroundColor: type == 0 ? '#2FAD09': '#AD1909' ,
                    textSecondaryColor:Globals.COLOR.BRANCO,
                    textHeaderColor: Globals.COLOR.BRANCO,
                    textDefaultColor: Globals.COLOR.BRANCO,
                    selectedTextColor: Globals.COLOR.BRANCO,
                    mainColor:type == 0 ? '#73E650': '#E65A50',
                    defaultFont: Globals.FONT_FAMILY.REGULAR,
                    textFontSize: 15,
                }} />
     </>
    );
};

export default DatePickerGen;
