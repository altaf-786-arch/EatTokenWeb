import React from 'react';
import './App.css';


function EatToAccess({ onBack }) {
  const [eatToken, setEatToken] = React.useState('');
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const extractEatToken = (input) => {
    const value = input.trim();

    if (/^https?:\/\//i.test(value)) {
      try {
        const url = new URL(value);
        return url.searchParams.get('eat') || '';
      } catch {
        return '';
      }
    }

    return value;
  };

  const generate = async () => {
    const token = extractEatToken(eatToken);

    if (!token) {
      setError('Please paste a valid Eat Token or complete URL.');
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    try {
      const url =
        'https://access.killersharmabot.online/access?access_token=' +
        encodeURIComponent(token);

      const res = await fetch(url);
      const text = await res.text();

      let body;
      try {
        body = JSON.parse(text);
      } catch {
        throw new Error('API returned a non-JSON response.');
      }

      if (!res.ok) {
        throw new Error(body?.message || `Request failed (${res.status})`);
      }

      setData(body);
    } catch (e) {
      setError(e?.message || 'Unable to fetch API response.');
    } finally {
      setLoading(false);
    }
  };

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {}
  };

  return (
    <div className="app-wrapper eat-page">
      <div className="card-wrapper">
        <button className="back-btn" onClick={onBack}>← Back</button>

        <div className="brand">
          <div className="logo-ring">
            <div className="ff-brand">FF</div>
          </div>
          <h1>GHOST EAT TOKEN</h1>
          <h1>ACCESS</h1>
          <p>SECURE • FAST • SIMPLE</p>
        </div>

        <div className="eat-panel">
          <div className="eat-icon">FF</div>
          <h2>Eat Token</h2>
          <p>Paste your Eat Token below</p>

          <textarea
            className="token-input"
            value={eatToken}
            onChange={(e) => setEatToken(e.target.value)}
            placeholder="Paste Eat Token or complete URL here..."
            spellCheck="false"
          />

          <button className="generate-btn" onClick={generate} disabled={loading}>
            {loading ? 'GENERATING...' : 'GENERATE'}
          </button>

          {error && <div className="error-box">{error}</div>}

          {data && (
            <div className="response-box">
              <div className="response-head">
                <span>API RESPONSE</span>
                <button onClick={() => copy(JSON.stringify(data, null, 2))}>
                  COPY FULL
                </button>
              </div>

              {data.nickname && (
                <div className="result-grid">
                  <div><small>NICKNAME</small><strong>{data.nickname}</strong></div>
                  <div><small>REGION</small><strong>{data.ffAntiConfigDesc?.region || data.ipRegion || '-'}</strong></div>
                  <div><small>ACCOUNT UID</small><strong>{data.accountId || '-'}</strong></div>
                  <div><small>LEVEL</small><strong>{data.level ?? '-'}</strong></div>
                </div>
              )}

              {data.access_token && (
                <div className="result-field">
                  <div className="result-title">
                    <span>EXTRACTED ACCESS TOKEN</span>
                    <button onClick={() => copy(data.access_token)}>COPY</button>
                  </div>
                  <pre>{data.access_token}</pre>
                </div>
              )}

              {data.token && (
                <div className="result-field">
                  <div className="result-title">
                    <span>JWT TOKEN</span>
                    <button onClick={() => copy(data.token)}>COPY</button>
                  </div>
                  <pre>{data.token}</pre>
                </div>
              )}

              <div className="result-field">
                <div className="result-title">
                  <span>FULL API RESPONSE</span>
                  <button onClick={() => copy(JSON.stringify(data, null, 2))}>COPY FULL</button>
                </div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [page, setPage] = React.useState('home');

  const onEatToAccess = () => {
    setPage('eat');
  };

  if (page === 'eat') {
    return <EatToAccess onBack={() => setPage('home')} />;
  }

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

            <button
              className="login-btn google"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=8&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">G</div>
              <div className="login-text"><strong>Google</strong></div>
            </button>

            <button
              className="login-btn facebook"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=3&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">f</div>
              <div className="login-text"><strong>Facebook</strong></div>
            </button>

            <button
              className="login-btn vk"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=5&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">VK</div>
              <div className="login-text"><strong>VK</strong></div>
            </button>

            <button
              className="login-btn x"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=11&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">𝕏</div>
              <div className="login-text"><strong>X</strong></div>
            </button>

            <button
              className="login-btn apple"
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=10&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">●</div>
              <div className="login-text"><strong>Apple</strong></div>
            </button>

            <button
              className="login-btn ff-card"
              onClick={() => onEatToAccess()}
            >
              <div className="provider-icon ff-logo">FF</div>
              <div className="login-text"><strong>EatToAccess</strong></div>
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
              href="https://t.me/ghost_hacker_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram →
            </a>

            <a
              className="social-link"
              href="https://t.me/ghost_hacker_bot"
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
