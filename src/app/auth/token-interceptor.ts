import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./shared/auth.service";


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor
{
    constructor(public authService: AuthService)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        const jwtToken = this.authService.getJwtToken();

        if(jwtToken)
        {
            this.addToken(req, jwtToken);
        }

        return next.handle(req);
    }

    addToken(req: HttpRequest<any>, jwtToken: any) 
    {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer' + jwtToken)
        })
    }
}