import axios from 'axios';

class Api {
  constructor(limit = 30) {
    this.axios = axios.create({
      baseURL: 'postgres://xzjonuddurxevj:aefe177f2030598632424e77aa9a7ae93a7b6a2bc3f5cf297295fa36831dd889@ec2-34-227-120-79.compute-1.amazonaws.com:5432/d567ocracvdifk'
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