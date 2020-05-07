import React, {useState,useEffect} from 'react';
import api from '../../services/api';

import '../../global.css';
import './Sidebar.css'
import './Main.css'
import '../../App.css';

import { Link } from 'react-router-dom';

function Main(){

  

  const [singers,setSingers] = useState([]);

  const [name,setName] = useState('');
  const [estilo,setEstilo] = useState('');
  const [singer_image,setSinger_Image] = useState('');
  const [musics, setMusics] = useState([{music:"",album:""}]);



  useEffect(() => { 
      async function loadSingers(){
        const response =  await api.get('/singer');

        setSingers(response.data);
      }

      loadSingers();
   },[]);



  async function handleAddSinger(e){
    e.preventDefault();


    const response = await api.post('/singer',{
      name,
      estilo,
      singer_image,
      musics
    }); 

    console.log(response.data)

    setEstilo('');
    setName('');
    setSinger_Image('');
    setMusics([]);
    setSingers([...singers,response.data]);
  } 



  const updateFieldChanged = index => e => {
    let newArr = [...musics];
    let aux = {'name': e.target.value,'album':newArr[index.album]};
    newArr[index] = aux;
    setMusics(newArr);
  }


  const updateFieldChanged2 = index => e => {
    let newArr = [...musics];
    let aux = {'name': newArr[index].name,'album': e.target.value};
    newArr[index] = aux;
    setMusics(newArr);
  }

  function handleAddInput(){

    if(musics[musics.length-1].name === "" || musics[musics.length-1].album === ""){
      alert('Campos vazios');
    }else{
      setMusics([...musics,{'name':"",'album':""}]);
    }
    console.log(musics);
    
  }

  function handleRemoveInput(){
    let arrayAux = [...musics];
    arrayAux.pop();
    setMusics(arrayAux);
    console.log(musics);
  }



  return (
    <div id="app">
      <aside className="home-aside">
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

          <div className="input-block">
            <label htmlFor="singer_image">Link da imagem do cantor</label>
            <input 
            name="singer_image" 
            id="singer_image"  
            required
            value= {singer_image}
            onChange = { e => setSinger_Image(e.target.value)}
            />
          </div>
         
          <ul>
            {musics.map((musicValue,index) => (

              <li className="input-group" >
                <div className="input-block">
                  <label htmlFor="music">Música</label>
                  <input 
                  name="music" 
                  id= "music" 
                  required
                  value= {musics[index].name}
                  onChange = { updateFieldChanged(index)}

                  />
                  </div>
                  <div className="input-block">
                  <label htmlFor="album">Album</label>
                  <input 
                  name="album" 
                  id="album"  
                  required
                  value= {musics[index].album}
                  onChange = {updateFieldChanged2(index)}
                  />
                  

                </div>
              </li>
            ))}
            
          </ul>
          
          <div className="button-group">
            <button className="aside-btn" onClick={handleRemoveInput}>-</button>
            <button className="aside-btn" type="button"  onClick={handleAddInput}>+</button>
          </div>
          <button type="submit" >Salvar</button>

        </form>
      </aside>

      <main className="home-main">
        <ul>
            {singers.map(singer => (
              <li className="singer-item" key={singer.id}>
                <Link to={{pathname:'/singer',title:{singer_name:singer.name}}}><img src={singer.singer_image} onClick={ () => {localStorage.setItem('Name_singer',singer.name)}} alt=""/></Link>
                <div className="item-desc">
                    <Link to={{pathname:'/singer',title:{singer_name:singer.name}}}><strong>{singer.name}</strong></Link>
                  <span>{singer.estilo}</span>
                </div>
              </li>
            ))}

        </ul>
      </main>
    </div>
  );

}

export default Main;