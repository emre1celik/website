import { useEffect, useState } from "react";
import {
  CookieBannerWrapper,
  CookieButton,
  CookieButtonGroup,
  CookieOverlay,
} from "./CookieBannerStyles";
import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "../../context/TranslationContext";

/**
 * A simple cookie banner component.
 * Author: Zamorock
 * Date: 2025-09-26
 * License: MIT
 */
function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { translate } = useTranslation();

  /**
   * If the user clicks the accept button, set a cookie in local storage and hide the banner.
   */
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  /**
   * Handle the accept button click, and set the cookie.
   */
  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  /**
   * Handle the decline button click, and set the cookie.
   */
  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <CookieOverlay />
      <CookieBannerWrapper>
        <LanguageSelector />
        <p>{translate("cookie.message")}</p>
        <CookieButtonGroup>
          <CookieButton onClick={handleAccept}>
            {translate("cookie.accept")}
          </CookieButton>
          <CookieButton onClick={handleDecline}>
            {translate("cookie.decline")}
          </CookieButton>
        </CookieButtonGroup>
      </CookieBannerWrapper>
    </>
  );
}

export default CookieBanner;
