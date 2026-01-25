import React, { useState, useEffect, useRef } from "react";
import { chatbot } from "../../config/chatbot";
import { useTranslation } from "../../context/TranslationContext";
import {
  ChatHeader,
  ChatWrapper,
  Input,
  InputWrapper,
  Messages,
  Send,
  MessageRow,
  MessageLabel,
  MessageText,
  MessageTime,
} from "./ChatbotStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faInfoCircle,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { ChatbotAnimations } from "./ChatbotStyles";

const HELPERS = [
  { name: "Elf Lala", icon: faMessage },
  { name: "Chaos Goblin", icon: faMessage },
  { name: "Marlon", icon: faMessage },
];

function findAnswer(text, translate, language) {
  const q = text.toLowerCase();

  for (const entry of chatbot) {
    const keywords = Array.isArray(entry.keywords)
      ? entry.keywords
      : entry.keywords?.[language] || entry.keywords?.en || [];

    if (keywords.some((k) => q.includes(String(k).toLowerCase()))) {
      return {
        text:
          translate(entry.answerKey) !== entry.answerKey
            ? translate(entry.answerKey)
            : translate("chatbot.fallback"),
        links: entry.links || [],
      };
    }
  }
  return {
    text: translate("chatbot.fallback"),
    links: [
      {
        labelKey: "chatbot.links.fallback",
        to: "https://discord.gg/EceQbCVgSy",
      },
    ],
  };
}

export default function Chatbot() {
  const { translate, language } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [helper] = useState(
    () => HELPERS[Math.floor(Math.random() * HELPERS.length)]
  );

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Welcome message
  useEffect(() => {
    setMessages([
      {
        text: translate("chatbot.welcome"),
        bot: true,
        time: new Date(),
      },
    ]);
  }, [language, translate]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userTime = new Date();
    const userText = input;
    setInput("");

    setMessages((m) => [...m, { text: userText, bot: false, time: userTime }]);

    setIsTyping(true);

    const response = findAnswer(userText, translate, language);

    // Simulated typing delay (natural feel)
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        {
          text: response.text,
          links: response.links,
          bot: true,
          time: new Date(),
        },
      ]);
    }, 2000 + Math.random() * 600);
  };

  return (
    <ChatWrapper>
      <ChatbotAnimations />
      <ChatHeader>
        <FontAwesomeIcon icon={faMessage} style={{ marginRight: "6px" }} />
        {translate("chatbot.title")}
        <span style={{ marginLeft: "6px", opacity: 0.75 }}>
          · {helper.name}
        </span>
      </ChatHeader>

      <Messages>
        {messages.map((m, i) => (
          <MessageRow key={i}>
            <MessageLabel bot={m.bot}>
              <FontAwesomeIcon
                icon={m.bot ? helper.icon : faUser}
                style={{ marginRight: "6px" }}
              />
              {m.bot ? helper.name : translate("chatbot.you")}
              {m.time && (
                <MessageTime>
                  ·{" "}
                  {m.time.toLocaleTimeString(language, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </MessageTime>
              )}
            </MessageLabel>

            <MessageText bot={m.bot}>{m.text}</MessageText>

            {m.bot && m.links?.length > 0 && (
              <div
                style={{
                  marginTop: "6px",
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {m.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: "1px solid #555",
                      color: "white",
                      textDecoration: "none",
                      opacity: 0.85,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      style={{ marginRight: "4px" }}
                    />
                    {translate(link.labelKey)}
                  </a>
                ))}
              </div>
            )}
          </MessageRow>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <MessageRow>
            <MessageLabel bot>
              <FontAwesomeIcon
                icon={helper.icon}
                style={{ marginRight: "6px" }}
              />
              {helper.name}
              <MessageTime> · </MessageTime>
            </MessageLabel>

            <MessageText bot>
              <span className="typing-dots">{translate("chatbot.typing")}</span>
            </MessageText>
          </MessageRow>
        )}

        <div ref={messagesEndRef} />
      </Messages>

      <InputWrapper onSubmit={sendMessage}>
        <Input
          placeholder={translate("chatbot.placeholder") || "Ask a question..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Send type="submit">{translate("chatbot.send") || "Send"}</Send>
      </InputWrapper>
    </ChatWrapper>
  );
}
