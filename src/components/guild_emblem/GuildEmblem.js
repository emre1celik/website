import React, { useRef, useEffect } from "react";

/**
 * GuildEmblem
 * Props:
 *  - data: string | Array<number> (server emblem, e.g. "0 0 0 3 48 ...")
 *  - scale: pixel scale factor (default 16)
 */

// Single fixed palette
const palette = [
  "rgba(0,0,0,0)", // 0 transparent
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
];

function GuildEmblem({ data, scale = 16 }) {
  const canvasRef = useRef(null);

  // Parser: accepts various formats
  function parseEmblemToBytes(input) {
    if (!input) return [];

    if (Array.isArray(input)) return input.map((n) => Number(n) & 0xff);

    const s = String(input).trim();

    if (/^\d+(\s+\d+)*$/.test(s)) {
      return s.split(/\s+/).map((t) => parseInt(t, 10) & 0xff);
    }

    if (/^[0-9a-fA-F]{64}$/.test(s)) {
      const arr = [];
      for (let i = 0; i < s.length; i += 2)
        arr.push(parseInt(s.substr(i, 2), 16));
      return arr;
    }

    if (/^[A-Za-z0-9+/=]+$/.test(s) && s.length >= 32) {
      try {
        const raw = atob(s);
        const bytes = [];
        for (let i = 0; i < raw.length; i++)
          bytes.push(raw.charCodeAt(i) & 0xff);
        if (bytes.length === 32) return bytes;
      } catch (e) {}
    }

    const fallback = s
      .split(/\D+/)
      .map((t) => parseInt(t, 10))
      .filter((n) => !isNaN(n));
    return fallback;
  }

  useEffect(() => {
    if (!data || !canvasRef.current) return;

    const bytes = parseEmblemToBytes(data);
    while (bytes.length < 32) bytes.push(0);

    const ctx = canvasRef.current.getContext("2d");
    const size = 8;
    const canvasSize = size * scale;
    canvasRef.current.width = canvasSize;
    canvasRef.current.height = canvasSize;
    ctx.clearRect(0, 0, canvasSize, canvasSize);

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
  }, [data, scale]);

  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{
          imageRendering: "pixelated",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

export default GuildEmblem;
