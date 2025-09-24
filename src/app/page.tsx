"use client";
import { useEffect, useState } from "react";
import Sidebar from "../app/components/Sidebars";
import Header from "../app/components/Header";
import Greeting from "../app/components/Greeting";
import PlaylistCard from "../app/components/PlayListCard";
import Footer from "../app/components/Footer";

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
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <Greeting message={greeting} />
          <h2>Featured Playlists</h2>
          <div className="playlists">
            <PlaylistCard image="/images/image1.jpg" title="Playlist 1" />
            <PlaylistCard image="/images/image2.jpg" title="Playlist 2" />
            <PlaylistCard image="/images/image3.png" title="Playlist 3" />
            <PlaylistCard image="/images/image4.png" title="Playlist 4" />
          </div>
        </div>
        <Footer progress={progress} onProgressChange={setProgress} />
      </div>
    </div>
  );
}
