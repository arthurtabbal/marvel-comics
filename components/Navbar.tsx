import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const MarvelLogo = styled.h4`
  background-color: red;
  color: white;
  align-self: center;
  padding: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const LinkItem = styled.li`
  list-style: none;
  margin: 0 0.75rem;
  text-transform: uppercase;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  wrap: wrap;
`;

const ComicsH1 = styled.h1`
  padding: 1rem;
  justify-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <MarvelLogo>MARVEL</MarvelLogo>
        <ComicsH1>Comics Store</ComicsH1>
      </LogoContainer>

      <NavLinks>
        <LinkItem>
          <StyledLink href="/">Home</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink href="/shop">Shop</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink href="/cart">Cart</StyledLink>
        </LinkItem>
      </NavLinks>
    </Nav>
  );
}
