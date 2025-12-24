import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { signUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: signUpDto) {
    const existingUser = await this.userService.findByEmail(signUpDto.email);
    if (existingUser) throw new BadRequestException('user already exists');
    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    console.log(hashedPassword);
    await this.userService.create({ ...signUpDto, password: hashedPassword });
    return 'user created successfully';
  }

  async signIn(signInDto: SignInDto) {
    const existingUser = await this.userService.findByEmail(signInDto.email);
    if (!existingUser) throw new BadRequestException('invalid credentials');
    const isPassEqual = await bcrypt.compare(
      signInDto.password,
      existingUser.password,
    );
    if (!isPassEqual) throw new BadRequestException('invalid credentials');

    const payload = {
      userId: existingUser._id,
      role: existingUser.role,
    };

    const accessToken = await this.jwtService.sign(payload, {
      expiresIn: '1h',
    });
    return { accessToken };
  }

  async currentUser(userId: string) {
    const user = await this.userService.findOne(userId);
    return user;
  }
}
