// const timeago = require('timeago.js')

// const timeagoInstance = timeago()
// const helpers = {}

// helpers.timeago = async (savedTimestamp) => {
//   try {
//     return await timeagoInstance.format(savedTimestamp)
//     // return savedTimestamp
//   } catch (err) {
//     console.log(err)
//   }
// }

// module.exports = helpers
// const timeago = require('timeago.js')
// const timeagoInstance = timeago()
const timeagoInstance = require('timeago.js')
const helpers = {}

helpers.timeago = (savedTimestamp) => {
  return timeagoInstance.format(savedTimestamp)
}

module.exports = helpers
