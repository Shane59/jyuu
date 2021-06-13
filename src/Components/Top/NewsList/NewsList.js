import React from 'react';
import styled from 'styled-components';
import {Link, RichText, Date} from 'prismic-reactjs';

const getPublicationDate = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return `${year}年${month}月${day}日`;
};

const NewsListWrapper = styled.div`
  line-height: 20px;
  text-align: left;
  max-width: 720px;
  margin: 40px auto 0px;
  padding: 0 36px;
  @media only screen and (max-width: 440px) {
    padding: 0 26px;
  }
`;
const NewsListItem = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
  border-top: 1px solid #212222;
`;
const NewsDate = styled.div`
  color: gray;
  margin: 5px 0;
`;
const NewsBody = styled.div`
  font-family: 'ヒラギノ明朝 ProN';
  font-size: 13px;
`;

export default function NewsList(props) {
  // console.log('getting news data');
  // console.log(props.data);

  const displayNewsList = () => {
    return (
      <div>
        <h2>News Release</h2>
        {props.data.map((el, index) => {
          console.log(el.data.body[0].text);
          
          return(
            <NewsListItem key={index}>
              <NewsDate>{getPublicationDate(el.first_publication_date)}</NewsDate>
              <NewsBody><RichText props={el.data.body} /></NewsBody>
            </NewsListItem>
          )
        })}
      </div>
    )
  }
  
  return(
    <NewsListWrapper>
      {displayNewsList()}
    </NewsListWrapper>
  )
}