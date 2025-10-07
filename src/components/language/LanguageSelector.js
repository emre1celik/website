import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../context/TranslationContext";
import flagEN from "../../assets/flags/en.png";
import flagES from "../../assets/flags/es.png";
import flagET from "../../assets/flags/et.png";
import flagLV from "../../assets/flags/lv.png";
import flagPL from "../../assets/flags/pl.png";
import flagPT from "../../assets/flags/pt.png";
import flagRU from "../../assets/flags/ru.png";
import flagTR from "../../assets/flags/tr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: flagEN },
    { code: "es", name: "Español", flag: flagES },
    { code: "et", name: "Eesti", flag: flagET },
    { code: "lv", name: "Latviešu", flag: flagLV },
    { code: "pl", name: "Polski", flag: flagPL },
    { code: "pt", name: "Português", flag: flagPT },
    { code: "ru", name: "Русский", flag: flagRU },
    { code: "tr", name: "Türkçe", flag: flagTR },
  ];

  const current = languages.find((l) => l.code === language);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Current selection */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          border: "2px solid #232323ff",
          borderRadius: "8px",
          padding: "0.3rem 0.6rem",
          backgroundColor: "rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <img src={current.flag} alt={current.name} width="25" height="25" />
        <span style={{ color: "white", fontWeight: "bold" }}>
          {current.name}
        </span>
        <span style={{ marginLeft: "0.5rem" }}>
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "white" }} />
        </span>
      </button>

      {/* Dropdown list */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "#232323ff",
            border: "1px solid #767676ff",
            borderRadius: "8px",
            marginTop: "0.3rem",
            zIndex: 10,
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.6rem",
                cursor: "pointer",
                background:
                  language === lang.code ? "rgba(0,0,0,0.1)" : "transparent",
                color: "white",
              }}
            >
              <img src={lang.flag} alt={lang.name} width="25" height="25" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
