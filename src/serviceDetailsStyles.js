import styled from "styled-components";

export const Container = styled.div`
  background-color: #8c9190;
  min-height: 600px;
  overflow-y: auto;
  width: 50%;
  margin-left: 7.5px;
  padding: 5px 15px 0;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  border-left: "3px solid white";
  padding: 15px;
  background-color: white;
`;
export const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#d1f4ec",
  width: "95%",
  padding: "5px 15px 0"
};

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  position: relative;
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const SecondSp = styled.span`
  font-size: 14px;
  color: #8c9190;
  align: right;
`;

export const TrainDiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StationDiv = styled.div`
  display: flex;
  align-items: center;
  color: #8c9190;
`;
