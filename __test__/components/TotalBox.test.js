import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { TotalBox } from "../../src/components";

describe("TotalBox component", () => {
  it("should render successfully with mock data and isRedemption = true", () => {
    const totalBox = renderer.create(<TotalBox points={100} />).toJSON();

    expect(totalBox).toMatchSnapshot();
  });

  it("should render loader", () => {
    const totalBox = renderer.create(<TotalBox />).toJSON();

    expect(totalBox).toMatchSnapshot();
  });
});
