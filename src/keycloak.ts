import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'general_project',
  clientId: 'frontend-client',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
