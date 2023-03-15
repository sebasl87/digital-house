import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { TitleSection } from "../../src/components";

describe("TibleSection component", () => {
  it("should render successfully with title_mock", () => {
    const titleSection = renderer
      .create(<TitleSection text="title_mock" />)
      .toJSON();

    expect(titleSection).toMatchSnapshot();
  });
});
