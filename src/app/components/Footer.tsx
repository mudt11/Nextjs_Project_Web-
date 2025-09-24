type FooterProps = {
    progress: number;
    onProgressChange: (value: number) => void;
};

export default function Footer({ progress, onProgressChange }: FooterProps) {
    return (
        <footer className="info">
            <div className="info-player">
                <a className="background-singer">
                    <img src="/images/singer.jpg" alt="Singer" />
                </a>
                <div className="info-song">
                    <a href="#" className="song-tittle">Song Title</a>
                    <a href="#" className="artist-name">Artist Name</a>
                </div>
            </div>

            <div className="player-center">
                <div className="control">
                    <button className="play"><i className="fa-solid fa-shuffle"></i></button>
                    <button className="play"><i className="fa-solid fa-backward-step"></i></button>
                    <button className="play-btn"><i className="fas fa-play"></i></button>
                    <button className="play"><i className="fa-solid fa-forward-step"></i></button>
                    <button className="play"><i className="fa-solid fa-repeat"></i></button>
                </div>
                <div className="run">
                    <input
                        type="range"
                        className="seek-bar"
                        value={progress}
                        min={0}
                        max={100}
                        onChange={(e) => onProgressChange(Number(e.target.value))}
                    />
                    <span className="current-time"></span>
                    <span className="music-time">3:45</span>
                </div>
            </div>

            <div className="vol">
                <button className="volume"><i className="fa-solid fa-volume-high"></i></button>
                <input type="range" defaultValue={50} min={0} max={100} />
            </div>
        </footer>
    );
}
