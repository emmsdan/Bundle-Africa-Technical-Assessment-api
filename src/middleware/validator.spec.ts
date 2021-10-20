import { fileValidator } from "./validator";
import { request, response } from "./mock-validator";

describe("fileValidator Utils", () => {
  it("should return a express function", () => {
    const action = fileValidator("csv");
    expect(typeof action).toBe("function");
  });

  it("should through error if files not found", () => {
    const req = { ...request, files: null };
    const action = fileValidator("csv")(req, response, () => {});
    expect(action).toStrictEqual({ message: "No files were uploaded." });
  });

  it("should through error if file type not csv", () => {
    const req = {
      ...request,
      files: { file: { mimetype: "application/json" } },
    };
    const action = fileValidator("csv")(req, response, () => {});
    expect(action).toStrictEqual({
      message: "File upload should be csv type",
      type: "application/json",
    });
  });

  it("should successfully access csv file", () => {
    const action = fileValidator("csv")(request, response, () => "success");
    expect(action).toStrictEqual("success");
  });
});
