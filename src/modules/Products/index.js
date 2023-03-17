import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import itemImage from '../../assets/images/item.png';
import { useState } from 'react';

function Products({ userInfo }) {
  const [products] = useState([
    { id: 1, name: 'UI Engineering', img: itemImage },
    { id: 2, name: 'UI Engineering', img: itemImage },
    { id: 3, name: 'UI Engineering', img: itemImage },
    { id: 4, name: 'UI Engineering', img: itemImage },
    { id: 5, name: 'UI Engineering', img: itemImage },
    { id: 6, name: 'UI Engineering', img: itemImage },
    { id: 7, name: 'UI Engineering', img: itemImage },
    { id: 8, name: 'UI Engineering', img: itemImage },
    { id: 9, name: 'UI Engineering', img: itemImage },
    { id: 10, name: 'UI Engineering', img: itemImage },
    { id: 11, name: 'UI Engineering', img: itemImage },
    { id: 12, name: 'UI Engineering', img: itemImage },
    { id: 13, name: 'UI Engineering', img: itemImage },
  ]);

  return (
    <>
      <NavBar avatar={userInfo.picture} title="General" />
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <div key={product.id} className="productItem">
              <img src={product.img} alt="test" />
              <span>
                #{product.id} {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
});
export default connect(mapStateToProps)(Products);
