import { LyriceDb } from '../source/LyricsDb';
import '../style/style.css';
export function Lyrice(props) {
    const { trackId, currentTime } = props;
    var lyrics =
        trackId !== undefined
            ? LyriceDb.filter((track) => track.id === trackId)[0].lyrics || []
            : [];
    // Find the current line of lyrics based on the currentTime
    const currentLineIndex = lyrics.findIndex((line, index) => {
        const nextLineTime = lyrics[index + 1]
            ? lyrics[index + 1].time
            : Number.MAX_VALUE;
        return line.time <= currentTime && currentTime < nextLineTime;
    });
    return lyrics.length !== 0 ? (
        <div className="lyrics-container">
          {lyrics.map((line, index) => (
            <div
              key={index}
              className={`lyrics-line ${
                index === currentLineIndex ? "highlighted" : ""
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>
      ) : (
        <div className="lyrics-container">Không tìm thấy lời bài hát</div>
      );
}