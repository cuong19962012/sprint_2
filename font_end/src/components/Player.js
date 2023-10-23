import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export function Player({ source, handleClickNext, handleEnd, handleClickPrevious }) {
  return (
    <AudioPlayer
      autoPlay
      showSkipControls
      className=' border-0 shadow-none sticky-bottom'
      style={{ backgroundColor: '#170f23' }}
      src={source}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleEnd}
     
    // other props here
    />
  );
}