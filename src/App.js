import React from "react";
import SearchBar from "./components/layout/SearchBar";
import Posts from "./components/post/Posts";

// Styles
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar />
        {/* <Posts /> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid red;
`;

export default App;
