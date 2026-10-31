import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/blog/posts';
import '../styles/markdown.css';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      fetch(post.markdownFile)
        .then((res) => res.text())
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading blog post:', err);
          setLoading(false);
        });
    }
  }, [post]);

  if (!post) {
    return (
      <>
        {/* Darkened background overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: 0,
          pointerEvents: 'none',
          animation: 'fadeInOverlay 0.4s ease-out',
        }} />

        <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', position: 'relative', zIndex: 1 }}>
          <div className="glass-panel" style={{
            padding: '2rem',
            textAlign: 'center',
            animation: 'fadeInContent 0.6s ease-out',
          }}>
            <h2 style={{ color: '#ff6ec7', fontFamily: 'Space Mono, monospace' }}>
              404 - Post Not Found
            </h2>
            <Link to="/blog" style={{ color: '#00ffff', fontFamily: 'Courier New, monospace' }}>
              ← Back to blog
            </Link>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes fadeInOverlay {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInContent {
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
      </>
    );
  }

  return (
    <>
      {/* Darkened background overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'fadeInOverlay 0.4s ease-out',
      }} />

      <div style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Back button */}
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            color: '#00ffff',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'color 0.3s',
            animation: 'fadeInContent 0.4s ease-out',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff6ec7'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#00ffff'}
        >
          <span>←</span>
          <span>cd ../blog</span>
        </Link>

      {/* Post header */}
      <div className="glass-panel" style={{
        padding: '2rem',
        marginBottom: '2rem',
        animation: 'fadeInContent 0.6s ease-out',
      }}>
        <div className="ascii-corner top-left">╔═════</div>
        <div className="ascii-corner top-right">═════╗</div>

        {/* Metadata */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          fontFamily: 'Courier New, monospace',
          flexWrap: 'wrap',
        }}>
          <span style={{ color: '#9d7bd8' }}>
            <span style={{ color: '#00ffff' }}>[</span>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <span style={{ color: '#00ffff' }}>]</span>
          </span>
          <span style={{ color: '#b794f6' }}>
            <span style={{ color: '#00ffff' }}>⏱</span> {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          color: '#ff6ec7',
          fontFamily: 'Space Mono, monospace',
          fontSize: '2rem',
          margin: '0 0 1.5rem 0',
          lineHeight: 1.3,
        }}>
          {post.title}
        </h1>

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
      </div>

      {/* Post content */}
      <article className="glass-panel blog-content" style={{
        padding: '2rem',
        animation: 'fadeInContent 0.6s ease-out 0.2s both',
      }}>
        {loading ? (
          <div style={{
            textAlign: 'center',
            color: '#b794f6',
            fontFamily: 'Courier New, monospace',
          }}>
            <div style={{ marginBottom: '1rem' }}>Loading post...</div>
            <div className="cursor" style={{ display: 'inline-block' }}></div>
          </div>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom styling for markdown elements
              h2: ({ children }) => (
                <h2 style={{
                  color: '#00ffff',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '1.5rem',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{ color: '#9d7bd8' }}>{'## '}</span>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{
                  color: '#b794f6',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '1.2rem',
                  marginTop: '1.5rem',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{ color: '#9d7bd8' }}>{'### '}</span>
                  {children}
                </h3>
              ),
              code: ({ node, inline, children, ...props }) => {
                // Inline code: stays in paragraph with tan background
                if (inline) {
                  return (
                    <code
                      {...props}
                      style={{
                        background: 'rgba(194, 139, 74, 0.25)',
                        color: '#e8c298',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '3px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '0.95em',
                        fontWeight: '500',
                      }}
                    >
                      {children}
                    </code>
                  );
                }

                // Code blocks: just return the code element, <pre> is handled by react-markdown
                return (
                  <code
                    {...props}
                    style={{
                      fontFamily: 'Courier New, monospace',
                      color: '#00ff41',
                    }}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderLeft: '3px solid #b794f6',
                  padding: '1rem',
                  borderRadius: '4px',
                  overflowX: 'auto',
                  margin: '1.5rem 0',
                }}>
                  {children}
                </pre>
              ),
              p: ({ children }) => (
                <p style={{
                  marginBottom: '1.5rem',
                  lineHeight: 1.8,
                }}>
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong style={{ color: '#ff6ec7', fontWeight: 'bold' }}>
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em style={{ color: '#b794f6', fontStyle: 'italic' }}>
                  {children}
                </em>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </article>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInContent {
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
    </>
  );
};
