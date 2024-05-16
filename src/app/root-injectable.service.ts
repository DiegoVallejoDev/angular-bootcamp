export class RootInjectableService {
  private msg: string = 'I’m a variable inside a singleton';
  public getPersistentData(): string {
    return this.msg;
  }
}
