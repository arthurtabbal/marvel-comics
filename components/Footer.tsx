import styled from "styled-components";

const CustomFooter = styled.footer`
  padding: 1rem 0;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <CustomFooter>
      Copyright <span>Arthur Tabbal</span> {new Date().getFullYear()}
    </CustomFooter>
  );
}
