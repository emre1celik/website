import { useTranslation } from "../../context/TranslationContext";
import { FooterWrapper, ThemeSwitcher, ThemeButton } from "./FooterStyles";
import { greenTheme, blueTheme, redTheme } from "../../styles/ThemeStyles";
import { useTheme } from "styled-components";

function Footer({ onThemeChange }) {
  const { translate } = useTranslation();
  const currentTheme = useTheme(); // ✅ from ThemeProvider

  return (
    <FooterWrapper>
      <ThemeSwitcher>
        <ThemeButton
          $color={greenTheme.primary}
          className={currentTheme.name === "green" ? "active" : ""}
          onClick={() => onThemeChange(greenTheme)}
        />
        <ThemeButton
          $color={blueTheme.primary}
          className={currentTheme.name === "blue" ? "active" : ""}
          onClick={() => onThemeChange(blueTheme)}
        />
        <ThemeButton
          $color={redTheme.primary}
          className={currentTheme.name === "red" ? "active" : ""}
          onClick={() => onThemeChange(redTheme)}
        />
      </ThemeSwitcher>

      <p>{translate("footer.rights")}</p>
    </FooterWrapper>
  );
}

export default Footer;
