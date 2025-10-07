import { useTranslation } from "../../context/TranslationContext";
import React from "react";

function TranslatedJSX({ entity, replacements }) {
  const { translate } = useTranslation();
  const text = translate(entity);

  if (typeof text !== "string") return <>{text}</>;

  // Split text into parts including placeholders
  const parts = text.split(/({\w+})/g); // splits on {key}, keeps braces

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/{(\w+)}/);
        if (match) {
          const key = match[1];
          return replacements?.[key] ?? part; // replace if exists
        }
        return part; // plain text
      })}
    </>
  );
}

export default TranslatedJSX;
