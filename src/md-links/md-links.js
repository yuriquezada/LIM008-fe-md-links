import { evaluatePath, convertPathRelativeToAbsolute, readDirectory } from '../path.js';
import { filterMdFiles } from '../extract-md.js';
import { extractLinks } from '../extract-links.js';
import { validateLink } from '../validate.js';

export const mdLinks = (path, options) => {
  let pathAbs;
  if (!evaluatePath(path)) {
    pathAbs = convertPathRelativeToAbsolute(path);
  } else {
    pathAbs = path;
  };
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(extractLinks(filterMdFiles(readDirectory(pathAbs))));
    } if (options.validate) {
      resolve(validateLink(extractLinks(filterMdFiles(readDirectory(pathAbs)))));
    } 
  });
};
// mdLinks('C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test',{validate:false}).then(resp=>console.log(resp))

// mdLinks('..\\..\\test\\probando-mdlinks', {validate: false})
//   .then(res => console.log(res));