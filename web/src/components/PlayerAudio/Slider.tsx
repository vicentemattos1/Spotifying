import { useState, useRef, useEffect } from 'react'
import './slider.css'

interface SliderProps{
    percentage: number,
    onChange: Function,
}

const Slider: React.FC<SliderProps> = ( props ) => {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef<HTMLInputElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rangeWidth = Number(rangeRef.current?.getBoundingClientRect().width)
    const thumbWidth =  Number(thumbRef.current?.getBoundingClientRect().width)
    const centerThumb = (thumbWidth / 100) * props.percentage * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * props.percentage - (thumbWidth / 100) * props.percentage
    setPosition(props.percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [props.percentage])

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
        style={{
          width: `${progressBarWidth}px`
        }}
      ></div>
      <div
        className='thumb'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}
      ></div>
      <input
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        className='range'
        onChange={(e) => props.onChange(e)} 
      />
    </div>
  )
}

export default Slider