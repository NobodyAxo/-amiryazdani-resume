export const sharedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

  :root {
    --bg: #0b0e14;
    --panel: #10141b;
    --panel-alt: #141924;
    --line: #1f2530;
    --text: #e6e8eb;
    --muted: #7d8590;
    --faint: #4b5261;
    --kw: #c792ea;
    --str: #7ee787;
    --fn: #e3b341;
    --var: #79c0ff;
    --danger: #f47067;
    --comment: #5b6472;
  }

  * { box-sizing: border-box; }

  .tool-root {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    width: 100%;
  }

  .tool-mono { font-family: 'JetBrains Mono', monospace; }

  .tool-titlebar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background: var(--panel);
    border-bottom: 1px solid var(--line);
  }
  .tool-dot { width: 11px; height: 11px; border-radius: 50%; }
  .tool-dot.red { background: #ff5f57; }
  .tool-dot.yellow { background: #febc2e; }
  .tool-dot.green { background: #28c840; }
  .tool-titlebar-name { margin-inline-start: 8px; color: var(--muted); font-size: 12.5px; }
  .tool-back {
    margin-inline-start: auto;
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--muted);
    text-decoration: none;
    font-size: 12.5px;
    border: 1px solid var(--line);
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.15s ease;
  }
  .tool-back:hover { color: var(--text); border-color: var(--faint); }

  .tool-content {
    max-width: 640px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }

  .tool-heading {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .tool-subheading {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .tool-input-row {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }
  .tool-input {
    flex: 1;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 11px 14px;
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    outline: none;
    transition: border-color 0.15s ease;
  }
  .tool-input:focus { border-color: var(--var); }
  .tool-input::placeholder { color: var(--faint); }

  .tool-btn {
    background: var(--var);
    color: #0b0e14;
    border: none;
    border-radius: 8px;
    padding: 0 18px;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.15s ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .tool-btn:hover { opacity: 0.88; }
  .tool-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .tool-panel {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
  }
  .tool-panel-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 9px 14px;
    font-size: 11.5px;
    color: var(--comment);
    background: var(--panel-alt);
    border-bottom: 1px solid var(--line);
    direction: ltr;
  }

  .tool-error {
    color: var(--danger);
    font-size: 13px;
    padding: 14px;
    font-family: 'JetBrains Mono', monospace;
  }

  .tool-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    background: rgba(227, 179, 65, 0.08);
    border: 1px solid rgba(227, 179, 65, 0.25);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--fn);
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 22px;
  }

  .tool-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(11, 14, 20, 0.3);
    border-top-color: #0b0e14;
    border-radius: 50%;
    animation: tool-spin 0.7s linear infinite;
  }
  @keyframes tool-spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) {
    .tool-spinner { animation: none; }
  }
`;
