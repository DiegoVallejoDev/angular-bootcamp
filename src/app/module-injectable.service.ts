import { Injectable } from '@angular/core';

@Injectable()
export class ModuleInjectableService {
  private getName() {
    return 'Hello from ModuleInjectableService';
  }
}
