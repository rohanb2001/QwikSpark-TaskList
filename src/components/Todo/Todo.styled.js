import styled from "styled-components";

export const TodoWrapper = styled.section`
  position: relative;
  margin-top: 5rem;
`;

export const TodoUl = styled.ul`
  list-style: none;
`;

export const TodoList = styled.li`
  position: relative;
  padding: 1rem 1.7rem;
  background-color: #fff;
  margin-bottom: 1rem;
  border-radius: 20px;
  list-style: none;
  transition: all 0.9s ease-in;
  box-shadow: 10px 10px 35px -20px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 35px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 35px -20px rgba(0, 0, 0, 0.75);
`;
