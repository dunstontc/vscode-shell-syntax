const gulp  = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => { });

gulp.task('compile-bash', () => {
  gulp.src('./src/bash/*.json5')
    .pipe(merge({
      fileName: "bash.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('compile-zsh', () => {
  gulp.src('./src/zsh/*.json5')
    .pipe(merge({
      fileName: "zsh.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('compile-sh', () => {
  gulp.src('./src/sh/*.json5')
    .pipe(merge({
      fileName: "sh.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/bash/*.json5', [ 'compile-bash' ]);
  gulp.watch('./src/zsh/*.json5', [ 'compile-zsh' ]);
  gulp.watch('./src/sh/*.json5', [ 'compile-sh' ]);
});
