import fs from "fs";
import path from "path";

let baseURL = "D:\\2024projects\\FolderMaker";
let extension = [];
let files = fs.readdirSync(baseURL);
for (const file of files) {
  let ext = file.split(".")[file.split(".").length - 1];
  //do not move json js or folder already exists
  if (ext != "json" && ext != "js" && file.split(".").length > 1) {
    //Check whether path has given extenstion files
    if (fs.existsSync(path.join(baseURL, ext))) {
      //Move file if folder already exists
      fs.renameSync(path.join(baseURL, file), path.join(baseURL, ext, file));
    } else {
      // else create new dirctory and move the files
      fs.mkdirSync(ext);
      fs.renameSync(path.join(baseURL, file), path.join(baseURL, ext, file));
    }
  }
}
