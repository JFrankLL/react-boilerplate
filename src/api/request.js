import axios from 'axios';
import queryString from 'query-string';
import config from '../config';

export default class Request {
  constructor(plural) {
    const base = [config.api.host, plural];
    this.baseUrl = base.join('/');
    this.config = {
      method: '',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  _post(endpoint, params = null, headers = null) {
    return this._request(this.baseUrl + endpoint, 'POST', params, {}, headers);
  }

  _get(endpoint, params = null, query = {}, headers = null) {
    return this._request(this.baseUrl + endpoint, 'GET', params, query, headers);
  }

  _delete(endpoint, params, headers = null) {
    return this._request(this.baseUrl + endpoint, 'DELETE', params, {}, headers);
  }

  _put(endpoint, id, params, headers = null) {
    return this._request(this.baseUrl + endpoint, 'PUT', { id, params }, {}, headers);
  }

  _patch(endpoint, id, params, headers = null) {
    return this._request(this.baseUrl + endpoint, 'PATCH', { id, params }, {}, headers);
  }

  _request(url, method, params = null, query = {}, headers = null) {
    this.config.method = method;
    this.config.url = url;

    // const accessToken = cookies.get('accessToken'); // TODO: refresh session token
    // const { jwtToken } = accessToken;

    // if (jwtToken) {
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    // }

    if (headers) {
      this.config.headers = { ...this.config.headers, ...headers };
    }

    switch (method) {
      case 'POST':
        this.config.data = params;
        break;
      case 'DELETE':
        this.config.url = `${this.config.url}/${params}`;
        break;
      case 'PUT':
      case 'PATCH':
        this.config.url = `${this.config.url}/${params.id}`;
        this.config.data = params;
        break;
      default:
        break;
    }

    const stringifiedQuery = queryString.stringify(query);
    if (stringifiedQuery.length) {
      this.config.url = `${this.config.url}?${stringifiedQuery}`;
    }

    // Return axios Promise
    return axios(this.config);
  }
}
