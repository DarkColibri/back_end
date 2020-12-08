const debug = require('debug')('src:lib:auth')

module.exports = {
  isLoggedIn (req) {
    debug(req)
    if (req.isAuthenticated()) {
      debug('User loged ... [ YES ]')
      return true
    }
    debug('User loged ... [ NO ]')
    return false
  }
}

// module.exports = {
//   isLoggedIn (req, res, next) {
//     if (req.isAuthenticated()) {
//       debug('User loged ... [ YES ]')
//       return next()
//     }
//     debug('User loged ... [ NO ]')
//     res.redirect('/login')
//   }
// }
