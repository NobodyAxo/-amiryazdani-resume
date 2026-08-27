import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { sharedStyles } from "./sharedStyles";

/* ------------------------------------------------------------------ */
/* This is a SIMULATED visualizer for demonstration purposes only.     */
/* It does not open real network connections or scan real hosts —      */
/* it deterministically derives a fake open/closed pattern from the    */
/* text you type, purely to render an animated, portfolio-style demo.  */
/* ------------------------------------------------------------------ */

const COMMON_PORTS = [
  { port: 21, service: "FTP" },
  { port: 22, service: "SSH" },
  { port: 23, service: "Telnet" },
  { port: 25, service: "SMTP" },
  { port: 53, service: "DNS" },
  { port: 80, service: "HTTP" },
  { port: 110, service: "POP3" },
  { port: 143, service: "IMAP" },
  { port: 443, service: "HTTPS" },
  { port: 3306, service: "MySQL" },
  { port: 3389, service: "RDP" },
  { port: 8080, service: "HTTP-Alt" },
];

// Simple deterministic hash so the same input always renders the same demo pattern.
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function PortScanner() {
  const [host, setHost] = useState("");
  const [rows, setRows] = useState([]);
  const [scanning, setScanning] = useState(false);
  const timers = useRef([]);

  const runDemo = useCallback((e) => {
    e.preventDefault();
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const target = host.trim() || "example.local";
    const seed = hashString(target);
    setScanning(true);
    setRows(COMMON_PORTS.map((p) => ({ ...p, status: "pending" })));

    COMMON_PORTS.forEach((p, i) => {
      const t = setTimeout(() => {
        const open = (seed >> i) % 3 === 0; // deterministic pseudo-random open/closed
        setRows((prev) =>
          prev.map((row, idx) => (idx === i ? { ...row, status: open ? "open" : "closed" } : row))
        );
        if (i === COMMON_PORTS.length - 1) setScanning(false);
      }, 220 * (i + 1));
      timers.current.push(t);
    });
  }, [host]);

  return (
    <div className="tool-root" dir="ltr">
      <style>{sharedStyles}</style>

      <div className="tool-titlebar">
        <span className="tool-dot red" />
        <span className="tool-dot yellow" />
        <span className="tool-dot green" />
        <span className="tool-titlebar-name tool-mono">port-scanner.js</span>
        <Link to="/" className="tool-back">
          <ArrowLeft size={13} /> Back to resume
        </Link>
      </div>

      <div className="tool-content">
        <div className="tool-heading">Port Scanner Visualizer</div>
        <div className="tool-subheading">
          An animated demo of what a port-scan result view looks like — built to showcase UI/UX
          for network tooling.
        </div>

        <div className="tool-note">
          <ShieldAlert size={16} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>
            <strong>Demo only — not a real scanner.</strong> This runs entirely in your browser and
            never connects to any real host. Results are a deterministic pattern generated from the
            text you type, purely to visualize a scan-style UI. Browsers can't open raw sockets, and
            scanning systems you don't own without permission is illegal in most places — for real
            scanning, use an authorized tool like nmap against systems you're allowed to test.
          </span>
        </div>

        <form className="tool-input-row" onSubmit={runDemo}>
          <input
            className="tool-input"
            type="text"
            placeholder="Type any label, e.g. my-lab-server"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />
          <button className="tool-btn" type="submit" disabled={scanning}>
            <Play size={14} />
            {scanning ? "Scanning…" : "Run demo"}
          </button>
        </form>

        {rows.length > 0 && (
          <div className="tool-panel">
            <div className="tool-panel-bar tool-mono">scan-result.log</div>
            {rows.map((r, i) => (
              <div
                key={r.port}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "11px 16px",
                  borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--line)",
                }}
              >
                <span className="tool-mono" style={{ color: "var(--var)", width: 56, flexShrink: 0 }}>
                  :{r.port}
                </span>
                <span style={{ color: "var(--muted)", fontSize: 13, width: 90, flexShrink: 0 }}>
                  {r.service}
                </span>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === "pending") {
    return (
      <span className="tool-mono" style={{ color: "var(--faint)", fontSize: 12.5 }}>
        …
      </span>
    );
  }
  if (status === "open") {
    return (
      <span
        className="tool-mono"
        style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--str)", fontSize: 12.5 }}
      >
        <CheckCircle2 size={14} /> open
      </span>
    );
  }
  return (
    <span
      className="tool-mono"
      style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--faint)", fontSize: 12.5 }}
    >
      <XCircle size={14} /> closed
    </span>
  );
}
