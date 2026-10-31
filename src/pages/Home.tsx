import { assetPath } from '../utils/assetPath';

export const Home = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '2rem auto',
      padding: '0 1rem',
      animation: 'fadeIn 0.6s ease-out',
    }}>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Quote card with glass effect */}
        <a
          href="https://english.stackexchange.com/questions/147902/is-the-alleged-original-meaning-of-the-phrase-blood-is-thicker-than-water-real"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="glass-panel" style={{
            padding: '1.5rem',
            textAlign: 'center',
            cursor: 'pointer',
            position: 'relative',
          }}>
            <div className="ascii-corner top-left">╔═</div>
            <div className="ascii-corner top-right">═╗</div>
            <blockquote style={{
              fontFamily: 'Space Mono, monospace',
              fontStyle: 'italic',
              color: '#b794f6',
              margin: 0,
              fontSize: '1rem',
              lineHeight: 1.6,
            }}>
              <span style={{ color: '#00ffff', fontFamily: 'Courier New' }}>"</span>
              The blood of the covenant is thicker than the water of the womb
              <span style={{ color: '#00ffff', fontFamily: 'Courier New' }}>"</span>
              <br />
              <span style={{
                fontSize: '0.85rem',
                color: '#9d7bd8',
                marginTop: '0.5rem',
                display: 'block',
              }}>
                // Albert Jack and Messianic Rabbi Richard Pustelniak
              </span>
            </blockquote>
          </div>
        </a>

        {/* About section with glass panel */}
        <div className="glass-panel" style={{
          padding: '2rem',
          position: 'relative',
        }}>
          <h2 style={{
            color: '#ff6ec7',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold',
            marginTop: 0,
            marginBottom: '1.5rem',
            fontSize: '1.2rem',
          }}>
            <span style={{ color: '#9d7bd8' }}>{'>> '}</span>
            about_me.md
          </h2>

          <div className="responsive-grid">
            {/* Image with glass border */}
            <div style={{ position: 'relative' }}>
              <img
                src={assetPath('/images/me.jpg')}
                alt="A picture of me"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 110, 199, 0.3)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 110, 199, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 110, 199, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 110, 199, 0.3)';
                }}
              />
            </div>

            {/* Bio text */}
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.95rem', lineHeight: 1.8 }}>
              <p style={{ color: '#ffffff', margin: '0 0 1rem 0' }}>
                <span style={{ color: '#ff6ec7' }}>const</span>{' '}
                <span style={{ color: '#b794f6' }}>name</span> ={' '}
                <span style={{ color: '#00ff41' }}>"Grettel Pascacio Martinez"</span>;
              </p>
              <p style={{ color: '#ffffff', margin: '0 0 1.5rem 0' }}>
                Daughter of the <span style={{ color: '#ff6ec7' }}>Abya Yala</span> continent
                and adopted by the <span style={{ color: '#ff6ec7' }}>Emerald Island</span>.
                Since I was younger I always knew something was working differently in the wires of my brain.
                I learned to hug my soul and messiness.
              </p>
              <p style={{ color: '#9d7bd8', fontSize: '0.85rem', fontStyle: 'italic' }}>
                // Come with me on this journey if you want to know how my mind looks (when it's somehow organized)
              </p>
              <div className="code-block" style={{
                marginTop: '1rem',
                padding: '0.75rem',
                fontSize: '0.85rem',
              }}>
                <span style={{ color: '#ff6ec7' }}>fun_fact</span>
                <span style={{ color: '#ffffff' }}>:</span>{' '}
                <span style={{ color: '#00ff41' }}>"'Small' stands for: FOR SOME REASON I AM FREAKING 5 FOOT"</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CSS Animation */}
      <style>{`
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
