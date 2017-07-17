import { Component } from '@angular/core';
import { HttpClientService } from './services/http-client.service';
import 'rxjs/add/operator/map';
import { ProgressInterceptor } from './services/progress.interceptor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpClientService: HttpClientService, private interceptor: ProgressInterceptor) {
    this.httpClientService.getData()
      .map(datas => datas
        .map(data => data.id))
      .subscribe(ids => console.log(ids));

    this.interceptor.progress$.subscribe(a => console.log(a));
  }
}
