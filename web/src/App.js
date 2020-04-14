import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css';


function App() {

  const [singer,setSinger] = useState([]);

  const [name,setName] = useState('');
  const [estilo,setEstilo] = useState('');
  const [music,setMusic] = useState('');
  const [album,setAlbum] = useState('');
  const [musics, setMusics] = useState([{music,album}]);



  useEffect(() => {

  });


  function handleAddMusic() {
    if(music == "" || album == ""){
      alert('Campos música e album vazios')
    }else{
      console.log(music+album)
      console.log('entrei')
      setMusics([...musics,{music,album}]);
    }
    console.log(musics)
  }

  async function handleAddSinger(e){
    e.preventDefault();

    const response = await api.post('/devs',{
      name,
      estilo,
      musics
    }); 

    setEstilo('');
    setName('');
    setMusics('');
  } 

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddSinger}>
          <div className="input-block">
            <label htmlFor="name">Nome do cantor</label>
            <input 
            name="name" 
            id="name"  
            required
            value= {name}
            onChange = { e => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="estilo">Estilo musical</label>
            <input 
            name="estilo" 
            id="estilo"  
            required
            value= {estilo}
            onChange = { e => setEstilo(e.target.value)}
            />
          </div>
         
          <ul>
            {musics.map(new_music => (

              <li className="input-group" >
                <div className="input-block">
                  <label htmlFor="music">Música</label>
                  <input 
                  name="music" 
                  id="music"  
                  required
                  value= {music}
                  onChange = { e => setMusic(e.target.value)}

                  />
                  </div>
                  <div className="input-block">
                  <label htmlFor="album">Album</label>
                  <input 
                  name="album" 
                  id="album"  
                  required
                  value= {album}
                  onChange = { e => setAlbum(e.target.value)}
                  />

                </div>
              </li>
            ))}
            
          </ul>
          
          <div className="button-group">
            <button className="aside-btn"  >-</button>
            <button className="aside-btn"  onClick={handleAddMusic}>+</button>
          </div>
          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="singer-item">
            <a href=""><img src="https://pbs.twimg.com/media/EPV873wWsAAbdj7.jpg" alt=""/></a>
            <div className="item-desc">
              <a href=""><strong>Justin Bieber</strong></a>
              <span>Rap</span>
            </div>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
