/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook } from "@testing-library/react";
import { endpoint } from "../../../endpoint";
import { useHttpQuery } from "../";
import { getApi } from "@services";
import { mockGetApi, mockQueryKey, mockOptions } from "./mock";

jest.mock("./index");
jest.mock("../../service/getApi");

describe("useHttpQuery", () => {
  test("request using useHttpQuery", async () => {
    (useHttpQuery as unknown as jest.Mock).mockReturnValue({ data: mockGetApi });
    (getApi as jest.Mock).mockResolvedValue({ data: mockGetApi });

    const {
      result: {
        current: { data },
      },
    } = renderHook(() =>
    useHttpQuery({
        queryKey: mockQueryKey,
        request: { endpoint: endpoint.getPosts },
        options: mockOptions,
      })
    );

    expect(data).toEqual(mockGetApi);
  });
});
