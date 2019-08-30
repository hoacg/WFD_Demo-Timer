import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-timer';

  isDisabledTimer = false;

  toggleTimer() {
    this.isDisabledTimer = !this.isDisabledTimer;
  }

  showWarning() {
    window.alert("Timer đã hoàn thành");
  }
}
