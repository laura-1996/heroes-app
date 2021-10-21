<template>
 <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>
    <div>
    <nav v-bind:class="[isSticky ? stickyClass : '']">
      <h1>Look for Art</h1>
      <form action="" @submit.prevent="getData">
      <input type="search" v-model="query" class="search" >
      <button type="submit" class='btn' @submit="this.clearInput"><i class="fa fa-search"></i></button>
    </form>
    </nav>
    <div class="art-gallery results" v-if="!this.searched">
      <h1>Rijksmuseum</h1>
      <ul>
        <li v-for="(result, index) in gallery" v-bind:key="index" class="result">
          <ArtPiece :result="result"/>
        </li>
      </ul>
    </div>
    <div v-if="this.searched" class="results">
      <ul>
        <li v-for="(result, index) in results" v-bind:key="index" class="result">
          <ArtPiece :result="result"/>
        </li>
      </ul>
    </div>
    <Footer/>
    </div>  
  </section>
</template>

<script>
import ArtPiece from '../components/ArtPiece.vue';
import axios from 'axios';
import Footer from '../components/Footer.vue';

export default {
  components: { ArtPiece, Footer },
  name: 'Search',
  data(){
    return {
      query : null,
      api : "https://www.rijksmuseum.nl/api/en/collection/",
      apiKey : "?key=icFKgmYw",
      results : [],
      gallery : [],
      isSticky: false,
      stickyClass: 'is_sticky',
      scrollPosition:0,
      searched : false,
      errored : false,
      loading : true,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    },
  mounted () {
    axios
    .get(`https://www.rijksmuseum.nl/api/en/collection/${this.apiKey}&imgonly=true&ps=30`)
    .then( response => {
      this.gallery = response.data.artObjects;
    })
    .catch(error => {
        console.log(error)
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
        this.searched = false;
        })
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods : {
    getData(){
      let userInput = document.querySelector('.search').value;
      axios
      .get(`https://www.rijksmuseum.nl/api/en/collection/${this.apiKey}&q=${userInput}&imgonly=true&ps=30`)
      .then(response => {
        this.results = response.data.artObjects;
        console.log(this.results);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true
      })
      .finally(() => {
      this.loading = false
      this.searched = true
      })
    },
    handleScroll(){
      this.scrollPosition = window.scrollY;
      if(this.scrollPosition>=80){
        this.isSticky=true;
      }else{
        this.isSticky=false;
    }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

nav.is_sticky {
  background-color: #ffffffa3;
  transition: all 0.3s ease;
}

nav.is_sticky h1 {
  color: #07051a;
}

h1{
  margin: 30px 50px;
}

.results {
  margin-top: 90px;
}

form {
  position: relative;
  transition: all 1s;
  width: 50px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;
  margin: 0 50px;
}

input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
}

.btn {
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #0c2954;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
  border: none;
  background-color: white;
}

form:hover{
  width: 200px;
  cursor: pointer;
}

form:hover input{
  display: block;
}

form:hover .btn {
  background: #0c2954;
  color: white;
}

.art-gallery {
  text-align: left;
}

.art-gallery h1 {
  font-size: 4rem;
}

.results {
  margin: 50px auto;
}

.result {
  margin: 10px;
  max-width: 300px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}

@media  screen and ( max-width : 1061px) {
  ul {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media  screen and ( max-width : 740px) {
  ul {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}
@media  screen and ( min-width : 1248px) {
  ul {
    gap: 70px;
  }
}
</style>

