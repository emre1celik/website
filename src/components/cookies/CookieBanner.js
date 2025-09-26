import { useEffect, useState } from "react";
import { CookieBannerWrapper, CookieButton, CookieButtonGroup, CookieOverlay } from "./CookieBannerStyles";

/**
 * A simple cookie banner component.
 * Author: Zamorock 
 * Date: 2025-09-26
 * License: MIT
 */
function CookieBanner() {
  const [visible, setVisible] = useState(false);

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
        <p>
          Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
          By clicking accept you consent to the use of all cookies.
        </p>
        <CookieButtonGroup>
          <CookieButton onClick={handleAccept}>
            Accept
          </CookieButton>
          <CookieButton onClick={handleDecline}>
            Decline
          </CookieButton>
        </CookieButtonGroup>
      </CookieBannerWrapper>
    </>
  );
}

export default CookieBanner;