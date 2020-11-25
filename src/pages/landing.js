import styled from "styled-components";
import Nav from "../components/Nav";
import MenuNav from "../components/MenuNav";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Flag from "../components/Flag"



const landing = () => {
  return (
    <Wrapper className="wrapper">
      <Nav />
      <MenuNav />
      <Flag />
      <Items />
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default landing;

const Wrapper = styled.div`
  min-height: 100vh;
`;
