/* jshint expr: true */
module.exports = {
  tags: ['customerportal'],
  'Navigate to My Production' : function (client) {
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
          .waitForElementVisible('li[ng-show="masthead.user_has_my_production"]', 10000)
          .click('a[href="/my-production"]')
          .pause(1000)
          .assert.title("My Production - Track your power")
      
/*    client.end();*/
  }
};
