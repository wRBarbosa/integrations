import { Person } from "./person.interface"
export class Employer implements Person {
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
  present(): void {
    this.speak(`Olá, me chamo ${this.name} e tenho ${this.age} anos`)
    if (!this.isMinor()) {
      this.speak("Sou de maior")
    }
  }
}
