import packageData from '../../package.json';

export const ENV = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  NODE_ENV: import.meta.env.VITE_APP_NODE_ENV,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ENDPOINT: import.meta.env.VITE_APP_ENDPOINT,
  VERSION: packageData.version,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  PRIMARY_PARTY_NUMBER: parseInt(import.meta.env.VITE_APP_PARTY_PRIMARY_NUMBER),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  PRIMARY_CANDIDATE_NUMBER: parseInt(import.meta.env.VITE_APP_CANDIDATE_PRIMARY_NUMBER),
};
