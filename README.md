gulp-jst [![Build Status](https://travis-ci.org/blue68/gulp-amd-jst.svg?branch=master)](https://travis-ci.org/blue68/gulp-amd-jst)
========

Compile [lodash templates](http://lodash.com/docs#template) to a JST file using [gulp](https://github.com/wearefractal/gulp).

Install
-------

Install using [npm](https://npmjs.org/package/gulp-amd-jst).

```
npm install gulp-amd-jst --save-dev
```

Usage
-----

```js
var gulp = require('gulp');
var jst = require('gulp-amd-jst');

gulp.task('jst', function() {
    gulp.src('input/*.html')
        .pipe(jst({
                amd : true,
                prettify : true,
                namespace : false
            }
        ))
        .pipe(gulp.dest('./output'));
});

gulp.task('default', ['jst']);
```

Note: This code is a gulp-jst revision
-------

### jst(options)

`gulp-jst` accepts the [same _.template options](http://lodash.com/docs#template) as the lodash library.
