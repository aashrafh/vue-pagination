<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="article in displayedArticles" :key="article.id">
          <div class="card mb-2">
            <img v-bind:src="article.imageURL" class="card-img-top" />
            <div class="card-body">
              <h5 class="capitalize">{{ article.title }}</h5>
              <p>{{ article.description.slice(0, 120) }}...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="btn-group col-md-2 offset-md-5">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-if="page != 1"
            @click="page--"
          >Previous</button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-for="pageNumber in pages.slice(page-1, page+5)"
            :key="pageNumber"
            @click="page = pageNumber"
          >{{pageNumber}}</button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-if="page < pages.length"
            @click="page++"
          >Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      baseURL: `http://localhost:3000`,
      page: 1,
      perPage: 10,
      pages: []
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles: async function() {
      const res = await this.axios.get(`${this.baseURL}/articles`);
      this.articles = res.data.articles;
    },
    setArticles: function() {
      const numberOfPages = Math.ceil(this.articles.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) this.pages.push(i);
    },
    paginate: function(articles) {
      const page = this.page;
      const perPage = this.perPage;
      const from = page * perPage - perPage;
      const to = page * perPage;
      return articles.slice(from, to);
    }
  },
  computed: {
    displayedArticles: function() {
      return this.paginate(this.articles);
    }
  },
  watch: {
    articles() {
      this.setArticles();
    }
  }
};
</script>
