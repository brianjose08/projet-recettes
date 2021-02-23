<template>
    <div class="contenu">
        <h1>{{user.username}}</h1>
    </div>
</template>

<script>

export default {
  name: 'Favorites',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('userGet')),
    };
  },
};
</script>

<style lang="scss" scoped>
.contenu{
  padding-top: 100px;
}
</style>
