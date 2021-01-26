/* eslint-disable max-len */

export const port = process.env.PORT || 3001;
// export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const host = process.env.WEBSITE_HOSTNAME || 'https://appsync-server.tyltgoapp.com';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const common = {
  api: {
    URL: process.env.PROD_SERVER_URL || 'https://appsync-server.tyltgoapp.com', // production code-push-server address
    devURL: process.env.DEV_SERVER_URL || 'https://appsync-server.tyltgoapp.com', // development code-push-server address
  },
};
