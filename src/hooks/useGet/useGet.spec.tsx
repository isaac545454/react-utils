/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook } from "@testing-library/react";
import { endpoint } from "../../endpoint";
import { useGet } from ".";
import { getApi } from "@services/getApi";
import { mockGetApi, mockQueryKey, mockOptions } from "./mock";

jest.mock("./index");
jest.mock("../../service/getApi");

describe("useGet", () => {
  test("request using useGet", async () => {
    (useGet as unknown as jest.Mock).mockReturnValue({ data: mockGetApi });
    (getApi as jest.Mock).mockResolvedValue({ data: mockGetApi });

    const {
      result: {
        current: { data },
      },
    } = renderHook(() =>
      useGet({
        queryKey: mockQueryKey,
        request: { endpoint: endpoint.getPosts },
        options: mockOptions,
      })
    );

    expect(data).toEqual(mockGetApi);
  });
});
