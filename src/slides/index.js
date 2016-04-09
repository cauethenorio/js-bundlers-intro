
import slides_020_intro from './020-intro';
import slides_030_browserify from './030-browserify';
import slides_040_webpack from './040-webpack';

let slides = [require('./010-init.txt')]
               .concat(slides_020_intro)
               .concat(slides_030_browserify)
               .concat(slides_040_webpack)
               .concat([require('./050-diferencas.txt'),
                        require('./060-webpack-na-pratica.txt')]);

export default slides;