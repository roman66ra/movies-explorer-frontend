const moviesApiSetting = {
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
    }
  
    _checkResponseStatus(response, method) {
      return response.ok
        ? response.json()
        : Promise.reject(`Ошибка ${response.status}`);
    }
  
    getAllMovies() {
      return fetch(this._baseUrl, {
        headers: this.headers,
      }).then((res) => {
        return this._checkResponseStatus(res);
      });
    }
  }
  
  export const moviesApi = new MoviesApi(moviesApiSetting);