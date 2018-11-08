import axios from 'axios';

export default class ProductService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getProducts = async () => {
    try {
      const res = await axios.get(`${this.apiUrl}/products`);
      console.log(res.data);
      return res.data;
    } catch (ex) {
      console.log(ex);
    }
  };
}
