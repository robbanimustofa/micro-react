import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run atm-mfe:serve',
        production: 'nx run atm-mfe:preview',
      },
      ciWebServerCommand: 'nx run atm-mfe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
