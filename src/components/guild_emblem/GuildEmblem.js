import React, { useRef, useEffect, useState } from "react";

/**
 * GuildEmblem
 * Props:
 *  - data: string | Array<number> (server emblem, e.g. "0 0 0 3 48 ...")
 *  - scale: pixel scale factor (default 16)
 *
 * Click the emblem to cycle palettes (useful to quickly find the best match).
 */
function GuildEmblem({ data, scale = 16 }) {
  const canvasRef = useRef(null);
  const [paletteIdx, setPaletteIdx] = useState(0);

  // Several palette candidates — tweak values if you want.
  const palettes = [
    // palette 0: default attempt
    [
      "rgba(0,0,0,0)", // 0 transparent
      "#000000", // 1 black
      "#FFFFFF", // 2 white
      "#FFD700", // 3 red
      "#FF3B3B", // 4 orange
      "#FF9A00", // 5 bright yellow
      "#D9D9D9", // 6 light gray (sword)
      "#7D7D7D", // 7 medium gray
      "#1F1F1F", // 8 dark gray
      "#CFCFCF", // 9 light silver
      "#8C8C8C", // 10 gray
      "#6A2600", // 11 brown/maroon
      "#007F00", // 12 dark green
      "#000080", // 13 navy
      "#FFCC66", // 14 warm light (yellow/orange)
      "#800080", // 15 purple
    ],
    // palette 1: tuned variant (often matches bright orange sword)
    [
      "rgba(0,0,0,0)",
      "#090909",
      "#FFFFFF",
      "#D80000",
      "#FF7A00",
      "#FFC400",
      "#E6E6E6",
      "#8A8A8A",
      "#222222",
      "#EDEDED",
      "#9A9A9A",
      "#5C1A1A",
      "#0B7A07",
      "#001E9B",
      "#FFDAA1",
      "#991F6F",
    ],
    // palette 2: alternate (brighter)
    [
      "rgba(0,0,0,0)",
      "#000000",
      "#FCFCFC",
      "#FF0000",
      "#FF8C00",
      "#FFFF00",
      "#E0E0E0",
      "#B3B3B3",
      "#2B2B2B",
      "#D4D4D4",
      "#808080",
      "#7A0000",
      "#006400",
      "#00008B",
      "#FFB84D",
      "#800080",
    ],
  ];

  // Robust parser: accepts space-separated decimals, array of numbers,
  // contiguous hex pairs, or base64 raw bytes.
  function parseEmblemToBytes(input) {
    if (!input) return [];

    // Already an array of numbers
    if (Array.isArray(input)) return input.map((n) => Number(n) & 0xff);

    const s = String(input).trim();

    // 1) space-separated decimal bytes: "0 0 3 48 ..."
    if (/^\d+(\s+\d+)*$/.test(s)) {
      return s.split(/\s+/).map((t) => parseInt(t, 10) & 0xff);
    }

    // 2) hex string with no spaces (32 bytes = 64 hex chars)
    if (/^[0-9a-fA-F]{64}$/.test(s)) {
      const arr = [];
      for (let i = 0; i < s.length; i += 2) {
        arr.push(parseInt(s.substr(i, 2), 16));
      }
      return arr;
    }

    // 3) base64-ish: attempt atob and take char codes (common if server encoded raw bytes)
    // Heuristic: base64 contains letters, digits, +, / and maybe trailing =
    if (/^[A-Za-z0-9+/=]+$/.test(s) && s.length >= 32) {
      try {
        const raw = atob(s);
        const bytes = [];
        for (let i = 0; i < raw.length; i++)
          bytes.push(raw.charCodeAt(i) & 0xff);
        // If this returns 32 bytes, good. If not, keep trying other methods.
        if (bytes.length === 32) return bytes;
      } catch (e) {
        // not valid base64
      }
    }

    // Fallback: split on any non-digit and parse decimals
    const fallback = s
      .split(/\D+/)
      .map((t) => parseInt(t, 10))
      .filter((n) => !isNaN(n));
    return fallback;
  }

  useEffect(() => {
    if (!data || !canvasRef.current) return;

    const bytes = parseEmblemToBytes(data);

    // Expect 32 bytes; if less, pad with zeros
    while (bytes.length < 32) bytes.push(0);

    const ctx = canvasRef.current.getContext("2d");
    const size = 8;
    const canvasSize = size * scale;
    canvasRef.current.width = canvasSize;
    canvasRef.current.height = canvasSize;
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    const palette = palettes[paletteIdx % palettes.length];

    // Draw: each byte encodes TWO pixels: high nibble, low nibble
    let byteIndex = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x += 2) {
        const byte = bytes[byteIndex++] & 0xff;
        const high = (byte >> 4) & 0x0f;
        const low = byte & 0x0f;

        ctx.fillStyle = palette[high] || "rgba(0,0,0,0)";
        ctx.fillRect(x * scale, y * scale, scale, scale);

        ctx.fillStyle = palette[low] || "rgba(0,0,0,0)";
        ctx.fillRect((x + 1) * scale, y * scale, scale, scale);
      }
    }
  }, [data, paletteIdx, scale]); // re-render when palette changes

  // helpful caption: click to cycle palettes
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        onClick={() => setPaletteIdx((i) => (i + 1) % palettes.length)}
        style={{
          cursor: "pointer",
          imageRendering: "pixelated",
          borderRadius: 4,
        }}
        title="Click to cycle palettes (try different ones to match in-game colors)"
      />
      <div style={{ fontSize: 11, marginTop: 6 }}>
        Palette {paletteIdx + 1} / {palettes.length} — click emblem to change
      </div>
    </div>
  );
}

export default GuildEmblem;
