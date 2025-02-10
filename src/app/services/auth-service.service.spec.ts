import { TestBed } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthServiceService', () => {
  let service: AuthServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
         TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [AuthServiceService]
       });
       service = TestBed.inject(AuthServiceService);
       httpMock = TestBed.inject(HttpTestingController);
      });
    
       afterEach(() => {
         httpMock.verify(); // Ensure no pending HTTP requests are left
       });
    
      it('should make a POST request for signIn and return the response', () => {
        const mockResponse = { token: 'fake-jwt-token' };
        const userData = { email: 'test@example.com', password: 'password123' };
    
        service.signIn(userData).subscribe((response) => {
           expect(response).toEqual(mockResponse); // Assert the response matches the mock response
        });
    
         // Expectation for the outgoing HTTP request
         const req = httpMock.expectOne('http://bussinesshub.runasp.net/api/Account/api/Account/Login');
         expect(req.request.method).toBe('POST'); // Assert the request is POST
         expect(req.request.body).toEqual(userData); // Assert the request body matches input data
        req.flush(mockResponse); // Respond with the mock response
       });
});
// import { TestBed } from '@angular/core/testing';
// import { AuthServiceService } from './auth-service.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


// describe('AuthServiceService', () => {
//   let service: AuthServiceService;
//   

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [AuthServiceService]
//     });
//     service = TestBed.inject(AuthServiceService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify(); // Ensure no pending HTTP requests are left
//   });

//   it('should make a POST request for signIn and return the response', () => {
//     const mockResponse = { token: 'fake-jwt-token' };
//     const userData = { email: 'test@example.com', password: 'password123' };

//     service.signIn(userData).subscribe((response) => {
//       expect(response).toEqual(mockResponse); // Assert the response matches the mock response
//     });

//     // Expectation for the outgoing HTTP request
//     const req = httpMock.expectOne('http://bussinesshub.runasp.net/api/Account/api/Account/Login');
//     expect(req.request.method).toBe('POST'); // Assert the request is POST
//     expect(req.request.body).toEqual(userData); // Assert the request body matches input data
//     req.flush(mockResponse); // Respond with the mock response
//   });
// });
