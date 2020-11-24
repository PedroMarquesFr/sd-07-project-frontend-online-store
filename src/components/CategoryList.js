import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    try {
      const list = await api.getCategories();

      this.setState({
        list,
      });
    } catch (e) {
      return `error:${e}`;
    }
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <ul>
          {list.map((categorie) => (
            <li data-testid="category" key={categorie.id}>
              {categorie.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
