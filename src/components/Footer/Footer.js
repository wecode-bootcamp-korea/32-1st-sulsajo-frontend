import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerWrap">
        <div className="footerLeft">
          <div className="footerMenu">
            <span>이용약관</span>
            <span>정보처리방침</span>
            <span>파트너 문의</span>
          </div>
          <ul className="footerInformation">
            <li>
              <span>술사조</span>
              <span>PM : 종혁님</span>
              <span>
                Fe : 장형원, 이형준, 김병규, 임종혁 Be : 최민석, 최지수
              </span>
            </li>
            <li>
              <span>서울특별시 강남구 테헤란로 427 10층(위워크타워)</span>
              <span>사업자등록번호</span>
              <span>사업자확인</span>
            </li>
            <li>
              <span>통신판매 신고번호</span>
              <span>대표전화</span>
              <span>이메일</span>
            </li>
            <li>
              <span>술담아는 저희 첫번째 프로젝트 입니다 예쁘게 봐주세요.</span>
            </li>
          </ul>
        </div>
        <div className="footerRight">
          <div className="phoneNumber">
            <span>고객센터</span>
            <span>24시간 연중무휴</span>
          </div>
          <div className="link">
            <i className="fa-brands fa-1x fa-instagram" />
            <i className="fa-brands fa-1x fa-youtube" />
            <i className="fa-brands fa-1x fa-facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
