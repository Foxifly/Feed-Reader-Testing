/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

  /**
   * @description Test Suite 1: RSS Feeds. Contains RSS feed definitions and the allFeeds variable.
   */
  describe('RSS Feeds', () => {

    /* Tests to make sure that the allFeeds variable is declared.
    It is also checking to see if the variable is defined with a length greater than zero.
    We want to make sure that allFeeds has feeds to push. */
    it('has allFeeds is defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Loops through each feed to make sure that a url is declared.
    It also checks to make sure that the url has 'http' in it. */
    it('has a url defined', () => {
      allFeeds.forEach(feed => {
        expect(feed.url).toBeTruthy();
        expect(feed.url.length).not.toBe(0);
        expect(feed.url).toContain('http');
      });
    });


    /* Just like the loop to check urls, we can check to make sure the name is defined.
    Since names can be unique, can't use toContain to check for specific keywords*/
    it('has a name defined', () => {
      allFeeds.forEach(feed => {
        expect(feed.name).toBeTruthy();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  /**
   * @description Test Suite 2: The Menu. Tests the menu functionality to ensure its responsiveness.
   */
  describe('The menu', () => {

    /* A test to make sure that the left navigation menu is hidden by default.*/
    const body = $('body');
    const menu = $('.menu-icon-link');
    const mHidden = 'menu-hidden'
    it('has the side menu element hidden by default', () => {
      expect(body.hasClass(mHidden)).toBeTruthy();
    });

    /* Test that checks to see if the hidden class is applied and removed
    when the menu is toggled */
    it('has a menu that hides and unhides while being clicked', () => {
      menu.click();
      expect(body.hasClass(mHidden)).toBeFalsy();
      menu.click();
      expect(body.hasClass(mHidden)).toBeTruthy();
    });
  });

  /**
   * @description Test Suite 3: Async Initial Entries. Async tests to check the feed content.
   */
  describe('Async Initial Entries', function () {

    /* Initialize beforEeach to deal with the async loadFeed function. */
    beforeEach((done) => {
      loadFeed(0, () => {
        done();
      });
    });

    /* Checks to see that there is at least one feed loaded in the .feed container
    Need to ensure there are not an empty feeds. */
    it('should have a single entry element within the feed container', (done) => {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });

  /**
   * @description Test Suite 3: Async New Feed Selection.
        Async tests to check to make sure the old feed and new feed are different
   */
  describe('Async New Feed Selection', () => {

    /* Stores the previous feed and the new feed */
    let previousFeed,
      newFeed;

    /* Uses beforeEach because loadFeed is asynchonous. Store the html() as the previous feed.*/
    beforeEach((done) => {
      loadFeed(0, () => {
        previousFeed = $('.feed').html();
        done();
      });
    });

    /* Test to make sure that the previous feed loaded is not the same as the new feed*/
    it('has a different feed when a new feed is loaded', (done) => {
      loadFeed(0, () => {
        newFeed = $('.feed').html();
      });
      expect(newFeed).not.toEqual(previousFeed);
      done();
    });
  });




  /*

  Implement error handling for undefined variables and out-of-bound array access.
  When complete - all of your tests should pass.
  Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage), provide documentation for what these future features are and what the tests are checking for.*/

}());