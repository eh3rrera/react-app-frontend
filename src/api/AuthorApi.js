import SERVER from './serverUrl';

const SERVER_URL = `${SERVER}/authors`;

class AuthorApi {
  static getAllAuthors() {
    return fetch(SERVER_URL).then(response => response.json());
  }
}

export default AuthorApi;
