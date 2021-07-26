import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.dark,
    },
    main: {
      padding: 24,
    },
    toby: {
        width: 275,
        height: '100%',
        
    },
  }));

const NoFound = () => { 
    const classes = useStyles();
  return (
    <main className={classes.root}>
      {/* <img className={classes.toby} src={imagem} alt="ilustração doguito"/> */}
      <p className="naoencontrado-texto">
        Ops, Essa página não existe!
      </p>
    </main>
  )
}

export default NoFound