import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RedirectMiddleware } from './redirect.middleware';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';

async function bootstrap() {
  const interfaces = os.networkInterfaces();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  let port = process.env.PORT || 3010
  let host = 'localhost'
  
  // Obtengo la IP de la placa de red

  for (const interfaceName of Object.keys(interfaces)) {
    for (const interfaceInfo of interfaces[interfaceName]) {
      if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
        host = interfaceInfo.address;
        break;
      }
    }
  }

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false
    })
  )

  // Obtener los orígenes permitidos desde las variables de entorno
  let allowedOrigins = configService.get<string>('CORS_ALLOWED_ORIGINS')?.split(',');
  allowedOrigins.push(`http://${host}:${port}`)

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS no permitido para este origen'));
      }
    },
    // origin:['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });

  // Aplica el middleware globalmente
  app.use(new RedirectMiddleware().use);

  // Configuracionn de Documentador SWAGGER 
  function Swagger() {
    const config = new DocumentBuilder()
      .setTitle('Patitas Api')
      .setDescription('Api de Sitio de Patitas')
      .setVersion('1.0')
      .addServer(`http://${host}:${port}/`, 'Ambiente Local')
      .addServer('https://staging.yourapi.com/', 'Staging')
      .addServer('https://production.yourapi.com/', 'Production')
      .addTag('App Patitas', 'Endpoints Basicos de la Api')
      .addTag('Authentication', 'Endpoints de Autenticacion')
      .addTag('Users', 'Endpoints de Manejo de Entidad Usuarios')
      .addTag('Adoption', 'Endpoints de Entidad de Adopciones')
      .addTag('Animal', 'Endpoints de Entidad Animales')
      .addTag('Animal Shelter', 'Endpoints de Entidad Refugios de Animales')
      .addTag('Animal Types', 'Endpoints de Entidad Tipos de Animales')
      .addTag('Animal Features', 'Endpoints de Entidad Caracteristicas de Animales')
      .addTag('Report State', 'Endpoints de Entidad Estado de Reporte de Animales')
      .addTag('Donation', 'Endpoints de Entidad de Donaciones')
      .addBearerAuth({
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'JWT', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'

      },
        'access-token',)
      // .addGlobalParameters({
      //   name: 'id',
      //   in: 'query',
      //   description:''
      // })
      .build();

    const document = SwaggerModule.createDocument(app, config);
    const theme = new SwaggerTheme();
    const options = {
      explorer: true,
      customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK_MONOKAI),
      securityRequirements: [{ bearer: [] }],
    };
    SwaggerModule.setup('api/v1/docs', app, document, options);
  }

  Swagger();

  // Inicializo la App, si el puerto fuese 0 (cero), se le asigna un puerto de forma automatica.
  await app.listen(port);

  // A donde se ejecuta
  console.log(`Ejecutandose en, http://${host}:${port}`);
  console.info('CORS ALLOWED', allowedOrigins)
}
bootstrap();
