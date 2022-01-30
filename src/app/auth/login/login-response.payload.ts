export interface LoginResponse
{
    authentiacationToken: string;
    refreshToken: string;
    expiresAt: Date;
    username: string;
}