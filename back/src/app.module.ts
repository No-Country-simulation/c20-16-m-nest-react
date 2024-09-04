import { ServeStaticModule } from '@nestjs/serve-static';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { RedirectMiddleware } from './middleware/redirect.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

// Aplicacion App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Origen de Datos
import typeOrmConfig from './config/typeorm';

// Modulos
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.modules';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdoptanteModule } from './adoptante/adoptante.module';
import { RefugiosModule } from './refugios/refugios.module';
import { RescatistaModule } from './rescatista/rescatista.module';
import { AnimalesModule } from './animales/animales.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, 'html'),
    //   serveRoot: '/html',
    // }),
    UserModule,
        FilesModule,
        AuthModule,
        AdoptanteModule,
        RefugiosModule,
        RescatistaModule,
        AnimalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [typeOrmConfig],
//     }),
//     TypeOrmModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) =>
//         configService.get('typeorm'),
//     }),,ServeStaticModule.forRoot(
//       {
//         rootPath: join(__dirname, 'html'),
//         serveRoot: '/html',
//       },
//       {
//         rootPath: join(__dirname, '..', 'uploads'),
//         serveRoot: '/uploads' // Ruta del directorio de carga de las imágenes
//       },
//     ),
//     UserModule,
//     FilesModule,
//     AuthModule,
//     AdoptanteModule,
//     RefugiosModule,
//     RescatistaModule,
//     AnimalesModule
    
    
//   ],
//   controllers: [AppController],
//   providers: [AppService],
//   exports: [TypeOrmModule]
// })

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(RedirectMiddleware)
//       .forRoutes({ path: '/', method: RequestMethod.ALL }); // Aplica el middleware a todas las rutas
//   }
// }
