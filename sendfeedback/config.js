let config = {}
config.endpoint = process.env["COSMOS_ENDPOINT"];
config.key = process.env["COSMOS_KEY"];
config.database = {
  id: 'Feedback'
}
config.container = {
  id: 'pagefeedback'
}

module.exports = config