import {
    MaintenanceWrapper,
    MaintenanceContent,
} from "./MaintenanceStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

function Maintenance({ user, currentTheme, onThemeChange }) {
    const { translate } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Myra MuOnline - Maintenance | Season 20 Upgrade</title>
                <meta
                    name="description"
                    content="Myra MuOnline is currently under maintenance while we upgrade to Season 20. We’ll be back shortly."
                />
                <meta
                    name="keywords"
                    content="mu online maintenance, myra mu maintenance, season 20 upgrade"
                />
            </Helmet>

            <MaintenanceWrapper>
                <Navigation user={user} />

                <MaintenanceContent>
                    <h1><FontAwesomeIcon icon={faWrench} /> {translate("maintenance.header")}</h1>
                    <p>{translate("maintenance.message")}</p>
                </MaintenanceContent>

                <Footer
                    currentTheme={currentTheme}
                    onThemeChange={onThemeChange}
                />
            </MaintenanceWrapper>
        </>
    );
}

export default Maintenance;
