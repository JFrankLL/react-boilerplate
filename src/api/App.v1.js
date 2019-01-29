import Request from './request';

class App extends Request {
  constructor() {
    super('todos');
  }

  get(n = '') {
    return this._get(`\\${n}`, null, { userId: 2, completed: true });
  }
}

const app = new App();

export default app;
