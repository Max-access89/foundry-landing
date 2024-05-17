// import { config } from "dotenv";

// config();

export const variables = {
  // LOGIC_APP_URL: String(process.env.LOGIC_APP_URL),
  // ERP_BASEURL: String(process.env.ERP_BASEURL),

  // PROSPECTURL: String(process.env.REACT_APP_PROSPECTURL),

  // EMAILURL: String(process.env.REACT_APP_EMAILURL),

  FOUNDING_LANDING_API_URL: "http://localhost:7071/api/landing/create/prospect",
  EMAILURL:
    "https://landing-page-logic-app.azurewebsites.net:443/api/book-demo-workflow/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=DNyHolHBipnt3sDgppkNEZ4799I1-L_ELNQIt5_RhBc",

  ENVIRONMENT: "dev",

  // AUTH0
  AUTH0_DOMAIN: String(process.env.AUTH0_DOMAIN),
  AUTH0_SPA_CLIENT_ID: String(process.env.AUTH0_SPA_CLIENT_ID),
  AUTH0_SPA_CLIENT_SECRET: String(process.env.AUTH0_SPA_CLIENT_SECRET),
  AUTH0_SPA_AUDIENCE: String(process.env.AUTH0_SPA_AUDIENCE),
  AUTH0_API_CLIENT_ID: String(process.env.AUTH0_API_CLIENT_ID),
  AUTH0_API_ID: String(process.env.AUTH0_API_ID),
  AUTH0_API_CLIENT_SECRET: String(process.env.AUTH0_API_CLIENT_SECRET),
  AUTH0_API_AUDIENCE: String(process.env.AUTH0_API_AUDIENCE),
  AUTH0_CONNECTION: String(process.env.AUTH0_CONNECTION),
  AUTH0_CONNECTION_ID: String(process.env.AUTH0_CONNECTION_ID),

  THIRD_PARTY_SERVICES: String(process.env.THIRD_PARTY_SERVICES),
  ENGINE_API: String(process.env.ENGINE_API),
  // ENVIRONMENT: String(process.env.ENVIRONMENT),

  ERP_APIKEY: String(process.env.ERP_APIKEY),
  ERP_APISECRET: String(process.env.ERP_APISECRET),
};
