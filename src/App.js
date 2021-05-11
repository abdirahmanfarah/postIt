import React, { useState } from "react";
// import SearchBar from "./components/layout/SearchBar";
import Posts from "./components/post/Posts";
import PostCard from "./components/post/PostCard";

// Styles
import styled from "styled-components";
import "./styles/App.css";

function App() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      post: "hello",
    },
    {
      id: 2,
      post: "beaver's are smelly",
    },
    {
      id: 3,
      post: "what did you say about beavers??",
    },
  ]);
  return (
    <div className="App">
      <Container>
        {/* <Posts /> */}
        <Harry> Rendering</Harry>

        {/* {inputs.map((input, index) => {
          <PostCard key={index} index={index} input={input} />;
          // console.log(inputs);
        })} */}

        <PostCard input={inputs} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid red;
`;
const Harry = styled.h1`
  color: green;
`;

export default App;
