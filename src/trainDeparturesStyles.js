import styled from "styled-components";

export const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#d1f4ec",
  width: "100%",
  padding: "5px 15px 0"
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  border-left: "3px solid white";
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.25s linear;
  :hover {
    background-color: #d1f4ec;
    border-left: 3px solid rgb(46, 41, 117);
  }
  background-color: white;
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-content: center;
  justify-content: center;
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const SecondSp = styled.span`
  font-size: 14px;
  color: #8c9190;
`;

export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;
