<template>
    <div class="contenu">
        <h1>Calendar</h1>
    </div>
</template>

<script>

export default {
  name: 'Calendar',
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
