/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook } from "@testing-library/react";
import { endpoint } from "../../../endpoint";
import { useFetchData } from "../";
import { getApi } from "@services";
import { mockGetApi, mockQueryKey, mockOptions } from "./mock";

jest.mock("./index");
jest.mock("../../service/getApi");

describe("useFetchData", () => {
  test("request using useFetchData", async () => {
    (useFetchData as unknown as jest.Mock).mockReturnValue({ data: mockGetApi });
    (getApi as jest.Mock).mockResolvedValue({ data: mockGetApi });

    const {
      result: {
        current: { data },
      },
    } = renderHook(() =>
    useFetchData({
        queryKey: mockQueryKey,
        request: { endpoint: endpoint.getPosts },
        options: mockOptions,
      })
    );

    expect(data).toEqual(mockGetApi);
  });
});
