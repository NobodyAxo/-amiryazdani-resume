import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, MapPin, Building2, Clock, Globe2 } from "lucide-react";
import { sharedStyles } from "./sharedStyles";

export default function IpLookup() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const lookup = useCallback(async (target) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const url = target
        ? `https://ipapi.co/${encodeURIComponent(target)}/json/`
        : `https://ipapi.co/json/`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) {
        setError(data.reason || "Lookup failed. Check the IP or domain and try again.");
      } else {
        setResult(data);
      }
    } catch (e) {
      setError("Network error — the lookup service might be temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Load the visitor's own IP info on first load, as a friendly default.
  useEffect(() => {
    lookup("");
  }, [lookup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      lookup("");
      return;
    }
    lookup(query.trim());
  };

  return (
    <div className="tool-root" dir="ltr">
      <style>{sharedStyles}</style>

      <div className="tool-titlebar">
        <span className="tool-dot red" />
        <span className="tool-dot yellow" />
        <span className="tool-dot green" />
        <span className="tool-titlebar-name tool-mono">ip-lookup.js</span>
        <Link to="/" className="tool-back">
          <ArrowLeft size={13} /> Back to resume
        </Link>
      </div>

      <div className="tool-content">
        <div className="tool-heading">IP / Domain Lookup</div>
        <div className="tool-subheading">
          Look up geolocation, ISP, and network info for any public IP address or domain name.
          Uses the free ipapi.co API.
        </div>

        <form className="tool-input-row" onSubmit={handleSubmit}>
          <input
            className="tool-input"
            type="text"
            placeholder="e.g. 8.8.8.8 or example.com — leave empty for your own IP"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="tool-btn" type="submit" disabled={loading}>
            {loading ? <span className="tool-spinner" /> : <Search size={15} />}
            Lookup
          </button>
        </form>

        {error && (
          <div className="tool-panel">
            <div className="tool-panel-bar tool-mono">
              <Globe2 size={12} /> result.json
            </div>
            <div className="tool-error">Error: {error}</div>
          </div>
        )}

        {result && !error && (
          <div className="tool-panel">
            <div className="tool-panel-bar tool-mono">
              <Globe2 size={12} /> result.json
            </div>
            <ResultRow icon={<Globe2 size={15} />} label="IP address" value={result.ip} mono />
            <ResultRow
              icon={<MapPin size={15} />}
              label="Location"
              value={[result.city, result.region, result.country_name].filter(Boolean).join(", ") || "—"}
            />
            <ResultRow icon={<Building2 size={15} />} label="ISP / Org" value={result.org || "—"} />
            <ResultRow icon={<Clock size={15} />} label="Timezone" value={result.timezone || "—"} mono />
            <ResultRow
              icon={<Globe2 size={15} />}
              label="Coordinates"
              value={
                result.latitude != null && result.longitude != null
                  ? `${result.latitude}, ${result.longitude}`
                  : "—"
              }
              mono
            />
            <ResultRow icon={<Globe2 size={15} />} label="ASN" value={result.asn || "—"} mono last />
          </div>
        )}
      </div>
    </div>
  );
}

function ResultRow({ icon, label, value, mono, last }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "13px 16px",
        borderBottom: last ? "none" : "1px solid var(--line)",
      }}
    >
      <span style={{ color: "var(--var)", flexShrink: 0 }}>{icon}</span>
      <span style={{ color: "var(--comment)", fontSize: 12.5, width: 110, flexShrink: 0 }}>
        {label}
      </span>
      <span
        className={mono ? "tool-mono" : ""}
        style={{ color: "var(--text)", fontSize: 13.5, wordBreak: "break-word" }}
      >
        {value}
      </span>
    </div>
  );
}
