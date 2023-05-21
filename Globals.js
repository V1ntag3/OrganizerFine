import { Dimensions } from "react-native";

export default {
    BASE_URL_API: 'http://v1nt4g3.pythonanywhere.com/api/',
    // BASE_URL_API:'http://192.168.122.1:8080/api/',
    APP_NAME:'ORGANIZER FINE',
    APP_NAME1:'ORGANIZER',
    APP_NAME2:'FINE',
    // APP_NAME:'FINANÇAS DA LULU',
    // APP_NAME1:'FINANCAS\nDA',
    // APP_NAME2:'LULU',
    APP_NAME_STYLE:{
        height:0
    },
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    COLOR: {
        BRANCO:'#FFFFFF',
        DARK:{
           
        },
        LIGHT:{
            // COLOR1:'#640377',
            // COLOR2:'#550267',
            // COLOR3:'#450257',
            // COLOR4:'#360146',
            // COLOR5:'#260036'

            // COLOR1:'#ECE1C3',
            // COLOR2:'#8EBDB6',
            // COLOR3:'#3E838C',
            // COLOR4:'#195E63',
            // COLOR5:'#063940' 

            // COLOR1:'#ae60d3',
            // COLOR2:'#a24ccd',
            // COLOR3:'#9739c8',
            // COLOR4:'#8b26c3',
            // COLOR5:'#7400b8' 

            // COLOR1:'#b8e6b8',
            // COLOR2:'#60bf60',
            // COLOR3:'#32a632',
            // COLOR4:'#1f991f',
            // COLOR5:'#008000' 
            
            COLOR1:'#dac7ff',
            COLOR2:'#ac8bee',
            COLOR3:'#916dd5',
            COLOR4:'#7151a9',
            COLOR5:'#573d7f' 


        }
    },
    FONT_FAMILY:{
        BOLD:'Poppins-Bold',
        REGULAR:'Poppins-Regular',
        MEDIUM:'Poppins-Medium',
        SEMIBOLD:'Poppins-SemiBold'
    },
    FONT_FAMILY_NAME_APP:{
        REGULAR:'ABSTER'
    },
    MONTH:[
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ],
    COLOR_ERROR:'#FA0501',
    COLOR_GASTO: '#FF6962',
    COLOR_RECEITA:'#77DD78',
    TEXT_LOGOUT:"Não gostou de utilizar nosso App? Qualquer insatisfação pode nos contatar..."
  };