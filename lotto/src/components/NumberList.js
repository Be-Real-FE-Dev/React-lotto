import styled from 'styled-components';

const NumberLists = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 10px 80px;

  li {
    width: 25px;
    height: 25px;
    display: block;
    background-color: ${props => props.winningBack || 'rgb(211, 197, 197)'};
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    font-weight: bold;
    margin: 0 12px;
    color: ${props => props.winningColor || '#000'};

    &.winning-ball {
      background-color: rgb(199, 31, 31);
      color: #fff;
    }
  }
`;

const NumberList = props => {
  console.log(props.lottoList.length);
  return (
    <NumberLists>
      <li></li>
    </NumberLists>
  );
};
export default NumberList;
