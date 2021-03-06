import { forwardRef, useEffect, useState } from 'react';
import ProductBoxCard from '../ProductBoxCard/ProductBoxCard';
import SpecialPriceCard from '../SpecialPriceCard/SpecialPriceCard';
import './RecommendProductBox.scss';

const ProductBox = forwardRef(({ data }, ref) => {
  const [productCardNum, setProductCardNum] = useState(1);

  const getTitle = () => {
    if (data[0]?.category_id === 1) {
      return '술담화 전통주 소믈리에의 이번 탁주 P.I.C.K!';
    } else if (data[0]?.category_id === 2) {
      return '술담화 약주약주 소믈리에의 이번 약주 P.I.C.K!';
    } else if (data[0]?.category_id === 3) {
      return '술담화 청주청주 소믈리에의 이번 청주 P.I.C.K!';
    } else if (data[0]?.category_id === 4) {
      return '술담화 증류주 소믈리에의 이번 증류주 P.I.C.K!';
    } else if (data[0]?.category_id === 5) {
      return '술담화 증류주 소믈리에의 이번 맥주 P.I.C.K!';
    }
    return null;
  };

  const moveCardLeft = () => {
    if (productCardNum !== 1) {
      setProductCardNum(productCardNum - 1);
    }
  };
  const moveCardRight = () => {
    if (productCardNum !== 3) {
      setProductCardNum(productCardNum + 1);
    }
  };
  return (
    <section ref={ref} className="mainSojuRecommend">
      <div className="sectionContent">
        "어떤 술을 마실지 고민이라면, 이 술은 어때요?"
      </div>
      <div className="sectionSubContent">{getTitle()}</div>
      <div className="viewMore">더보기 </div>
      <div className="sojuCarouselOuter">
        <div className={`sojuCarouselSet${productCardNum}`}>
          {data.map(value => (
            <ProductBoxCard key={value.id} data={value} />
          ))}
        </div>
      </div>
      <button
        className={
          data[0]?.category_id === 1 ? 'arrowLeftBtnTak' : 'arrowLeftBtn'
        }
      >
        <i className="fa-solid fa-angle-left" onClick={moveCardLeft} />
      </button>
      <button
        className={
          data[0]?.category_id === 1 ? 'arrowRightBtnTak' : 'arrowRightBtn'
        }
      >
        <i className="fa-solid fa-angle-right" onClick={moveCardRight} />
      </button>
      {data[0]?.category_id === 1 && <SpecialPriceCard />}
    </section>
  );
});

export default ProductBox;
