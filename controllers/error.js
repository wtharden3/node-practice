exports.useError = (req, res, next) => {
  // const appPath = path.join(__dirname, 'views', '404.html');
  // res.status(404).sendFile(appPath)
  res.status(404).render('404', { docTitle: '404: Page Not Found', path: '' });
}