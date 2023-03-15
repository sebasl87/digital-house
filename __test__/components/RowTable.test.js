import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { RowTable } from "../../src/components";
import { render, fireEvent } from "react-native-testing-library";

const mockHistoryPush = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockHistoryPush,
  }),
}));

describe("RowTable component", () => {
  it("should render successfully with mock movement", () => {
    const rowTable = renderer
      .create(
        <RowTable
          date="2022-12-09T06:34:25.607Z"
          product="Handmade Metal Shoes"
          points={16434}
          image="https://loremflickr.com/640/480/transport"
          isRedemption={false}
        />
      )
      .toJSON();
    expect(rowTable).toMatchSnapshot();
  });

  it("should render successfully with mock movement and isRedemption", () => {
    const rowTable = renderer
      .create(
        <RowTable
          date="2022-12-09T06:34:25.607Z"
          product="Handmade Metal Shoes"
          points={16434}
          image="https://loremflickr.com/640/480/transport"
          isRedemption
        />
      )
      .toJSON();
    expect(rowTable).toMatchSnapshot();
  });

  it("should be redirect on press", () => {
    const { getByTestId } = render(
      <RowTable
        date="2022-12-09T06:34:25.607Z"
        product="Handmade Metal Shoes"
        points={16434}
        image="https://loremflickr.com/640/480/transport"
        isRedemption={false}
      />
    );
    fireEvent.press(getByTestId("touchableProduct"));

    expect(mockHistoryPush).toHaveBeenCalled();
  });
});
