class AuthService {
  constructor() {
    this.logged = false;
  }

  isLogged = () => {
    const luck = Math.random(); // Simulates getting a session
    this.logged = luck < 0.5;
    return this.logged;
  };

  signIn = () => {
    const luck = Math.random(); // Simulates getting a session
    this.logged = luck > 0.5;
    return this.logged;
  };

  signOut = () => {
    this.logged = false;
  };
}

const auth = new AuthService();

export default auth;
