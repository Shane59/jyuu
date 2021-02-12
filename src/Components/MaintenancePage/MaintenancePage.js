import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  margin-top: 100px;
  font-size: 24px;
`;

export default function Maintenance() {
  return (
    <MessageWrapper>
      ただいまメンテナンス中です。
    </MessageWrapper>
  )
}