import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { CardDetail } from "../../src/components";

describe("CardDetail component", () => {
  it("should render successfully with mock data and isRedemption = true", () => {
    const cardDetail = renderer
      .create(
        <CardDetail
          points={100}
          isRedemption
          date="2022-12-09T10:20:00.909Z"
          image="https://loremflickr.com/640/480/technics"
        />
      )
      .toJSON();

    expect(cardDetail).toMatchSnapshot();
  });

  it("should render successfully with mock data and isRedemption = false", () => {
    const cardDetail = renderer
      .create(
        <CardDetail
          points={100}
          isRedemption={false}
          date="2022-12-09T10:20:00.909Z"
          image="https://loremflickr.com/640/480/technics"
        />
      )
      .toJSON();

    expect(cardDetail).toMatchSnapshot();
  });
});
