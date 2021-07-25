import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import NoFound from '../NoFound';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.dark,
    },
    main: {
      padding: 24,
    },
    toolbar: {
      minHeight: 64,
    },
  }));


function Home() {
    const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
         <h2 className="titulo-pagina">Pet notícias</h2>
        <div className={classes.toolbar} />
        <main className={classes.main}>
        </main>
        <NoFound></NoFound>
      </div>
    
    );
  }
  
  export default Home;