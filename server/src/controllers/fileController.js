import FileService from "../services/fileService.js";

class FileController {
  static uploadFile(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const savedFile = FileService.processUploadedFile(req.file);
    res.json({ message: 'File uploaded successfully', file: savedFile });
  }

  static getFiles(req, res) {
    const files = FileService.listFiles();
    res.json({ message: 'Fetched uploaded files', files });
  }
}

export default FileController;
