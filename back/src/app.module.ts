import { ServeStaticModule } from '@nestjs/serve-static';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { RedirectMiddleware } from './redirect.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

// Aplicacion App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Origen de Datos
import { dataSourceOptions } from "./db/data-source";

// Modulos
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, 'html'),
        serveRoot: '/html',
      },
      {
        rootPath: join(__dirname, '..', 'uploads'),
        serveRoot: '/uploads' // Ruta del directorio de carga de las imágenes
      },
    ),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RedirectMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.ALL }); // Aplica el middleware a todas las rutas
  }
}
