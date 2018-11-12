import axios from 'axios';

export default class ProductService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getProducts = async () => {
    const res = await axios.get(`${this.apiUrl}/products`);
    return res.data;
  };

  saveProduct = async product => {
    const res = await axios.post(`${this.apiUrl}/products`, product);
    return res.data;
  };
}
