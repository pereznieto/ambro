import auth0 from 'auth0-js';

const auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
const auth0_client_id = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

class Auth {
  private auth0: auth0.WebAuth;
  private authFlag: string;
  private idToken: string;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: auth0_domain,
      clientID: auth0_client_id,
      redirectUri: 'http://localhost:3000/callback',
      audience: `https://${auth0_domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid email'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.silentAuth = this.silentAuth.bind(this);
    this.authFlag = 'isLoggedIn';
    this.idToken = '';
  }

  login() {
    this.auth0.authorize();
  }

  getIdToken() {
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  setSession(authResult: any) {
    this.idToken = authResult.idToken;
    localStorage.setItem(this.authFlag, JSON.stringify(true));
  }

  logout() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    this.auth0.logout({
      returnTo: 'http://localhost:3000',
      clientID: auth0_client_id,
    });
  }

  silentAuth() {
    if (this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  }

  isAuthenticated() {
    const flag = localStorage.getItem(this.authFlag);
    return flag && JSON.parse(flag);
  }
}

const auth = new Auth();

export default auth;
