import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import { ContextProvider } from './SocketContext';

window.global = window;


const useStyles = makeStyles((theme) => ({
  //  appBar: {
  //     borderRadius: 20,
  //     margin: '30px 100px',
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     width: '600px',
  //     // border: '2px solid black',
  
  //     [theme.breakpoints.down('xs')]: {
  //       width: '90%',
  //     },
  //   },
   title: {
    color: 'white',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    // fontFamily: 'Arial'

   },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/chat-bg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize:' cover',
      backgroundPosition: 'center',

    

     
    },
}))



const VideoChat = () => {
const classes = useStyles()

  return (

    <ContextProvider>
     <div className={`${classes.wrapper} v-chat-body`} >

        <Typography className={classes.title} variant='h2' align='center' >ViChat</Typography>
          {/* <AppBar className={classes.appBar} position='static' color='inherit' >
          </AppBar> */}
        {/* video player */}
          <VideoPlayer/>

        {/* options */}
          <Options >
              <Notifications/>
          </Options>
      
    
     </div>
     </ContextProvider>
  )
}

export default VideoChat