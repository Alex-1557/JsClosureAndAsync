//3. Callbacks (Older Style, Less Common Now):

class FileLoader {
  loadData(filename, callback) {
    setTimeout(() => {
      //Simulate Async operation
      const data = 'Data from ' + filename;

      if (filename) {
        callback(null, data); // First argument is error (null if success)
      } else {
        callback('Filename not provided');
      }
    }, 1000);
  }
}

const loader = new FileLoader();

loader.loadData('my_file.txt', (err, data) => {
  if (err) {
    console.error('Load error:', err);
    return;
  }

  console.log('Loaded data:', data);
});
