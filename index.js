/**
 * @param  {object} cooking - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  //  do it
  cooking.add('loader.ab', {
    test: /\.vue|js$/,
    loader: 'ab-loader'
  })
};
