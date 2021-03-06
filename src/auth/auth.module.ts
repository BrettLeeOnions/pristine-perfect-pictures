import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { from } from 'rxjs';
require('dotenv').config();

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: process.env.SECRET,
    signOptions: { expiresIn: '259200s' },
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
