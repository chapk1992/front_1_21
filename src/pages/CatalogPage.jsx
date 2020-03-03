import React, { Component } from 'react';
import Product from './../components/Product/index.jsx';
import HeaderTop from './Header_top/HeaderTop.jsx';
import HeaderBottom from './Header_bottom/HeaderBottom.jsx';
import Menu from './Menu';
import mockedData from './MockedData/MockedData.jsx';
import { Footer } from './Footer/Footer.jsx';

<mockedData />

class CatalogPage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;

    return (
      <React.Fragment>
      <header>
          <div className="header">
              <HeaderTop />
              <HeaderBottom />
          </div>
      </header>

      <Menu />

      <div className="container">
          <div className="row product">
              {productList.map(product => (
                <Product
                  key={`Product-${product.id}`}
                  data={product}
                />
              ))}
          </div>
      </div>

      <Footer />
      </React.Fragment>
    );
  };
}

export default CatalogPage;
