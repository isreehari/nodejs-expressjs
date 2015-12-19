exports.cacheHeader = function(req, res, next) {
  res.header('Cache-Control', 'public, max-age=300');
  next();
};

exports._404 = function(req, res, next) {
  res.status(404).send('File Not found :(');
};

exports._500 = function(err, req, res, next) {
  res.status(500).send(err.stack);
};
