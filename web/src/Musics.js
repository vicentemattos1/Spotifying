import React, {useState} from 'react';


function Music(props) {

  return (
    <div className="input-group">
      <div className="input-block">
        <label htmlFor="music">Música</label>
        <input 
        name="music" 
        id="music"  
        required

        />
      </div>
      <div className="input-block">
        <label htmlFor="album">Album</label>
        <input 
        name="album" 
        id="album"  
        required
        />
        
      </div>
    </div>
  );
}

export default Music;