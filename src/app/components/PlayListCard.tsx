type PlaylistCardProps = {
    image: string;
    title: string;
};

export default function PlaylistCard({ image, title }: PlaylistCardProps) {
    return (
        <div className="playlists-card">
            <img src={image} alt={title} />
        </div>
    );
}
