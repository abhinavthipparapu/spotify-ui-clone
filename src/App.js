import React,{useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { getToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player/Player';
import {useStateProviderValue } from './components/StateProvider'

const spotify = new SpotifyWebApi()

function App() {

  const [{user,token },dispatch] = useStateProviderValue()
 
  useEffect(() => {
    const tokenData = getToken()
    window.location.hash = ""

    const token1 = tokenData.access_token

    if(token1) {
      dispatch({
        type : "SET_TOKEN",
        token: token1
      })

      spotify.setAccessToken(token1)

      spotify.getMe().then((user) => {
        console.log(user)

        dispatch({
          type : 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      })
      spotify.getPlaylist('37i9dQZF1DX4H5837Y8I1n').then(response => 
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      )
    }
    // return () => {
    //   cleanup
    // }
  }, [])
  return (
    <div className="app">
      {
        token?(
          <Player spotify={spotify} />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
