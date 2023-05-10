import {SupportedNetworks} from './chains';

type SubgraphNetworkUrl = Record<SupportedNetworks, string | undefined>;

export const FEEDBACK_FORM =
  'https://aragonassociation.atlassian.net/servicedesk/customer/portal/3';

export const SUBGRAPH_API_URL: SubgraphNetworkUrl = {
  //TODO: This is a temporary subgraph for ethereum should be replace with the right one
  ethereum:
    'https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-mainnet/api',
  goerli:
    'https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-goerli/version/v1.0.0/api',
  polygon:
    'https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-polygon/api',
  mumbai:
    'https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-mumbai/api',
  arbitrum: undefined,
  'arbitrum-test': undefined,
  mainnet:
    'https://mainnet-subgraph-api.dao.bosagora.org/subgraphs/name/aragon/osx-mainnet',
  testnet:
    'https://athens-subgraph-api.dao.bosagora.org/subgraphs/name/aragon/osx-athens',
  localhost: undefined,
  unsupported: undefined,
};

export const BASE_URL = 'https://api.coingecko.com/api/v3';
export const DEFAULT_CURRENCY = 'usd';

export const ARAGON_RPC = 'mainnet.bosagora.org';

type AlchemyApiKeys = Record<SupportedNetworks, string | undefined>;
export const alchemyApiKeys: AlchemyApiKeys = {
  arbitrum: undefined,
  'arbitrum-test': undefined,
  ethereum: undefined,
  goerli: undefined,
  polygon: import.meta.env.VITE_ALCHEMY_KEY_POLYGON_MAINNET as string,
  mumbai: import.meta.env.VITE_ALCHEMY_KEY_POLYGON_MUMBAI as string,
  mainnet: undefined,
  testnet: undefined,
  localhost: undefined,
  unsupported: undefined,
};

export const infuraApiKey = import.meta.env
  .VITE_INFURA_MAINNET_PROJECT_ID as string;

export const IPFS_ENDPOINT_TEST =
  'https://athens-ipfs-api.dao.bosagora.org/api/v0';
export const IPFS_ENDPOINT_MAIN_0 =
  'https://mainnet-ipfs-api-0.dao.bosagora.org/api/v0';
export const IPFS_ENDPOINT_MAIN_1 =
  'https://mainnet-ipfs-api-1.dao.bosagora.org/api/v0';

// using BOSagora node for avatar resolving
export const AVATAR_IPFS_URL =
  'https://athens-ipfs-gateway.dao.bosagora.org/ipfs';

// Coingecko Api specific asset platform keys
export const ASSET_PLATFORMS: Record<SupportedNetworks, string | null> = {
  arbitrum: 'arbitrum-one',
  'arbitrum-test': null,
  ethereum: 'ethereum',
  goerli: null,
  polygon: 'polygon-pos',
  mumbai: null,
  mainnet: null,
  testnet: null,
  localhost: null,
  unsupported: null,
};

export const NATIVE_TOKEN_ID = {
  default: 'ethereum',
  polygon: 'matic-network',
  bosagora: 'boa',
};
