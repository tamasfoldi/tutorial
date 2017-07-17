import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService]
    });
  });

  afterEach(inject([HttpTestingController], (mockHttp: HttpTestingController) => {
    mockHttp.verify();
  }));

  it('expects a GET request', inject([HttpClient, HttpTestingController, HttpClientService],
    (http: HttpClient, httpMock: HttpTestingController, httpClientService: HttpClientService) => {
      httpClientService.getData()
        .subscribe(data => expect(data['name']).toEqual('Test Data'));

      const req = httpMock.expectOne('http://localhost:8080/Kartyarendszer/api/CardRequest');
      expect(req.request.method).toEqual('GET');

      req.flush({ name: 'Test Data' });
    }));
});
