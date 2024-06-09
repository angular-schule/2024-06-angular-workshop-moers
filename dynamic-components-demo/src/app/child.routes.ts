import { Routes } from "@angular/router";
import { LoadMe2Component } from "./load-me2/load-me2.component";
import { LoadMe3Component } from "./load-me3/load-me3.component";

const childRoutes: Routes = [
  { path: '2', component: LoadMe2Component },
  { path: '3', component: LoadMe3Component }
];

export default childRoutes;
