<template>
  <div>
    <div class="contenu">
      <div class="pagePersonalSpace">
        <div>
          <div class="viewInfo">
            <a href="/favorites">Favorites</a>
          </div>
        </div>
        <div>
          <div class="viewInfo">
            <a href="/calendar">Calendar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PersonalSpace',
  components: {},
};
</script>
<style lang="scss" scoped>
.contenu {
  padding-top: 110px;
  padding-bottom: 25px;
  display: inline-block;
  justify-content: center;
}

.pagePersonalSpace {
  padding: 122px;
  background-color: rgba(231, 231, 231, 0.911);
  border-radius: 10%;
}

.viewInfo {
  background-color: black;
  color: white;
  border-radius: 22px;
  font-size: 75px;
  padding: 10px;
  margin: 50px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor:pointer;

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }
}

.viewInfo:hover {
  background-color: rgb(255, 174, 0);
}
</style>
