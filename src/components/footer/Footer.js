import { useTranslation } from "../../context/TranslationContext";
import { FooterWrapper } from "./FooterStyles";

function Footer() {
  const { translate } = useTranslation();
  return (
    <FooterWrapper>
      <p>{translate("footer.rights")}</p>
    </FooterWrapper>
  );
}

export default Footer;
