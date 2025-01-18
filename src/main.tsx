import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import './index.css';
import App from './App';
import keycloak from './keycloak';
import { CookieService } from './util/cookie.utils';

const rootElement = document.getElementById('root');

// Handle Keycloak tokens
const onKeycloakTokens = (tokens: any) => {
  if (tokens.token) {
    // Store access token
    CookieService.setAccessToken(tokens.token);

    // If a refresh token is provided, store it
    if (tokens.refreshToken) {
      CookieService.setRefreshToken(tokens.refreshToken);
    }

    // Extract user info from the ID token if available
    if (keycloak.idTokenParsed) {
      const { name, email, sub, given_name, family_name, preferred_username } =
        keycloak.idTokenParsed;

      CookieService.setUserProfile({
        name,
        email,
        sub,
        given_name,
        family_name,
        preferred_username,
      });
    }
  }
};

// Handle Keycloak events
const onKeycloakEvent = (event: string, error?: any) => {
  if (event === 'onAuthLogout') {
    // Clear cookies on logout
    CookieService.clearAll();
  } else if (error) {
    console.error('Keycloak Event Error:', event, error);
  }
};

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: 'check-sso', // Checks if user is logged in, without forcing login
        redirectUri: window.location.origin, // Redirect after login
        checkLoginIframe: false, // Disable iframe checks
      }}
      onTokens={onKeycloakTokens} // Hook for handling tokens
      onEvent={onKeycloakEvent} // Hook for handling events
    >
      <App />
    </ReactKeycloakProvider>
  );
} else {
  console.error('Root element not found');
}
