export interface Person {
  name: string
  age: number
  growOld(): void
  speak(text: string): void
  isMinor(): boolean
  isOlder(person: Person): boolean
}