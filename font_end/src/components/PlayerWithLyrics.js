import { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import { LyriceDb } from '../source/LyriceDb'
export function PlayWithLyrice(props) {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  //USE EFFECT FOR SENDING CURRENT TIME TO PARENT COMPONENT FOR LYRICS
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call the callback function in the parent component with the data
      props.getDataForLyrics({
        trackId: 1,
        currentTime: currentTime
      });

    }, 1000); // Update data every 1 second
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentTime]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.audio.current.currentTime);
  };
  return (
    <AudioPlayer
      onListen={() => handleTimeUpdate()}
      ref={audioRef}
      autoPlay
      className='bg-transparent border-0 shadow-none sticky-bottom'
      src={props.source}
    // other props here
    />
  );
}