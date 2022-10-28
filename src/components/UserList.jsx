import React from "react";
import styled from "styled-components";

function UserList(props) {
  console.log(props.user);
  return (
    <StyledCard>
      <div>
        <header>
          <h3>{props.users.title}</h3>
          <span>{props.users.id}</span>
        </header>

        <p>text</p>
        <img src={props.users.url} />
      </div>
    </StyledCard>
  );
}

export default UserList;

const StyledCard = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid;
  & header {
    display: flex;
    justify-content: space-between;
  }
  & img {
    width: 150px;
    height: 150px;
  }
  & span {
    border: 0.5px solid;
    width: 50px;
    height: 30px;
    margin-right: 10px;
    align-items: center;
  }
  &p {
    display: flex;
    margin-left: 10px;
    justify-content: flex-start;
  }
`;
