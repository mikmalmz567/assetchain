import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  async register(dto: {
    name: string;
    email: string;
    phone?: string;
    password: string;
    role: 'INVESTOR' | 'UMKM';
  }) {
    const existing = await prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException('Email sudah terdaftar.');

    const hash = await bcrypt.hash(dto.password, 10);
    const user = await prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: hash,
        role: dto.role,
      },
    });

    return { message: 'Akun berhasil dibuat', userId: user.id };
  }

  async login(dto: { email: string; password: string }) {
    const user = await prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !user.passwordHash) throw new UnauthorizedException('Email atau password salah.');

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Email atau password salah.');

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'dev_secret',
      { expiresIn: '7d' },
    );

    return {
      token,
      user: { id: user.id, email: user.email, role: user.role },
    };
  }
}
