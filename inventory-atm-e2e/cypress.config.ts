import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run inventory-atm:serve',
        production: 'nx run inventory-atm:serve:production',
      },
      ciWebServerCommand: 'nx run inventory-atm:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
