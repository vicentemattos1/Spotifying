import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import PlayerControl from './PlayerControl';

import Alok from '../../assets/images/music/Alok.jpg'

function PlayerAudio() {
        
    const [isPlaying,setIsPlaying] = useState(false);
    
    const [isFavorite, setIsFavorite] =useState(false)

    const musics = [
        {        
            name: 'Waiting for the end',
            artists: ['Linkin park'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
        {        
            name: 'In the end',
            artists: ['Linkin park'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
        {        
            name: "Don't say good bye",
            artists: ['Alok','Ilkay Sencan'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
        {        
            name: 'Alive',
            artists: ['Alok'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
        {        
            name: 'Pirate',
            artists: ['Liu','GenX'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
        {        
            name: 'Chlorine',
            artists: ['Twenty one pilots'],
            photo: 'Alok.jpg',
            file_name: 'Alok-Alive.mp3',
        },
    ]

    function handleFavorite(){
        setIsFavorite(!isFavorite)
    }

  return (
    <div id="now-playing-bar">
        <div className="now-playing">
            <div className="music-info">
                <img src={Alok} alt=""/>
                <div className="music-info-box">
                    <Link to={`/albums/${'teste'}`} className="music-text">{musics[3].name}</Link>
                    <Link to={`/artists/${'teste'}`} className="music-text">{musics[3].artists}</Link>
                </div>
                <button onClick={handleFavorite}>
                    {isFavorite ? 
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF"><path fill="none" d="M0 0h16v16H0z"></path><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path></svg>
                        :
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF"><path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path></svg> 
                    }
                    </button>
            </div>
        </div>
        <PlayerControl musicsQueue={musics}/>

    </div>
  );
}

export default PlayerAudio;
