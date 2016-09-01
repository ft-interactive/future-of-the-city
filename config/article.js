export default _ => ({ // eslint-disable-line

  // link file UUID
  id: 'aaa5ca98-6b8a-11e6-ae5b-a7cc5dd5a28c',

  // canonical URL of the published page
  // https://ig.ft.com/sites/future-of-the-city get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/future-of-the-city',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Big Bang II: the City of London\'s most influential people',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The Brexit vote is set to cause a revolution in the City. ' +
           'In our exclusive list, the FT profiles the 30 people who will shape its future',

  topic: {
    name: 'Magazine',
    url: 'http://www.ft.com/magazine',
  },

  relatedArticle: {
    text: 'Read introduction »',
    url: 'http://www.ft.com/cms/s/bf2a2c16-6eb4-11e6-a0c9-1365ce54b926.html',
  },

  mainImage: {
    title: 'Big Bang II',
    description: '© Matt Chase',
    url: 'https://ig.ft.com/static/future-of-the-city/images/FTbigbang.jpg',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Harriet Agnew', url: 'http://search.ft.com/search?queryText=harriet+agnew' },
    { name: 'Patrick Jenkins', url: 'http://search.ft.com/search?queryText=Patrick+Jenkins' },
  ],

  // Appears in the HTML <title>
  title: 'The 30 most influential people in the City of London',

  // meta data
  description: 'FT profiles the 30 men and women who will shape the City\'s future.',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://image.webservices.ft.com/v1/images/raw/https%3A%2F%2Fig.ft.com%2Fstatic%2Ffuture-of-the-city%2Fimages%2FFTbigbang.jpg?source=test&width=600&height=300&fit=scale-down&format=jpg&quality=high',
  socialHeadline: 'The 30 most influential people in the City of London',
  socialSummary:  'Big Bang II: what\'s next for the City?',
  //
  // TWITTER
  twitterImage: 'https://image.webservices.ft.com/v1/images/raw/https%3A%2F%2Fig.ft.com%2Fstatic%2Ffuture-of-the-city%2Fimages%2FFTbigbang.jpg?source=test&width=600&height=300&fit=scale-down&format=jpg&quality=high',
  // twitterCreator: '@FTMag',
  tweetText: 'The 30 most influential people in the City of London #FTCityList ',
  twitterHeadline: 'Big Bang II: what\'s next for the City?',
  //
  // FACEBOOK
  facebookImage: 'https://image.webservices.ft.com/v1/images/raw/https%3A%2F%2Fig.ft.com%2Fstatic%2Ffuture-of-the-city%2Fimages%2FFTbigbang.jpg?source=test&width=600&height=300&fit=scale-down&format=jpg&quality=high',
  facebookHeadline: 'Who are the 30 most influential people in the City of London?',

  onwardjourney: {

    // list (methode list) or topic
    type: '',

    // topic or list id
    id: '',

    // a heading is provided automatically if not set (peferred)
    heading: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
