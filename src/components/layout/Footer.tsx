export const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      marginTop: 'auto',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
    }}>
      <div style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: '800px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        gap: '1rem',
      }}>
        {/* Terminal-style footer */}
        <div style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '0.85rem',
          color: '#8c84bb',
          opacity: 0.8,
        }}>
          <span style={{ color: '#00ffff' }}>┌──</span>
          <span style={{ color: '#b59dc7' }}>(pascacio㉿vault)</span>
          <span style={{ color: '#00ffff' }}>─[</span>
          <span style={{ color: '#00ff41' }}>~</span>
          <span style={{ color: '#00ffff' }}>]</span>
        </div>

        <h3 style={{
          fontFamily: 'PressStart2P, monospace',
          color: '#8c84bb',
          textShadow: '2px 3px #4b3665, 0 0 10px #b59dc7',
          fontSize: '0.9rem',
          margin: 0,
        }}>
          Pascacio's Vault
        </h3>

        <p style={{
          fontSize: '0.85rem',
          fontFamily: 'Space Mono, monospace',
          color: '#8c84bb',
          margin: 0,
        }}>
          <span style={{ color: '#00ffff' }}>//</span> All rights reserved &copy; {new Date().getFullYear()}
        </p>

        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Space Mono, monospace',
          color: '#b59dc7',
          margin: 0,
        }}>
          <span style={{ color: '#00ffff' }}>$</span> contact:{' '}
          <a
            href="mailto:pascaciogre@gmail.com"
            style={{
              color: '#00ff41',
              textDecoration: 'none',
              borderBottom: '1px dotted #00ff41',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00ffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#00ff41'}
          >
            pascaciogre@gmail.com
          </a>
        </p>

        <div style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '0.75rem',
          color: '#4b3665',
          marginTop: '1rem',
        }}>
          Built with React + TypeScript + PatternFly + 💜
        </div>
      </div>
    </footer>
  );
};
