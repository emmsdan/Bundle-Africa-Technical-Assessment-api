import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
export const fileValidator = (mimetype: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
      return res.status(400).json({ message: "No files were uploaded." });
    }

    // @ts-ignore
    const file: UploadedFile = req.files.file;
    if (req.files.file && file.mimetype.includes(mimetype)) {
      return next();
    }
    return res.status(400).json({
      message: `File upload should be ${mimetype} type`,
      type: file.mimetype,
    });
  };
};
