export const Hobbies = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '2rem auto',
      padding: '0 1rem',
      animation: 'fadeIn 0.6s ease-out',
    }}>
      <div className="glass-panel" style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div className="ascii-corner top-left">╔═</div>
        <div className="ascii-corner top-right">═╗</div>

        <h1 style={{
          color: '#00ffff',
          fontFamily: 'Courier New, monospace',
          fontSize: '2rem',
          margin: '0 0 1rem 0',
        }}>
          <span style={{ color: '#8c84bb' }}>{'>> '}</span>
          hobbies/
        </h1>

        <div style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '0.9rem',
          color: '#b59dc7',
          marginBottom: '2rem',
        }}>
          <span style={{ color: '#ff6ec7' }}>status</span>
          <span style={{ color: '#ffffff' }}>: </span>
          <span style={{ color: '#00ff41' }}>"in_development"</span>
        </div>

        <div className="code-block" style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '1.5rem',
          textAlign: 'left',
        }}>
          <div style={{ color: '#8c84bb', marginBottom: '0.5rem' }}>// TODO:</div>
          <div style={{ color: '#ffffff', marginLeft: '1rem' }}>
            <span style={{ color: '#00ffff' }}>-</span> Build hobbies section<br />
            <span style={{ color: '#00ffff' }}>-</span> Add creative projects<br />
            <span style={{ color: '#00ffff' }}>-</span> Showcase passions
          </div>
          <div style={{ marginTop: '1rem', color: '#8c84bb' }}>
            // Coming soon...
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.85rem',
          color: '#b59dc7',
          opacity: 0.7,
        }}>
          More content brewing here <span className="cursor"></span>
        </div>
      </div>

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
