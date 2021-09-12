//const Password = require('./src/js/Password');
const generatePage = require('./src/js/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

const page = generatePage();

writeFile(page)
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile(); 
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});


