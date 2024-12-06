import { readdir, stat, readFile } 
                        from 'fs/promises';
async function* readFiles(directory) {
    const files = await readdir(directory);
    for (const file of files) {
      const stats = await stat(file);
      if (stats.isFile()) {
        yield {
          name: file,
          content: 
             await readFile(file, "utf8"),
        };
      }}
  }
const files = readFiles("./");
console.log((await files.next()).value);
console.log((await files.next()).value);

  