/* jshint expr: true */
module.exports = {
  tags: ['customerportal'],
  'Test login' : function (client) {
    client
      .url('http://customer-portal-qa.1bogtest.org/login')
      .pause(1000);

    client
          .setValue('input[type=email]', 'skipatrol6144@yahoo.com')
          .click('[class="submit-btn"]');

    client.pause(3000);
    client
          .setValue('input[type=password]', 'plugfoot123')
          .click('[class="submit-btn"]')
          .assert.title("My Solar")


/*    client.end();*/
  }
};
