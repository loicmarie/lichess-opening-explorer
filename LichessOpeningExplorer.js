const rp = require('request-promise');

class LichessOpeningExplorer {

  constructor() {
    this.options = {
      uri: '',
      json: true
    };
  }

  analyze(fen, opts) {
    this.options['uri'] = 'https://explorer.lichess.ovh/';
    if (opts.hasOwnProperty('master') && opts.master)
      this.options['uri'] += 'master?';
    else
      this.options['uri'] += 'lichess?';
    if (!opts.hasOwnProperty('variant'))
      throw new Error('Missing required option "variant"');
    this.options['uri'] += `variant=${opts.variant}`;
    if (opts.hasOwnProperty('speeds'))
      for (let speed of opts.speeds)
        this.options['uri'] += `&speeds[]=${speed}`;
    if (opts.hasOwnProperty('ratings'))
      for (let rating of opts.ratings)
        this.options['uri'] += `&ratings[]=${rating}`;
    this.options['uri'] += `&fen=${encodeURI(fen)}`;
    return rp(this.options);
  }

}

module.exports = LichessOpeningExplorer;
