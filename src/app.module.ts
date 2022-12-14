import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [HealthModule, PrometheusModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
