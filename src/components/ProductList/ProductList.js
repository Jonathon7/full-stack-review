import React, { Component } from "react";
import styles from "./productList.module.scss";
import { getProducts, getSession } from "../../ducks/productReducer";
import { connect } from "react-redux";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let displayProducts = this.props.products.map(product => {
      return (
        <div className={styles.productCont} key={product.id}>
          <h1>{product.product_name}</h1>
          <p>{product.product_price}</p>
          <img src={product.image_url} alt="" />
        </div>
      );
    });
    return <div className={styles.productListCont}>{displayProducts}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.productReducer.products
  };
}

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
