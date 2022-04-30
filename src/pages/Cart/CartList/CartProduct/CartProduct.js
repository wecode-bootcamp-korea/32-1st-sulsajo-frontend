import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartProduct.scss';

const CartProduct = ({
  handlePlusCount,
  countMinusHandle,
  product,
  eachProductDelete,
  checkValueHandle,
}) => {
  const { id, name, count, isChecked, productImg, price } = product;

  const navigate = useNavigate();

  const goToCategory = () => {
    navigate('/signup');
  };

  return (
    <div id="cartProduct">
      <div className="cartProductTop">
        <span />
        <span className="freeDelevery">이벤트기간 무료배송!</span>
      </div>

      <div className="cartProductBottom">
        <input
          onChange={e => {
            checkValueHandle(id, e.target.checked);
          }}
          checked={isChecked}
          className="cartProductCheck altasdfasdf"
          type="checkbox"
          readOnly
        />

        <div className="btnRight">
          <div className="cartProductDetail">
            <div className="showCartProduct">
              <img
                className="cartProductImg"
                alt="cartProductImg"
                src={productImg}
              />

              <div className="productOption">
                <div className="productNameAndOption">
                  <div className="CartProductName">{name}</div>

                  <button
                    className="cartDeleteProduct"
                    onClick={() => {
                      eachProductDelete(id);
                    }}
                  >
                    X
                  </button>
                </div>

                <input
                  list="cartProductOptionReCheck"
                  className="cartProductOptionReCheck"
                  placeholder="옵션 선택"
                />

                <datalist id="cartProductOptionReCheck">
                  <option value="500ml, Medium 사이즈" />
                </datalist>
              </div>
            </div>

            <div className="cartProductCountAndPrice">
              <div key={id} className="cartProductCountBtn">
                <button
                  className="productCounterBtn"
                  onClick={() => countMinusHandle(id, count)}
                >
                  -
                </button>

                <div className="productCount">{count}</div>

                <button
                  className="productCounterBtn"
                  onClick={() => handlePlusCount(id)}
                >
                  +
                </button>
              </div>

              <span className="cartProductPrice">
                {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>
            </div>
          </div>

          <div className="aProductDetailPrice">
            <div className="aProductDetail">
              <span>상품금액</span>

              <span>
                {String(price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>
            </div>

            <div className="aProductDetail">
              <span>즉시할인금액</span>

              <span>0원</span>
            </div>

            <div className="aProductDetail">
              <span>배송비</span>

              <span>0원</span>
            </div>

            <div className="aProductWholeDetail">
              <span>총 금액</span>

              <span className="aProductWholePrice">
                {String(price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>
            </div>
          </div>

          <button className="SeeMoreProductOfShop" onClick={goToCategory}>
            양조장 상품 더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;