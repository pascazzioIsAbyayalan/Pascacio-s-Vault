import { useState } from 'react';
import { assetPath } from '../utils/assetPath';

const galleryImages = [
  { id: 1, src: assetPath('/images/img01.jpg'), size: 'xlarge' },
  { id: 2, src: assetPath('/images/img02.jpg'), size: 'small' },
  { id: 3, src: assetPath('/images/img03.jpg'), size: 'medium' },
  { id: 4, src: assetPath('/images/img04.jpg'), size: 'small' },
  { id: 5, src: assetPath('/images/img05.jpg'), size: 'tall' },
  { id: 6, src: assetPath('/images/img06.jpg'), size: 'wide' },
  { id: 7, src: assetPath('/images/img07.jpg'), size: 'small' },
  { id: 8, src: assetPath('/images/img08.jpg'), size: 'medium' },
  { id: 9, src: assetPath('/images/img09.jpg'), size: 'small' },
  { id: 10, src: assetPath('/images/moodboard.png'), size: 'xlarge' },
  { id: 11, src: assetPath('/images/card01.jpg'), size: 'small' },
  { id: 12, src: assetPath('/images/card02.jpg'), size: 'medium' },
  { id: 13, src: assetPath('/images/card03.jpg'), size: 'tall' },
  { id: 14, src: assetPath('/images/card04.jpg'), size: 'small' },
  { id: 15, src: assetPath('/images/card05.jpg'), size: 'small' },
  { id: 16, src: assetPath('/images/card06.jpg'), size: 'medium' },
  { id: 17, src: assetPath('/images/me.jpg'), size: 'large' },
  // Placeholders (duplicates to fill gallery - replace later)
  { id: 18, src: assetPath('/images/img01.jpg'), size: 'small' },
  { id: 19, src: assetPath('/images/img02.jpg'), size: 'wide' },
  { id: 20, src: assetPath('/images/img03.jpg'), size: 'small' },
  { id: 21, src: assetPath('/images/img04.jpg'), size: 'tall' },
  { id: 22, src: assetPath('/images/img05.jpg'), size: 'small' },
  { id: 23, src: assetPath('/images/img06.jpg'), size: 'medium' },
  { id: 24, src: assetPath('/images/img07.jpg'), size: 'small' },
  { id: 25, src: assetPath('/images/img08.jpg'), size: 'small' },
  { id: 26, src: assetPath('/images/img09.jpg'), size: 'large' },
  { id: 27, src: assetPath('/images/card01.jpg'), size: 'small' },
  { id: 28, src: assetPath('/images/card02.jpg'), size: 'small' },
];

export const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  // Simulate loading effect
  useState(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '2rem auto',
      padding: '0 1rem',
    }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '2rem',
        marginBottom: '2rem',
        textAlign: 'left',
      }}>
        <h1 style={{
          color: '#00ffff',
          fontFamily: 'Courier New, monospace',
          fontSize: '1.8rem',
          margin: '0 0 0.5rem 0',
        }}>
          <span style={{ color: '#8c84bb' }}>{'$ '}</span>
          ls -la ~/memories/
        </h1>
        <p style={{
          color: '#b59dc7',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.85rem',
          margin: 0,
        }}>
          <span style={{ color: '#00ffff' }}>//</span> photo dump - moments frozen in time
        </p>
      </div>

      {/* Loading state with circular animation */}
      {loading ? (
        <div className="glass-panel" style={{
          padding: '4rem 2rem',
          textAlign: 'center',
        }}>
          {/* Circular loading spinner */}
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 2rem',
            border: '3px solid rgba(140, 132, 187, 0.2)',
            borderTop: '3px solid #ff6ec7',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }} />
          <div style={{
            fontFamily: 'Courier New, monospace',
            color: '#8c84bb',
            fontSize: '0.9rem',
          }}>
            <span style={{ color: '#00ffff' }}>[</span>
            loading
            <span style={{ color: '#00ffff' }}>]</span>
            <span className="cursor"></span>
          </div>
        </div>
      ) : (
        <>
          {/* Asymmetrical Bento Grid Gallery */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '150px',
            gap: '0.5rem',
          }}>
            {galleryImages.map((image) => {
              const gridStyles = {
                xlarge: { gridColumn: 'span 3', gridRow: 'span 2' }, // Extra large asymmetric
                large: { gridColumn: 'span 2', gridRow: 'span 2' },
                wide: { gridColumn: 'span 3', gridRow: 'span 1' }, // Wide horizontal
                tall: { gridColumn: 'span 1', gridRow: 'span 3' }, // Tall vertical
                medium: { gridColumn: 'span 2', gridRow: 'span 1' },
                small: { gridColumn: 'span 1', gridRow: 'span 1' },
              };

              return (
                <div
                  key={image.id}
                  className="glass-panel"
                  style={{
                    ...gridStyles[image.size as keyof typeof gridStyles],
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: 0,
                    transition: 'all 0.3s',
                    opacity: imagesLoaded.has(image.id) ? 1 : 0,
                    animation: imagesLoaded.has(image.id) ? 'fadeIn 0.6s ease-out' : 'none',
                  }}
                  onClick={() => setLightboxImage(image.src)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(181, 157, 199, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onLoad={() => {
                      setImagesLoaded(prev => new Set(prev).add(image.id));
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="image-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(43, 23, 70, 0.9), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1rem',
                    }}
                  >
                    <div style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.8rem',
                      color: '#00ffff',
                    }}>
                      <span style={{ color: '#b59dc7' }}>img_{String(image.id).padStart(2, '0')}.jpg</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image counter */}
          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.85rem',
            color: '#8c84bb',
          }}>
            <span style={{ color: '#00ffff' }}>[</span>
            {galleryImages.length} images loaded
            <span style={{ color: '#00ffff' }}>]</span>
          </div>
        </>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(140, 132, 187, 0.3)',
              border: '1px solid #8c84bb',
              color: '#00ffff',
              fontSize: '1.5rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontFamily: 'Courier New, monospace',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(181, 157, 199, 0.5)';
              e.currentTarget.style.borderColor = '#b59dc7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(140, 132, 187, 0.3)';
              e.currentTarget.style.borderColor = '#8c84bb';
            }}
          >
            ×
          </button>

          {/* Image */}
          <img
            src={lightboxImage}
            alt="Lightbox"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              border: '2px solid #8c84bb',
              borderRadius: '8px',
              boxShadow: '0 0 50px rgba(181, 157, 199, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image label */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(43, 23, 70, 0.9)',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            border: '1px solid #8c84bb',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.9rem',
            color: '#b59dc7',
          }}>
            <span style={{ color: '#00ffff' }}>viewing:</span> {lightboxImage.split('/').pop()}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        .glass-panel:hover .image-overlay {
          opacity: 1 !important;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

        @media (max-width: 768px) {
          .glass-panel[style*="gridColumn: span 3"],
          .glass-panel[style*="gridColumn: span 4"] {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </div>
  );
};
