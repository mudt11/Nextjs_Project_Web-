"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    function getGreeting() {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 11) setGreeting("Chào buổi sáng");
      else if (hour >= 11 && hour < 14) setGreeting("Chào buổi trưa");
      else if (hour >= 14 && hour < 18) setGreeting("Chào buổi chiều");
      else if (hour >= 18 && hour < 23) setGreeting("Chào buổi tối");
      else setGreeting("Chúc bạn ngủ ngon");
    }
    getGreeting();
    const timer = setInterval(getGreeting, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div className="menu">
        <div className="title">
          <a href="/">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
        <nav>
          <a href="#" className="active" data-section="home">
            <i className="fa-regular fa-compass"></i> Explore
          </a>
          <a href="#" data-section="library">
            <i className="fa-solid fa-book"></i> Library
          </a>
          <a href="#" data-section="playlist">
            <i className="fa-solid fa-list"></i> My Playlist
          </a>
        </nav>
      </div>

      {/* Main */}
      <div className="main">
        {/* Header */}
        <header className="header">
          <div className="back-next-search">
            <div className="back chevron">
              <button>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="next chevron">
              <button>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass i-search"></i>
              <input
                className="input-text"
                placeholder="Bạn muốn phát nội dung gì?"
              />
            </div>
          </div>

          <div className="header-right">
            <button className="sign-up head">
              <a href="/signup" className="a-sign-up">
                Sign up
              </a>
            </button>
            <button className="login head">
              <a href="/signin">Sign in</a>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="content">
          {/* HOME */}
          <div id="home" className="home-menu section active">
            <div id="greeting" className="greeting-text">
              {greeting}
            </div>
            <h2>Featured Playlists</h2>
            <div className="playlists">
              <div className="playlists-card">
                <img src="/images/p1.jpg" alt="Playlist1" />
              </div>
              <div className="playlists-card">
                <img src="/images/p2.jpg" alt="Playlist2" />
              </div>
              <div className="playlists-card">
                <img src="/images/p3.jpg" alt="Playlist3" />
              </div>
              <div className="playlists-card">
                <img src="/images/p4.jpg" alt="Playlist4" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="info">
            <div className="info-player">
              <a className="background-singer">
                <img src="/images/singer.jpg" alt="Singer" />
              </a>
              <div className="info-song">
                <a href="#" className="song-tittle">
                  Song Title
                </a>
                <a href="#" className="artist-name">
                  Artist Name
                </a>
              </div>
            </div>
            <div className="player-center">
              <div className="control">
                <button className="play">
                  <i className="fa-solid fa-shuffle"></i>
                </button>
                <button className="play">
                  <i className="fa-solid fa-backward-step"></i>
                </button>
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
                <button className="play">
                  <i className="fa-solid fa-forward-step"></i>
                </button>
                <button className="play">
                  <i className="fa-solid fa-repeat"></i>
                </button>
              </div>
              <div className="run">
                <input
                  type="range"
                  className="seek-bar"
                  value={progress}
                  min="0"
                  max="100"
                  onChange={(e) => setProgress(e.target.value)}
                />
                <span className="current-time"></span>
                <span className="music-time">3:45</span>
              </div>
            </div>
            <div className="vol">
              <button className="volume">
                <i className="fa-solid fa-volume-high"></i>
              </button>
              <input
                type="range"
                defaultValue="50"
                min="0"
                max="100"
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
