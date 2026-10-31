export const Movies = () => {
  return (
    <div className="ui stackable container" style={{
      margin: '5%',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      padding: '2rem',
      animation: 'fadeIn 0.6s ease-out',
    }}>
      <h2 style={{
        color: 'white',
        fontFamily: 'Space Mono, monospace',
        textAlign: 'center',
      }}>
        Movies
      </h2>
      <p style={{ color: 'white', fontFamily: 'Space Mono, monospace', textAlign: 'center' }}>
        Coming soon...
      </p>

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
