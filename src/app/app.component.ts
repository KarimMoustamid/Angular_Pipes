import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;

    onNameChange($event: Event) {
        this.name = ($event.target as HTMLInputElement).value;
    }
}
