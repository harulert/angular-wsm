import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  brandName = signal('WSM')
  fullName = signal('WAVING STRINGS MUSIC')

  navFirstLink = signal('HOME')
  navSecondLink = signal('PRODUCTS')
  navThirdLink = signal('SERVICES')
  navFourthLink = signal('CONTACTS')
  navFifthLink = signal('ABOUT US')
}
