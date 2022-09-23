import styled from "styled-components";

const NumberLists = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 10px 80px;

  .lotto-items {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    display: block;
    background-color: rgb(211, 197, 197);
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    font-weight: bold;
    color: #000;

    &.winning-ball {
      background-color: rgb(199, 31, 31);
      color: #fff;
    }
  }
`;

const Raking = styled.li`
  width: 60px;
  flex-shrink: 0;
  border-radius: 5px;
  padding: 5px 8px;
  background: rgb(199, 31, 31);
  text-align: center;
  color: #fff;
  font-size: 16px;
  margin-left: 20px;
`;

const NumberList = (props) => {
  console.log(props);

  return (
    <>
      {props.lottoList.map((items, index) => (
        <NumberLists key={index}>
          {items.map((item, i) => (
            <li
              className={`lotto-items ${
                props.result && props.winningNumbers.includes(item)
                  ? "winning-ball"
                  : ""
              }`}
              key={i}
            >
              {item}
            </li>
          ))}
          {props.result && (
            <Raking>
              {items.filter((item) => props.winningNumbers.includes(item))
                .length < 3
                ? "꽝"
                : 8 -
                  items.filter((item) => props.winningNumbers.includes(item))
                    .length}
            </Raking>
          )}
        </NumberLists>
      ))}
    </>
  );
};
export default NumberList;
