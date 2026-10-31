import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header style={{
      paddingTop: '40px',
      paddingBottom: '30px',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)',
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* Terminal prompt line */}
      <div style={{
        fontFamily: 'Courier New, monospace',
        fontSize: '0.9rem',
        color: '#00ff41',
        marginBottom: '1rem',
        opacity: 0.8,
      }}>
        <span style={{ color: '#00ffff' }}>pascacio</span>
        <span style={{ color: '#8c84bb' }}>@</span>
        <span style={{ color: '#b59dc7' }}>vault</span>
        <span style={{ color: '#ffffff' }}>:</span>
        <span style={{ color: '#00ffff' }}>~</span>
        <span style={{ color: '#ffffff' }}>$</span>
        <span className="cursor"></span>
      </div>

      {/* Main logo */}
      <h1
        className="glitch"
        style={{
          fontFamily: 'PressStart2P, monospace',
          color: 'white',
          textShadow: '3px 5px #4b3665, 0 0 20px #8c84bb',
          margin: 0,
          fontSize: '2rem',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b59dc7'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          ✦ Pascacio's Vault ✦
        </Link>
      </h1>

      {/* Subtitle tagline */}
      <div style={{
        marginTop: '0.5rem',
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.8rem',
        color: '#8c84bb',
        opacity: 0.7,
      }}>
        <span style={{ color: '#00ffff' }}>//</span> developer · dreamer · digital architect
      </div>
    </header>
  );
};
