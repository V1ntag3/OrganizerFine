import React from 'react';
import DatePicker from 'react-native-modern-datepicker';

interface DatePickerGenericProps {
    type: number; // Pode ser um enum ou union type, por exemplo: 0 | 1
    realDate: string;
}

const DatePickerGeneric: React.FC<DatePickerGenericProps> = ({ type, realDate }) => {

    return (
        <DatePicker
            mode="calendar"
            isGregorian={true}
            selectorStartingYear={new Date().getFullYear()}
            minimumDate={String(realDate).slice(0, 10)}
            maximumDate={String(realDate).slice(0, 10)}
            current={String(realDate).slice(0, 10)}
            selected={String(realDate).slice(0, 10)}
            selectorEndingYear={new Date().getFullYear()}
            style={{
                marginTop: 10,
                width: '90%',
                borderRadius: 25,
                alignSelf: 'center'
            }}
            options={{
                backgroundColor: type == 0 ? '#2FAD09' : '#AD1909',
                textSecondaryColor: 'white',
                textHeaderColor: 'white',
                textDefaultColor: 'white',
                selectedTextColor: 'white',
                mainColor: type == 0 ? '#73E650' : '#E65A50',
                textFontSize: 15,
            }} />
    );
};

export default DatePickerGeneric;