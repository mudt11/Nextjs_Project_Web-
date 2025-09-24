export default function Sidebar() {
    return (
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
    );
}
