import { NgComponentOutlet } from '@angular/common';
import { Component, ElementRef, EnvironmentInjector, OnInit, ViewContainerRef, computed, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import LoadMeComponent from './load-me/load-me.component';
import { LoadMe2Component } from './load-me2/load-me2.component';
import { LoadMe3Component } from './load-me3/load-me3.component';


const availableComponents = [
  { component: LoadMeComponent,  inputs: { myInput: 'foo' }},
  { component: LoadMe2Component, inputs: { myInput: 'bar' }},
  { component: LoadMe3Component, inputs: { myInput: 'foo-bar' }},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-components-demo';

  currentComponentIndex = signal(0);
  currentComponent = computed(() => availableComponents[this.currentComponentIndex()]);

  // ---

  ref = inject(ViewContainerRef);
  envInjector = inject(EnvironmentInjector);

  hostElement = viewChild.required<ElementRef>('component-container');

  doCreateComponent() {

    // siehe https://v17.angular.io/api/core/createComponent
    const comp = this.ref.createComponent(LoadMeComponent, {
      environmentInjector: this.envInjector,
    });



    comp.setInput('title', 'Inputs with createComponent');
  }
}
