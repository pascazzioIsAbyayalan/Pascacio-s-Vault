import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MatrixRain } from './components/effects/MatrixRain';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Interests } from './pages/Interests';
import { Hobbies } from './pages/Hobbies';
import { Movies } from './pages/Movies';
import { Playlist } from './pages/Playlist';
import { Gallery } from './pages/Gallery';
import './styles/cybergoth-theme.css';

function App() {
  return (
    <Router>
      {/* Matrix rain background */}
      <MatrixRain />

      {/* CRT scanlines overlay */}
      <div className="scanlines" />

      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header and Navigation */}
        <Header />
        <Navigation />

        {/* Page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
