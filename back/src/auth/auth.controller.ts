import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    
    // @Post("register")
    // register(@Body() registerDto: RegisterDTO) {
    //     return this.authService.register(registerDto);
    // }
    
    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
    
    @ApiBearerAuth('access-token')
    @ApiUnauthorizedResponse({description:'Usuario no autorizado'})
    @UseGuards(AuthGuard)
    @Get('profile')
    profile(@Request() req) {
        return req.user;
    }
}
