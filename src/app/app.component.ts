import { RouterModule } from '@angular/router'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './view/app.component.html',
  styleUrls: ['./view/app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
