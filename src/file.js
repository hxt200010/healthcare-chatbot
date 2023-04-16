import * as BrowserFS from 'browserfs';

BrowserFS.install(window);


const createFileAndAppend = async (fileName, content) => {
  const fs = BrowserFS.BFSRequire('fs');

  try {
    await fs.promises.appendFile(fileName, content);
  } catch (error) {
    await fs.promises.writeFile(fileName, content);
  }
};

const clearFileContent = async (fileName) => {
  const fs = BrowserFS.BFSRequire('fs');

  try {
    await fs.promises.access(fileName, fs.constants.F_OK);
    await fs.promises.writeFile(fileName, '');
  } catch (error) {
    console.error(error);
  }
};

export { createFileAndAppend, clearFileContent };