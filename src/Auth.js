class Auth() {
  async login(username, password) {
    const reqOptions = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ 'user' : username, 'pass' : password})
    }

    const data = await fetch('/api/login', reqOptions).json();
    access_token = data.access_token;

    if (data.acess_token) {
      localStorage.setItem('access', access_token);
      )
    }
    return data;
  }

  async register(username, password) {
    const reqOptions = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({'user' : username, 'pass' : password})
    }
    const data = await fetch('/api/register', reqOptions).json();

    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    }
    return data;
  }

  isAuthenticated() {
    return localStorage.getItem('access') != null;
  }

  logout() {
    localStorage.removeItem('access');
  }
}
