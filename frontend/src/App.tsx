import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';
import ReportPage from './components/ReportPage';

const keycloakConfig: KeycloakConfig = {
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM || "",
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || ""
};

const keycloakInitOptions: KeycloakInitOptions = {
    onLoad: 'check-sso',
    pkceMethod: 'S256',
    checkLoginIframe: false
}

const keycloak = new Keycloak(keycloakConfig);

// https://stackoverflow.com/questions/75256010/react-keycloak-keeps-refreshing
const App: React.FC = () => {
    return (
        // <ReactKeycloakProvider authClient={keycloak}> 
        <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakInitOptions}>
            <div className="App">
                <React.StrictMode>
                    <ReportPage />
                </React.StrictMode>
            </div>
        </ReactKeycloakProvider >
    );
};

export default App;