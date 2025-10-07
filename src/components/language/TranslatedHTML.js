import { useTranslation } from "../../context/TranslationContext";

function TranslatedHTML({ entity }) {
  const { translate } = useTranslation();

  return <span dangerouslySetInnerHTML={{ __html: translate(entity) }} />;
}

export default TranslatedHTML;
