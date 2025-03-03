import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const UPLOADS_DIR = path.join(__dirname, "../../uploads");

class FileRepository {
  static saveFile(file) {
    return {
      fileName: file.filename,
      originalName: file.originalname,
      filePath: file.path,
      size: file.size,
    };
  }

  static getUploadedFiles() {
    return fs.readdirSync(UPLOADS_DIR).map((file) => ({
      fileName: file,
      filePath: path.join(UPLOADS_DIR, file),
    }));
  }
}

export default FileRepository;
