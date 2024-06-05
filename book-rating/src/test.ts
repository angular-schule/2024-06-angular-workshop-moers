const x = 2;

// favour composition over inheritance!
export class Test {

  constructor(public zahl: number) {
    console.log('Test 😎!', this.zahl);
  }
}
