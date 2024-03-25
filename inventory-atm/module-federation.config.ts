import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'inventory-atm',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
