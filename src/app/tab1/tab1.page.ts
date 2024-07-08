import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajout de CommonModule
import { FormsModule } from '@angular/forms'; // Ajout de FormsModule si nécessaire
import { IonicModule } from '@ionic/angular'; // Ajout de IonicModule
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  strings: string[] = ['orange', 'apple', 'banana', 'grape'];
  sortedStrings: string[] = [];

  constructor() {}

  ngOnInit() {
    this.sortedStrings = this.sortStrings(this.strings);
    console.log(this.sortedStrings);
  }

  sortStrings(strings: string[]): string[] {
    return strings.sort((a, b) => b.localeCompare(a));
    console.log(this.sortedStrings)
  }
}