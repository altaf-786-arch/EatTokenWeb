import React from 'react';
import './App.css';

const App = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-wrapper">

      <div className="card-wrapper">

        {/* TITLE */}
        <div className="brand">

          <div className="logo-ring">
          <img src="/ghost-logo.png" alt="Ghost Logo" />
        </div>

          <h1>GHOST EAT TOKEN EXTRACTOR</h1>

          <div className="brand-sub">
            SECURE • FAST • SIMPLE
          </div>

          <div className="divider-line"></div>
        </div>


        {/* PROVIDER SECTION */}
        <div className="login-card">

          <div className="shield-icon">
            ⚡
          </div>

          <h2>Choose Your Method</h2>

          <p className="sub">
            Select your preferred option
          </p>


          <div className="btn-group">

            {/* GOOGLE */}
            <button
              className="login-btn google"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=8&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">
                G
              </div>

              <div className="login-text">
                <strong>Google</strong>
              </div>
            </button>


            {/* FACEBOOK */}
            <button
              className="login-btn facebook"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=3&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">
                f
              </div>

              <div className="login-text">
                <strong>Facebook</strong>
              </div>
            </button>


            {/* VK */}
            <button
              className="login-btn vk"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=5&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">
                VK
              </div>

              <div className="login-text">
                <strong>VK</strong>
              </div>
            </button>


            {/* X */}
            <button
              className="login-btn x"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=11&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">
                𝕏
              </div>

              <div className="login-text">
                <strong>X</strong>
              </div>
            </button>


            {/* APPLE */}
            <button
              className="login-btn apple"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=10&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">
                ●
              </div>

              <div className="login-text">
                <strong>Apple</strong>
              </div>
            </button>

          </div>


          {/* SECURITY */}
          <div className="security-note">
            <div className="note-icon">
              i
            </div>

            <div>
              Authentication is handled securely by the provider.
            </div>
          </div>

        </div>


        {/* TELEGRAM + CONTACT */}
        <div className="social-bar">

          <div className="social-links">

            <a
              className="social-link"
              href="https://t.me/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram →
            </a>

            <a
              className="social-link"
              href="https://t.me/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact →
            </a>

          </div>

        </div>


        {/* FOOTER */}
        <footer>
          © 2026 GHOST HACKER
        </footer>

      </div>
    </div>
  );
};

export default App;