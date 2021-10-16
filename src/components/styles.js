import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = isScrollable => makeStyles(theme => createStyles({
    background: {
        // backgroundColor: "#F8F8F2",
        maxWidth: '100vw',
        padding: theme.spacing(2)
    },
    rootH: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: !isScrollable?theme.palette.common.white:theme.palette.primary.dark,
        boxShadow: !isScrollable?'none':'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        zIndex: theme.zIndex.drawer+1
    },
    toolbar: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    a: {
        cursor: 'pointer'
    },
    children: {
        display: 'flex',
        flexDirection: isScrollable?'column':'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 0.01
    },
    drawer: {
        width: '300px'
    },
    icon: {
        color: theme.palette.common.white
    },
    logo: {
        fontFamily: "'Astloch', cursive",
        color: isScrollable?theme.palette.common.white:theme.palette.primary.main,
        fontSize: 30
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerV: {
        display: 'flex',
        alignItems: 'center'
    },
    centerH: {
        display: 'flex',
        justifyContent: 'center'
    },
    drawerLogo: {
        fontFamily: "'Astloch', cursive",
        color: theme.palette.primary.main,
        fontSize: 30
    },
    rootC: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    media: {
        height: 180
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        textAlign: 'center'
    },
    heading: {
        color: theme.palette.primary.dark,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        textAlign: 'center'
    },
    content: {
        paddingBottom: '16px'
    },
    Toolbar: theme.mixins.toolbar,
    actions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}));