import React from 'react';
import CircleTable from '../CircleTable/CircleTable';
import Comment from '../Comment/Comment';
import './ProductDetail.scss';

const ProductDetail = ({
  commentList,
  setCommentList,
  inputContent,
  setInputContent,
  product,
  productId,
  token,
}) => {
  const {
    alcohol_percentage,
    category,
    description_detail,
    description_tag,
    finger_food,
    id,
    name,
    price,
    product_image,
    size,
    taste,
  } = product;

  const postComment = e => {
    e.preventDefault();
    if (!inputContent) return;
    fetch(`http://10.58.6.20:8000/products/${productId}/comment`, {
      method: 'post',
      headers: { Authorization: token },
      body: JSON.stringify({
        product_id: id,
        content: inputContent,
        user: name,
      }),
    }).then(response => {
      if (response.status === 201) {
        setInputContent('');
        fetch(`http://10.58.6.20:8000/products/${productId}/comment`)
          .then(res => res.json())
          .then(data => {
            setCommentList(data.data);
          });
      }
    });
  };

  const deleteComment = id => {
    fetch(`http://10.58.6.20:8000/products/${productId}/comment/${id}`, {
      method: 'delete',
      headers: { Authorization: token },
      body: JSON.stringify({
        id: id,
      }),
    }).then(response => {
      if (response.status === 204) {
        setCommentList(commentList.filter(comment => comment.id !== id));
      }
    });
  };

  return (
    <div className="productDetail">
      <div className="detailDescription">
        <div className="detailCard">
          <img
            alt="productImage"
            className="productImg"
            src={product_image && product_image[0].image_url}
          />
        </div>
        <div className="detailedProduct">
          <div className="productTitletoRating">
            <h1 className="productTitle">{name}</h1>
            <br />
            <div className="productElement">{description_detail}</div>
            <div className="productOrangecolor">{description_tag}</div>
            <div className="productRating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="productInfoElement">??????: {category}</div>
          <div className="productInfoElement">??????: {alcohol_percentage}%</div>
          <div className="productInfoElement">??????:{size}ml</div>
          <div className="productAdditional">
            <div className="productAdditionalElement">
              ????????????: 2????????? ??????
            </div>
            <div className="productAdditionalElement">
              ??????: 2017??? ????????? ????????? ???????????? ?????????
            </div>
          </div>
          <div className="productPrice">
            <div className="productElement">????????????:</div>
            <div className="productValue">
              {parseInt(price).toLocaleString()}???
            </div>
          </div>
          <div className="blueColor">????????????: ???????????? ??????</div>
          <div className="blueColor">????????????: ?????? ?????? ??????</div>
        </div>
      </div>
      <div className="hacksim">
        <div className="pointFont">???????????????</div>
        <div className="twoPoint">
          <div className="pointEach">
            <div className="pointTitle">???</div>
            <div className="chartList">
              <CircleTable intensity={taste && taste[0].spiceness} />
              <CircleTable intensity={taste && taste[0].savory} />
              <CircleTable intensity={taste && taste[0].refreshness} />
              <CircleTable intensity={taste && taste[0].sweetness} />
              <CircleTable intensity={taste && taste[0].taste_intensity} />
            </div>
            <div className="flavorInfo">
              <span className="flavor">?????????</span>
              <span className="flavor">????????????</span>
              <span className="flavor">????????????</span>
              <span className="flavor">??????</span>
              <span className="flavor">?????? ??????</span>
            </div>
          </div>
          <div className="pointEach">
            <div className="andrew">
              ???????????? ??????
              <div className="andrewPictures">
                <div className="andrewPicture">
                  <img
                    alt="????????????1"
                    className="foodPicture"
                    src={finger_food && finger_food[0].image_url}
                  />
                  {finger_food && finger_food[0].name}
                </div>
                <div className="andrewPicture">
                  <img
                    alt="????????????2"
                    className="foodPicture"
                    src={finger_food && finger_food[1].image_url}
                  />
                  {finger_food && finger_food[1].name}
                </div>
                <div className="andrewPicture">
                  <img
                    alt="????????????3"
                    className="foodPicture"
                    src={finger_food && finger_food[2].image_url}
                  />
                  {finger_food && finger_food[2].name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <textarea
          placeholder="????????? ???????????????"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
        />
        <div className="submitInfo">???????????? ???????????????</div>
        <button
          onClick={e => {
            postComment(e);
          }}
        >
          ????????? ????????? ????????? ???????????????!
        </button>
      </form>
      {commentList.map(comment => {
        const { id, name, product, created_at, content } = comment;
        return (
          <Comment
            key={id}
            nickname={name}
            product={product}
            createdAt={created_at}
            content={content}
            deleteComment={() => deleteComment(id)}
          />
        );
      })}
    </div>
  );
};

export default ProductDetail;
