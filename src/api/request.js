import axios from 'axios';
import queryString from 'query-string';

const config = {
  api: {
    host: 'https://jsonplaceholder.typicode.com',
  },
};

export default class Request {
  constructor(plural) {
    const base = [config.api.host, plural];
    this.baseUrl = base.join('/');
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
    return this._request(this.baseUrl + endpoint, 'PUT', { id: id, params: params }, {}, headers);
  }

  _patch(endpoint, id, params, headers = null) {
    return this._request(this.baseUrl + endpoint, 'PATCH', { id: id, params: params }, {}, headers);
  }

  _request(url, method, params = null, query = {}, headers = null) {
    let config = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    // const accessToken = cookies.get('accessToken'); // TODO: refresh session token
    // const { jwtToken } = accessToken;

    // if (jwtToken) {
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    // }

    if (headers) {
      config.headers = { ...config.headers, ...headers };
    }

    if (method === 'POST') {
      config.data = params;
    }

    if (method === 'DELETE') {
      url += '/' + params;
    }

    if (method === 'PUT' || method === 'PATCH') {
      url += '/' + params.id;
      config.data = params;
    }

    const stringifiedQuery = queryString.stringify(query);
    if (stringifiedQuery.length) {
      config.url = url + '?' + stringifiedQuery;
    } else {
      config.url = url;
    }

    // Return axios Promise
    return axios(config);
  }
}
