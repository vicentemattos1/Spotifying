import React, {useState,useEffect} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Spotify_Logo_RGB_Green from '../../assets/Spotify_Logo_RGB_Green.png'
import Img1 from '../../assets/img1.jpg'
import Play from '../../assets/play.png'
import Pause from '../../assets/pause.png'
import Proximo from '../../assets/proximo.png'
import Anterior from '../../assets/anterior.png'

import '../../global.css';
import './Header.css';
import './Singer-Playlist.css';
import './Singer-Sidebar.css';
import './Singer-Main.css';
import './PlayerControll.css'
function Singer(props) {   
    // Rececber um parametro pelo <Link> 
    // const singer_name = props.location.title.singer_name

    const [singers,setSingers] = useState([]);
    let audioObj = new Audio();
    let index = 0;
    let isPlaying = false;
    


    useEffect(() => { 
        async function loadSingers(){
          const response =  await api.get('/search',{params:{search:localStorage.getItem('Name_singer')}});
  
          setSingers(response.data);

        }
  
        loadSingers();
     },[]);

    function playSong(nameMusic){
        console.log(nameMusic);
        console.log(localStorage.getItem('Name_singer'));        
        new Audio(require('../../assets/musics/Kodaline/Brother.mp3')).play();

    }
    
    return(

        <div id="singer-app" >
            <header className="SingerHeader">
                <img src={Spotify_Logo_RGB_Green} alt=""/>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Sign Up</Link>
                    </li>
                </ul>
            </header>
            <div id="singer-playlist">
                
                    {singers.map(singer => (
                        <>
                            <aside>
                                <img src={singer.singer_image} alt=""/>
                                <strong>{singer.name}</strong>
                                <button><strong>PLAY</strong></button>
                            </aside>
                            <main id="singer-playlist-list">
                                <ul>
                                    {singer.musics.map( (music,index) =>(
                                        <li onClick={()=>{playSong(music.name)}}>
                                           <div id="music-data">  
                                               <img src={singer.singer_image} alt=""/>
                                               <div className="list_name">
                                                    <strong id={music.name}>{music.name}</strong>
                                                    <span>{music.album}</span>
                                               </div>
                                           </div>
                                           <span>4:16</span>
                                       </li>
                                    ))}
                                </ul>
                            </main>
                        </>
                    ))}
            </div>
            <div className="player-control">
                <div className= "player-menu">
                    <div className="player-options">
                        <img src={Anterior} alt=""/>
                        <img src={Pause} alt=""/>
                        <img src={Proximo} alt=""/>
                    </div>
                    <div className="player-NavBar">
                        <span>
                            1:44
                        </span>
                        <nav>
                            -------------------
                        </nav>
                        <span>
                            4:16
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Singer;
