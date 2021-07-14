import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    allProduct: {
        width: '96%',
        height: '24rem',
        margin: '1.2rem',
        border: '2px solid #BDC3C7',
        borderRadius: '10px',
        background: '#fdfdfd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    return: {
        width: '100%',
        height: '40px',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        background: '#BDC3C7',
        borderRadius: '3px',
        border:'2yranpx solid #7F8C8D',
    },
    imgModel: {
        width: '35%',
        height: '100%',
        display: 'flex',
        marginTop: '1rem',
    },

    imgBig: {
        width: '260px',
        height: '180px',
        borderRadius: '8px',
        justifySelf: "flex-start",
        marginRight: '1rem'
    },
    imgAlbum: {
        width: '100%',
        height: '70px',
        justifySelf: "flex-end",
        marginTop: '2px',
    },
    details: {
        width: '40%',
        height:'100%',
        display: 'flex',
        flexDirection:"column",
        alignSelf:"center",
        justifyContent:"space-between",
        marginTop:'1rem',


    },
    button:{
        width:'40%',
        padding:'1rem 2rem',
        fontWeight: 800,
        fontSize: '0.7rem',
        height: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        background:'#F1C40F',
        borderRadius:'5px',
        alignSelf:"center",
        marginTop:'0.5rem'
    },
    name: {
        fontWeight: 800,
        fontSize: '1rem',
        direction: "rtl",
        textAlign: "right",
        padding: '0.5rem',
    },
    code: {
        fontWeight: 800,
        fontSize: '1rem',
        direction: "rtl",
        textAlign: "center",
        padding: '0.5rem',
    },
    gin: {
        fontSize: '0.9rem',
        fontWeight: 401,
        textAlign: "right",
        padding: '0.5rem',
    },
    price: {
        color: '#333',
        fontSize: '0.9rem',
        fontWeight: 401,
        padding: '0.5rem',
        textAlign: "right",


    },

    explain: {
        color: '#333',
        fontSize: '0.8rem',
        fontWeight: 401,
        padding: '0.5rem',
        textAlign: "right",

    },

    Album: {
        width: '130px',
        height: '150px',
        overflowY: 'scroll',
        marginTop: '1rem',
    },
    other: {
        width: '100%',
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:'3rem',
    },

}));

export default useStyles;
