<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="article in articles" :key="article.id">
          <div class="card mb-2">
            <img v-bind:src="article.imageURL" class="card-img-top" />
            <div class="card-body">
              <h5>{{article.title}}</h5>
              <p>{{article.description.slice(0, 100)}}</p>
            </div>
          </div>
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
    }
  }
};
</script>
