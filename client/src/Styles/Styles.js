import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin: 20px;
`;

export const ShowCard = styled.div`
  /* border: 2px solid black; */
  display: inline-block;
  box-shadow: 35px 35px 28px -48px rgba(0,0,0,1);
  border-radius: 5px;
  padding: 10px;
  background: #a8afbf;
  margin: 10px 10px 10px 100px;

  > h4 {
    font-style: italic;
    color: gray;
    margin-top: 10px;
  }
`;

export const IndexGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

export const StyledButton = styled.div`
  display: inline-block;
  background: #868db9;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  /* width: 100px; */
  border-radius: 2px;
  margin: 10px;

  &:hover {
    background: #979ca8;
    transition: background 0.2s ease-in;
    box-shadow: 35px 35px 28px -48px rgba(0,0,0,1);
    color: white;
  }
`;

export const Header = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    color: #2b2b2b;
    margin: 10px 115px;
`;