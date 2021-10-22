<template>
    <footer>
        <ul>
            <li>
                <span>Courtesy of</span>
                <a href="https://www.rijksmuseum.nl/en" target="_blank">Rijksmuseum</a>
            </li>
            <li>
                <span>By</span>
                <a href="https://github.com/laura-1996" target="_blank">Laura Spina</a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
footer {
  position: absolute;
  height: 150px;
  width: 100%;
  background-color: rgb(255 255 255 / 55%);
  display: flex;
  justify-content: center;
  margin-top: 50px;
} 

footer ul {
  width: 1000px;
  text-align: center;
  padding: 0;
  align-self: center;
}

footer li {
  display: inline;
  list-style-type: none;
  line-height: 44px;
  margin: 0 20px;
}

a {
  color: #0c2954;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  position: relative;
}

a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #0c2954;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

a:hover:after { 
  width: 100%; 
  left: 0; 
}
span {
  color: white;
  margin-right: 12px;
}

</style>
