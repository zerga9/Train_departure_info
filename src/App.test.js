import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

test("shows text onLoad", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
