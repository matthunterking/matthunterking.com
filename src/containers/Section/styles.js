import styled from 'styled-components';

export const Container = styled.section`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 height: 100vh;
 background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FFFFFF'};
 font-family: "Fjalla One", sans-serif;
`;
