import { Dimensions } from "react-native";

export default {
    BASE_URL:'http://192.168.18.19:8000',
    BASE_URL_API: 'http://192.168.18.19:8000/api/',
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

