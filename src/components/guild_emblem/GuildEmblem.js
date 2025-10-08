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
      "rgba(0,0,0,0)", // 0
      "#000000", // 1
      "#7D7D7D", // 2
      "#FFFFFF", // 3
      "#FF3B3B", // 4
      "#FF9A00", // 5
      "#f0e442ff", // 6 light gray (sword)
      "#2ff443ff", // 7 medium gray
      "#3c5e0cff", // 8 dark gray
      "#47c073ff", // 9 light silver
      "#54afb8ff", // 10 gray
      "#3570b3ff", // 11 brown/maroon
      "#00027fff", // 12 dark green
      "#923ab8ff", // 13 navy
      "#ff66d9ff", // 14 warm light (yellow/orange)
      "#80003eff", // 15 purple
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
        style={{
          cursor: "pointer",
          imageRendering: "pixelated",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

export default GuildEmblem;
