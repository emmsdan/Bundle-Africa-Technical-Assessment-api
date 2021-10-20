export const response: any = {
  status(status: number) {
    return this;
  },
  json(data: { message: string; type?: string }) {
    return data;
  },
};
export const request: any = {
  files: {
    file: {
      mimetype: "text/csv",
    },
  },
};
