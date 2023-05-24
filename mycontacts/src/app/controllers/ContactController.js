class ContactController {
  index(request, response) {
    response.send('Sent from Contact Controller')
  }
}

module.exports = new ContactController();
