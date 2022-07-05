import axios from 'axios';

class Api {
  constructor(limit = 30) {
    this.axios = axios.create({
      baseURL: ''
    });
  };

  async getCharacters(page = 1) {
    const { data } = await this.axios.get(`/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=${this.limit}&offset=${this.limit * (page - 1)}`);

    return data;
  };

  async getCharacter(id) {
    const { data } = await this.axios.get(`/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);

    return data;
  };
}

export default new Api();