<template>
<div v-if="loading">Loading...</div>
<div v-else>
<router-link to="/"><i class="fa fa-arrow-left"></i><p>Back</p></router-link>
    <article>
      <div class="container">
      <h1>Title: {{ details.title }}</h1>
      <h2>Author: {{ details.principalMakers[0].name }}</h2>
      <h3>Year: {{ details.dating.presentingDate }}</h3>
      <img :src="img" class="artImage">   
      <p><strong>Description:</strong> {{ details.plaqueDescriptionEnglish }}</p>
      </div>
      <div class="authorBox">
        <h4>About the Author</h4>
        <p><strong>Name: </strong>{{ details.principalMakers[0].name}}</p>
        <p><strong>Life: </strong>{{ details.principalMakers[0].dateOfBirth}} ({{ details.principalMakers[0].placeOfBirth}}) - {{ details.principalMakers[0].dateOfDeath}} ({{ details.principalMakers[0].placeOfDeath}})</p>
      </div>
    </article>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
import axios from 'axios';

export default {
  name: 'Detail',
  props: ['id', 'author', 'img'],
  components: { Footer },
  data(){
    return {
      apiKey : "?key=icFKgmYw",
      details: [],
      loading: true,
      errored: false
    }
  },
  mounted(){
    axios
    .get(`https://www.rijksmuseum.nl/api/en/collection/${this.id}${this.apiKey}`)
    .then( response => {
      this.details = response.data.artObject;
      console.log(this.details);
    })
    .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>
<style scoped>
.container {
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 30px auto 0;
  padding: 100px 30px 30px;
}

.authorBox {
  width: 500px;
  background-color: white;
  color: #0c2954;
  margin: 20px auto 40px;
  padding: 1.5rem;
  border-radius: 15px;
}

.container h3 {
  flex-basis: 100%;
}


a{
  position: absolute;
  left: 50px;
  color: white;
  text-transform: none;
  text-align: left;
  
}

a p {
  display: inline-block;
  margin-left: 12px;
  display: inline-block;
  padding: 10px 0px;
  position: relative;
}

.container p{
  color: white;
  display: inline-block;
  flex-basis: 40%;
  margin: 0 20px;
}

.container h2 {
  flex-basis: 100%;
}

img {
  width: 500px;
  flex-basis: 40%;
}

@media  screen and (max-width : 1001px) {
  .container {
    flex-direction: column;
    margin-top: 20px;
    padding: 0;
  }
  img {
    flex-basis: auto;
    min-width: 300px;
    margin: 0 auto;
  }
  .container p {
    flex-basis: auto;
    margin-top: 20px;
  }
  article {
    padding: 20px;
  }
}

</style>
