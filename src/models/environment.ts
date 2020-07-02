import { Api } from '../services';

/**
 * The environment is a place where services and shared dependencies between
 * models live. They are made available to every model via dependency injection.
 */
export class Environment {
  /**
   * Our api.
   */
  api: Api

  constructor() {
    this.api = new Api();
  }
}
