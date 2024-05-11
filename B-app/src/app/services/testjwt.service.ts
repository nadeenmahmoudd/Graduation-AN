import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TestjwtService {

  constructor() { }

  getUserIdFromToken(token: string): string | null {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken ? decodedToken.sub : null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
