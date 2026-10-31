import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog/posts';

export const Blog = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '2rem auto',
      padding: '0 1rem',
      animation: 'fadeIn 0.6s ease-out',
    }}>
      {/* Page header */}
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
          <span style={{ color: '#9d7bd8' }}>{'$ '}</span>
          ls -la ~/blog/
        </h1>
        <p style={{
          color: '#b794f6',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.85rem',
          margin: 0,
        }}>
          // thoughts, rants, and code snippets from the terminal
        </p>
      </div>

      {/* Blog posts grid */}
      <div style={{
        display: 'grid',
        gap: '1.5rem',
      }}>
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <article
              className="glass-panel"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* ASCII corner decorations */}
              <div className="ascii-corner top-left">╔═</div>
              <div className="ascii-corner top-right">═╗</div>

              {/* Post metadata */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '0.85rem',
                fontFamily: 'Courier New, monospace',
                flexWrap: 'wrap',
              }}>
                <span style={{ color: '#9d7bd8' }}>
                  <span style={{ color: '#00ffff' }}>[</span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  <span style={{ color: '#00ffff' }}>]</span>
                </span>
                <span style={{ color: '#b794f6' }}>
                  <span style={{ color: '#00ffff' }}>⏱</span> {post.readingTime}
                </span>
              </div>

              {/* Post title */}
              <h2 style={{
                color: '#ff6ec7',
                fontFamily: 'Space Mono, monospace',
                fontSize: '1.3rem',
                margin: '0 0 1rem 0',
                lineHeight: 1.3,
              }}>
                <span style={{ color: '#00ffff', fontFamily: 'Courier New' }}>{'>> '}</span>
                {post.title}
              </h2>

              {/* Excerpt/Summary */}
              <p style={{
                color: '#ffffff',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                margin: '0 0 1.5rem 0',
                opacity: 0.9,
                textAlign: 'left',
              }}>
                {post.excerpt || 'No summary available.'}
              </p>

              {/* Tags */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(157, 123, 216, 0.2)',
                      border: '1px solid rgba(157, 123, 216, 0.4)',
                      borderRadius: '4px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.8rem',
                      fontFamily: 'Courier New, monospace',
                      color: '#b794f6',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read more indicator */}
              <div style={{
                marginTop: '1.5rem',
                fontFamily: 'Courier New, monospace',
                fontSize: '0.85rem',
                color: '#00ffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>read_more()</span>
                <span style={{ fontSize: '1rem' }}>→</span>
              </div>
            </article>
          </Link>
        ))}
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
