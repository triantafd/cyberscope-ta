import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db; // Change the color to fit your design
  width: 40px; // Loader size
  height: 40px; // Loader size
  animation: ${spin} 2s linear infinite; // Adjust the speed as needed
`;

export default Loader;
