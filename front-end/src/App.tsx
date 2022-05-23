import React from "react";
import Title from "./components/Title/Title";
import Text from "./components/Text/Text";

const App = () => {
  return (
    <div>
      <Title size="lg">Hello World</Title>
      <Text mt={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo autem
        at cupiditate labore asperiores ullam, esse quo, neque, eaque maiores
        sequi tenetur ratione iure perspiciatis dolorem veniam id. Suscipit?{" "}
      </Text>
    </div>
  );
};

export default App;
