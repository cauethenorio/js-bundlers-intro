import './styl/main.styl';

let remark = require('exports?remark!remark/out/remark');
import slides from './slides';

let slidesTxt = slides.join('\n---\n'),
    slidesTxtNode = document.createTextNode(slidesTxt);

document.getElementById('source').appendChild(slidesTxtNode);
let slideshow = remark.create({'highlightStyle': 'monokai'});