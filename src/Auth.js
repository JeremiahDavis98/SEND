class Auth {
  async login(username, password) {
    const reqOptions = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ 'user' : username, 'pass' : password})
    }

    const response = await fetch('/api/login', reqOptions)
    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem('access', data.access_token);
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
      localStorage.setItem('access_token', data.access_token);
    }
    return data;
  }

  isAuthenticated() {
    return localStorage.getItem('access_token') != null;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
