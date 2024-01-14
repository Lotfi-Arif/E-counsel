import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './src/app/app.module';

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    // app.enableVersioning({
    //     type: VersioningType.URI,
    //     prefix: "v",
    // })
    return app;
  },
  swagger: {
    output: 'dist/swagger.json',
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server',
      },
    ],
  },
};
export default NESTIA_CONFIG;
