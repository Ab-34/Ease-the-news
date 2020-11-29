import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SignUp from "./signup";

const useStyles = makeStyles((theme)=>
({
  
    root : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh',
    },

    title : {
        textAlign :'center',
    },

    container :{
        //backgroundColor: 'rgba(228,229,237,0.5)',
        
        color: '#2E2C6',
        textAlign :'center',
        fontSize : '1.5rem',
    },

    down: {
        color : '#FFFFFF',
        fontSize : '8rem',
    },

    signUp: {
        height: '7%',
        width: 'auto',
        // margin: '0px auto 0px auto',
        background: '#ffffff',
        padding: '0% 10% 0% 10%',
        
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked]=useState(false);
    useEffect(()=> {
        setChecked(true);
    },[]);
    return(
        <div>
        <div className={classes.root}>
        <Collapse
        in={checked}
        {...(true ? { timeout:2000}:{})}
        collapseHeight={50}>
        <div className={classes.container}>
            <h1 classNmae={classes.title}> Sign up < br/>
            for Clutter free News</h1>
            <div className={classes.signUp}>
        <SignUp></SignUp>
        </div>
        </div>
        </Collapse>
        </div>
        {/* <div className={classes.signUp}>
        <SignUp></SignUp>
        </div> */}
        <div></div>
        </div>
    );
}