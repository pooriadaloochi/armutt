import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    allProduct: {
        width: '100%',
        height:'22rem',
        // margin: '1.rem',
        border: '2px solid #BDC3C7',
        borderRadius: '10px',
        background: '#fdfdfd',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    imgModel:{
        width:'80%',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',

    },

    img: {
        width: '200px',
        height: '180px',
        borderRadius: '8px',
    },
    details: {
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'baseline'
    },
    model: {
        fontWeight: 800,
        fontSize: '0.9rem',
        direction:"rtl",
        textAlign:"center",
        padding:'1rem',
        marginTop:'1rem'

    },
    button:{
        padding:'1rem 3rem',
        fontWeight: 800,
        fontSize: '0.7rem',
        height: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        background:'#F1C40F',
        borderRadius:'5px',
        border:'2px solid #95A5A6'
    },
    shop: {
        fontSize: '0.8rem',
        fontWeight: 401,
        direction:'rtl',
        padding:'0.5rem',

    },
    price: {
        color: '#333',
        fontSize: '0.8rem',
        fontWeight: 401,
        padding:'0.5rem',


    },
    exists:{
        fontSize: '0.8rem',
        fontWeight: 401,
    },

    date: {
        color: '#333',
        fontSize: '0.7rem',
        fontWeight: 401,
        padding:'0.5rem',

    }

}));

export default useStyles;
