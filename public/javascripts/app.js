var search = instantsearch({
  appId: 'RAVDOBYAM2',
  apiKey: '46b0543d9035689b9aedb89a8e8ea65a',
  indexName: 'dev_tgv',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);
// search.start();