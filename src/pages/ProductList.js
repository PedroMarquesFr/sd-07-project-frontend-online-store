import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <header>
          <input placeholder="buscar" />
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho de compras
          </Link>
        </header>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
