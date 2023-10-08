import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export function Player({ source }) {
  return (
    <AudioPlayer
      autoPlay
      className='bg-transparent border-0 shadow-none sticky-bottom'
      src={source}
    // other props here
    />
  );
}