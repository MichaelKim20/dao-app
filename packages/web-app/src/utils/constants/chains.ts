/* SUPPORTED NETWORK TYPES ================================================== */

import {infuraApiKey} from './api';

export const SUPPORTED_CHAIN_ID = [
  1, 5, 137, 1337, 2019, 2151, 80001, 42161, 421613,
] as const;
export type SupportedChainID = typeof SUPPORTED_CHAIN_ID[number];

export function isSupportedChainId(
  chainId: number
): chainId is SupportedChainID {
  return SUPPORTED_CHAIN_ID.some(id => id === chainId);
}

const SUPPORTED_NETWORKS = [
  'ethereum',
  'goerli',
  'polygon',
  'mumbai',
  'arbitrum',
  'arbitrum-test',
  'bosagora',
  'athens',
  'localhost',
] as const;

export type availableNetworks =
  | 'ethereum'
  | 'goerli'
  | 'polygon'
  | 'mumbai'
  | 'localhost';

export type SupportedNetworks =
  | typeof SUPPORTED_NETWORKS[number]
  | 'unsupported';

export function isSupportedNetwork(
  network: string
): network is SupportedNetworks {
  return SUPPORTED_NETWORKS.some(n => n === network);
}

export function toSupportedNetwork(network: string): SupportedNetworks {
  return SUPPORTED_NETWORKS.some(n => n === network)
    ? (network as SupportedNetworks)
    : 'unsupported';
}

/**
 * Get the network name with given chain id
 * @param chainId Chain id
 * @returns the name of the supported network or undefined if network is unsupported
 */
export function getSupportedNetworkByChainId(
  chainId: number
): SupportedNetworks | undefined {
  if (isSupportedChainId(chainId)) {
    return Object.entries(CHAIN_METADATA).find(
      entry => entry[1].id === chainId
    )?.[0] as SupportedNetworks;
  }
}

export type NetworkDomain = 'L1 Blockchain' | 'L2 Blockchain';

/* CHAIN DATA =============================================================== */

export type NativeTokenData = {
  name: string;
  symbol: string;
  decimals: number;
};

export type ChainData = {
  id: SupportedChainID;
  name: string;
  domain: NetworkDomain;
  testnet: boolean;
  explorer: string;
  logo: string;
  rpc: string[];
  nativeCurrency: NativeTokenData;
  etherscanApi: string;
};

export type ChainList = Record<SupportedNetworks, ChainData>;
export const CHAIN_METADATA: ChainList = {
  arbitrum: {
    id: 42161,
    name: 'Arbitrum One',
    domain: 'L2 Blockchain',
    logo: 'https://bridge.arbitrum.io/logo.png',
    explorer: 'https://arbiscan.io/',
    testnet: false,
    rpc: ['https://arb1.arbitrum.io/rpc', 'wss://arb1.arbitrum.io/ws'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    etherscanApi: 'https://api.arbiscan.io/api',
  },
  ethereum: {
    id: 1,
    name: 'Ethereum',
    domain: 'L1 Blockchain',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    explorer: 'https://etherscan.io/',
    testnet: false,
    rpc: [
      `https://mainnet.infura.io/v3/${infuraApiKey}`,
      `wss://mainnet.infura.io/ws/v3/${infuraApiKey}`,
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    etherscanApi: 'https://api.etherscan.io/api',
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    domain: 'L2 Blockchain',
    logo: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    explorer: 'https://polygonscan.com/',
    testnet: false,
    rpc: [
      `https://polygon-mainnet.infura.io/v3/${infuraApiKey}`,
      `wss://polygon-mainnet.infura.io/ws/v3/${infuraApiKey}`,
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    etherscanApi: 'https://api.polygonscan.com/api',
  },
  'arbitrum-test': {
    id: 421613,
    name: 'Arbitrum Goerli',
    domain: 'L2 Blockchain',
    logo: 'https://bridge.arbitrum.io/logo.png',
    explorer: 'https://goerli-rollup-explorer.arbitrum.io/',
    testnet: true,
    rpc: ['https://goerli-rollup.arbitrum.io/rpc'],
    nativeCurrency: {
      name: 'Goerli Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    etherscanApi: 'https://api-goerli.arbiscan.io/api',
  },
  goerli: {
    id: 5,
    name: 'Goerli',
    domain: 'L1 Blockchain',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    explorer: 'https://goerli.etherscan.io/',
    testnet: true,
    rpc: [
      `https://goerli.infura.io/v3/${infuraApiKey}`,
      `wss://goerli.infura.io/ws/v3/${infuraApiKey}`,
    ],
    nativeCurrency: {
      name: 'Goerli Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    etherscanApi: 'https://api-goerli.etherscan.io/api',
  },
  mumbai: {
    id: 80001,
    name: 'Mumbai',
    domain: 'L2 Blockchain',
    logo: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    explorer: 'https://mumbai.polygonscan.com/',
    testnet: true,
    rpc: [
      `https://polygon-mumbai.infura.io/v3/${infuraApiKey}`,
      `wss://polygon-mumbai.infura.io/ws/v3/${infuraApiKey}`,
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    etherscanApi: 'https://api-testnet.polygonscan.com/api',
  },
  bosagora: {
    id: 2151,
    name: 'Bosagora',
    domain: 'L2 Blockchain',
    logo: 'https://file.bosagora.io/bosagora.png',
    explorer: 'https://www.boascan.io/',
    testnet: true,
    rpc: ['https://mainnet.bosagora.io'],
    nativeCurrency: {
      name: 'BOA',
      symbol: 'BOA',
      decimals: 18,
    },
    etherscanApi: '',
  },
  athens: {
    id: 2019,
    name: 'Athens',
    domain: 'L2 Blockchain',
    logo: 'https://file.bosagora.io/bosagora.png',
    explorer: 'https://testnet.boascan.io/',
    testnet: true,
    rpc: ['https://testnet.bosagora.io'],
    nativeCurrency: {
      name: 'BOA',
      symbol: 'BOA',
      decimals: 18,
    },
    etherscanApi: '',
  },
  localhost: {
    id: 1337,
    name: 'Localhost',
    domain: 'L2 Blockchain',
    logo: 'https://file.bosagora.io/bosagora.png',
    explorer: '',
    testnet: true,
    rpc: ['http://localhost:8485'],
    nativeCurrency: {
      name: 'BOA',
      symbol: 'BOA',
      decimals: 18,
    },
    etherscanApi: '',
  },
  unsupported: {
    id: 1,
    name: 'Unsupported',
    domain: 'L1 Blockchain',
    logo: '',
    explorer: '',
    testnet: false,
    rpc: [],
    nativeCurrency: {
      name: '',
      symbol: '',
      decimals: 18,
    },
    etherscanApi: '',
  },
};
