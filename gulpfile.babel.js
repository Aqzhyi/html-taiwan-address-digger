import gulp from 'gulp'
import babel from 'gulp-babel'
import RunSeq from 'run-sequence'
import plumberNotifier from 'gulp-plumber-notifier'
import del from 'del'

let runseq = RunSeq.use(gulp)

gulp.task('babel', babelTask)
gulp.task('clean', cleanTask)
gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['babel'])
})
gulp.task('build', (done) => {
  runseq(
    'clean',
    'babel',
    done
  )
})

function babelTask() {
  return gulp.src('./src/**/*.js')
  .pipe(plumberNotifier())
  .pipe(babel({ modules: 'umd' }))
  .pipe(gulp.dest('./dist'))
}

function cleanTask(done) {
  del('./dist/*', done)
}
