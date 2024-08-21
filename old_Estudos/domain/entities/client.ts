import { Person } from "./person.interface"

export class Client implements Person {
  constructor(
    public name: string,
    public age: number,
  ) { }
  growOld(): void {
    this.age += 1
  }
  speak(text: string): void {
    console.log(text)
  }
  isMinor(): boolean {
    return this.age < 18
  }
  isOlder(person: Person): boolean {
    return this.age > person.age
  }
  order(): void {
    this.speak("Olá quero ser atendido")
  }
}
