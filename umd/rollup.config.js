import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './name.js',
  output: {
    dir: 'output',
    // format: 'cjs'
  },
  plugins: [
    commonjs()
  ]
}