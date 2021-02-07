import React, { useState,useRef, useEffect } from 'react';

import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as ImIcons from 'react-icons/im'
import * as MdIcons from 'react-icons/md'

import Slider from './Slider';

interface PlayerControlProps{
    musicsQueue: Array<
        {
            name:string
            artists: Array<string>
            file_name: string
        }
    >
}



const PlayerControl: React.FC<PlayerControlProps> = (props) =>{

    
    const audioEl = useRef<HTMLAudioElement>(null);

    const [isPlaying,setIsPlaying] = useState(false);

    const [percentage, setPercentage] = useState(0);

    const [volume, setVolume] = useState(0);
    
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    const currentPlaylist =  props.musicsQueue.map((music) => {
        const nowPlaying = require(`../../assets/audios/${music.file_name}`)
        return  nowPlaying['default']
    })

    function secondsToHms(seconds:number) {
        if (!seconds) return '00:00'
        let secStr = ''
        let minStr = ''
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = Math.floor(duration / 60)
        duration = duration % 60
    
        let sec = duration
            
        if (Math.floor(hours) > 0) {
            if(min >0){
                if(min < 10){
                    minStr = `0${Math.trunc(min)}`
                }else{
                    minStr = Math.trunc(min).toString()
                }
            }else{
                minStr = '00'
            }
            if(sec >0){
                if(sec < 10){
                    secStr = `0${Math.trunc(sec)}`
                }else{
                    secStr = Math.trunc(sec).toString()
                }
            }else{
                secStr = '00'
            }
            return `${Math.floor(hours)}: ${minStr}:${secStr}`
        }else{
            if(min >0){
                if(min < 10){
                    minStr = `0${Math.trunc(min)}`
                }else{
                    minStr = Math.trunc(min).toString()
                }
            }else{
                minStr = '00'
            }
            if(sec >0){
                if(sec < 10){
                    secStr = `0${Math.trunc(sec)}`
                }else{
                    secStr = Math.trunc(sec).toString()
                }
            }else{
                secStr = '00'
            }
            return `${minStr}:${secStr}`
        }
    }


    function handlePlayMusic() {
        const audio = audioEl.current
    
        if (!isPlaying) {
          setIsPlaying(!isPlaying)
          audio?.play()
        }
    
        if (isPlaying) {
          setIsPlaying(!isPlaying)
          audio?.pause()
        }
      }

    const handleGetCurrDuration = (e: React.ChangeEvent<HTMLAudioElement>) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
        
        setPercentage(+percent)
        setCurrentTime(Number(time.toFixed(2)))
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const audio = audioEl.current
        if(audio){
            audio.currentTime = (audio.duration / 100) * Number(e.target.value)
        }
        setPercentage(Number(e.target.value))
    }



    const handleGetCurrVolume = (e: React.ChangeEvent<HTMLAudioElement>) => {
        const vol = e.currentTarget.volume

        setVolume(vol)
    }

    function onChangeVolume(e: React.ChangeEvent<HTMLInputElement>) {
        const audio = audioEl.current
        if(audio){
            audio.volume = Number(e.target.value) /100
        }
    }


    return(

        <div className="player-control">

            <div className="main-controls">
                <div className="player-control-buttons">
                    <audio src={currentPlaylist[0]} ref={audioEl}
                        onTimeUpdate={handleGetCurrDuration}
                        onLoadedData={(e) => {
                            setDuration(Number(e.currentTarget.duration.toFixed(2)))
                        }}
                        onLoadedMetadata={(e) => {
                            e.currentTarget.volume=0.3
                        }}
                        onVolumeChange={handleGetCurrVolume}
                    ></audio>

                    <button onClick={handlePlayMusic} className="secundary-control"><FaIcons.FaRandom /></button>
                    <div className="main-control">
                        <button onClick={handlePlayMusic} className="btn-skip"><BiIcons.BiSkipNext /></button>
                        <button onClick={handlePlayMusic}>{isPlaying ? <AiIcons.AiOutlinePause /> : <AiIcons.AiFillPlayCircle />}</button>
                        <button onClick={handlePlayMusic} className="btn-skip"><BiIcons.BiSkipNext /></button>
                    </div>
                    <button onClick={handlePlayMusic} className="secundary-control"><ImIcons.ImLoop /></button>
                </div>
                <div className="progress-bar">
                    <span className="player-time">
                        {secondsToHms(currentTime)}
                    </span>
                
                    <Slider percentage={percentage} onChange={onChange} />

                    <span className="player-time">
                        {secondsToHms(duration)}
                    </span>
                </div>

            </div>
        
            <div className="other-controls">
                <div className="button-block">
                    
                    <MdIcons.MdQueueMusic />
                    <AiIcons.AiOutlineSound />
                    <Slider percentage={volume*100} onChange={onChangeVolume} />

                </div>
            </div>
        </div>
    );
}

export default PlayerControl;