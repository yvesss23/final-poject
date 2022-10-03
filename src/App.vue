<template>
  <div id="nav">
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;600;700&family=Itim&family=Noto+Sans+Thai:wght@400;500&family=Prompt:wght@200&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Lato"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-family: "Itim", cursive;
  font-family: "Noto Sans Thai", sans-serif;
  font-family: "Prompt", sans-serif;
  font-size: 14px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.footer {
  padding-right: 18px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: rgb(18, 1, 1);
  text-align: center;
}
.card {
  padding-right: 10px;
  padding-left: 10px;
}
.submit {
  width: 100%;
  height: 35px;
  background-color: #17c50b;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
}
.button {
  border: none;
  border-radius: 50%;
  border: 2px solid #cccdca;
  background-color: rgb(255, 255, 255);
}
b{
  padding-right: 10px;
  padding-left: 10px;
  font-size: 17px;
}
.input {
  width: 100%;
  height: 35px;
  border: 2px solid rgb(227, 225, 225);
  border-radius: 4px;
}
.card-body{
  width: 105%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-block-end: 3px solid lightgrey;
}
.head {
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 1000;
  color: rgb(10, 10, 10);
  letter-spacing: 4px;
  padding-top: 10px;
  text-align: center;
}

</style>
