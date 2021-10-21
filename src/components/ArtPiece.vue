<template>
<div class="card"><img :src="result.webImage.url"/>
    <div class="info">
      <h1>{{result.principalOrFirstMaker}}</h1>
      <p>{{result.longTitle}}</p>
      <router-link :to="{ name: 'Detail', params: { id: result.objectNumber, author:result.principalOrFirstMaker , img: result.webImage.url }}">
        <button class="button">Read More</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtPiece',
  props : ["result"],
}
</script>

<style scoped>
article {
  position: relative;
  width: 300px;
  height: 400px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  transition: all 0.8s ease;
  border-radius: 15px;
  filter: brightness(1);
}

h2 {
  display: none;
  position: absolute;
  transition: all 0.8s ease;
}

article:hover {
  filter: brightness(0.8);
}

article:hover h2 {
  transition:  1s;
  display: block;
  
}
.wrapper {
  display: flex;
  width: 90%;
  justify-content: space-around;
}

.card {
  height: 360px;
  border-radius: 15px;
  padding: 1.2rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}
.card:hover {
  transform: translateY(20px);
}
.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.card .info {
  justify-items: left;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}
.card .info h1 {
  margin: 0px;
}
.card .info p {
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
}
.card .info button {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
}
.card .info button:hover {
  background: black;
  color: white;
}
</style>
