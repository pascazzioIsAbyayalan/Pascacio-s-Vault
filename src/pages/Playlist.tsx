import { songs } from '../data/songs';

export const Playlist = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '0 1rem',
      animation: 'fadeIn 0.6s ease-out',
    }}>
      {/* Header section */}
      <div className="glass-panel" style={{
        padding: '2rem',
        marginBottom: '2rem',
        textAlign: 'left',
      }}>
        <h1 style={{
          color: '#00ffff',
          fontFamily: 'Courier New, monospace',
          fontSize: '1.8rem',
          margin: '0 0 1.5rem 0',
        }}>
          <span style={{ color: '#8c84bb' }}>{'$ '}</span>
          playlist --ultimate
        </h1>

        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.9rem',
          lineHeight: 1.8,
          color: '#ffffff',
        }}>
          <p style={{ margin: '0 0 1rem 0' }}>
            <span style={{ color: '#b59dc7', fontWeight: 'bold' }}>MELOMANIAC</span>{' '}
            <span style={{ color: '#8c84bb', fontStyle: 'italic' }}>(noun)</span>
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#ffffff' }}>
            Definition: An individual that is <span style={{ color: '#ff6ec7' }}>inordinately</span> and{' '}
            <span style={{ color: '#ff6ec7' }}>abnormally</span> affected by musical or other tones in certain ranges of sound.
          </p>
          <p style={{ color: '#b59dc7', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>
            <span style={{ color: '#00ffff' }}>//</span> Music has been my escape since I remember. It teaches me so much about the world and how human interactions can be weird and precious at the same time. Here I will share my collection of greatest hits.
          </p>
        </div>
      </div>

      {/* Songs grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {songs.map((song) => (
          <a
            key={song.id}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="glass-panel"
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Album art */}
              <div style={{
                width: '100%',
                height: '250px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src={song.image}
                  alt={song.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Play overlay */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0, 0, 0, 0.7)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  pointerEvents: 'none',
                }}
                className="play-button"
                >
                  <span style={{
                    fontSize: '1.5rem',
                    color: '#00ffff',
                    marginLeft: '4px',
                  }}>▶</span>
                </div>
              </div>

              {/* Song info */}
              <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Song name */}
                <h3 style={{
                  color: '#ff6ec7',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '1.1rem',
                  margin: '0 0 0.5rem 0',
                  lineHeight: 1.3,
                }}>
                  {song.name}
                </h3>

                {/* Artist */}
                <div style={{
                  color: '#8c84bb',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{ color: '#b59dc7' }}>artist:</span> {song.artist}
                </div>

                {/* Lyrics */}
                <div style={{
                  color: '#ffffff',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  flex: 1,
                  opacity: 0.9,
                }}>
                  <span style={{ color: '#00ffff' }}>"</span>
                  {song.line1}
                  <br />
                  {song.line2}
                  <span style={{ color: '#00ffff' }}>"</span>
                </div>

                {/* Album */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#8c84bb',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(140, 132, 187, 0.2)',
                }}>
                  <span style={{ fontSize: '1rem' }}>🎵</span>
                  <span>{song.album}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Add CSS for play button hover and animation */}
      <style>{`
        .glass-panel:hover .play-button {
          opacity: 1 !important;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
