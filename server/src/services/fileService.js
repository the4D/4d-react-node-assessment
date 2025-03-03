import FileRepository from "../repositories/fileRepository.js";

class FileService {
  static processUploadedFile(file) {
    return FileRepository.saveFile(file);
  }

  static listFiles() {
    return FileRepository.getUploadedFiles();
  }
}

export default FileService;
