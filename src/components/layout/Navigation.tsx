import { Link, useLocation } from 'react-router-dom';
import {
  FolderOpenIcon,
  CubeIcon,
  VolumeUpIcon,
  ImagesIcon,
  EditIcon,
} from '@patternfly/react-icons';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'home', icon: null, text: '~/' },
    { path: '/blog', label: 'blog', icon: EditIcon },
    { path: '/interests', label: 'sideline', icon: FolderOpenIcon },
    { path: '/hobbies', label: 'hobbies', icon: CubeIcon },
    { path: '/playlist', label: 'playlist', icon: VolumeUpIcon },
    { path: '/gallery', label: 'gallery', icon: ImagesIcon },
  ];

  return (
    <nav
      className="glass-panel"
      style={{
        margin: '1rem auto',
        maxWidth: '900px',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: isActive ? '#00ffff' : '#8c84bb',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: isActive
                ? 'rgba(140, 132, 187, 0.2)'
                : 'transparent',
              border: isActive
                ? '1px solid rgba(140, 132, 187, 0.5)'
                : '1px solid transparent',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(140, 132, 187, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(140, 132, 187, 0.5)';
              e.currentTarget.style.color = '#00ffff';
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = '#8c84bb';
              }
            }}
          >
            {Icon ? (
              <Icon />
            ) : (
              <span style={{ fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>
                {item.text}
              </span>
            )}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
