import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {ConvertPipe} from "./convert.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  miles!: number;

  onNameChange($event: Event) {
    this.name = ($event.target as HTMLInputElement).value;
  }

  onDateChange($event: Event) {
    this.date = ($event.target as HTMLInputElement).value;
  }

  onAmountChange($event: Event){
    this.amount = parseFloat(($event.target as HTMLInputElement).value);
  }

  onMilesChange($event: Event){
    this.miles = parseFloat(($event.target as HTMLInputElement).value);
  }
}
