<template>
  <div class="contenu">
      <div id="calendar">
      <section>
        <div>March</div>
        <div class="weekdays">
          <div class="weekday" v-for="(weekday, index) in weekdays" :key="index">
            {{ weekday }}
          </div>
        </div>
        <div class="date">
          <div class="day" v-for="(n, index) in 28" :key="index">
            {{ n }}
          </div>
          <div class="day-hidden" v-if="month === February">29</div>
          <div class="day-hidden" v-if="month !== February">30</div>
          <div class="day-hidden" v-if="month !== February">31</div>
        </div>
      </section>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      month: 'March',
      weekdays: ['Mo', 'Th', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      user: JSON.parse(localStorage.getItem('userGet')),
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin calendar-layout($property) {
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-gap: 10px;
  padding: $property;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    color: black;
    border-radius: 5px;
  }
}

.contenu {
  padding: 200px 0px 155px 0px;

}

#calendar {
  margin: auto;
  width: 750px;
  height: 500px;
  background-color: #efefef;
  overflow: hidden;
  font-size: 40px;
  .weekdays {
    @include calendar-layout(10px 20px 20px);
    background-color: rgba(0,0,0,0.7);
    border-bottom: 1px solid #fff;

    div:nth-child(7n) {
      color: red($color: #000000);
    }
  }

  .date {
    @include calendar-layout(40px 20px 40px);
    background-color: rbga(0,0,0,0.5);
  }
}
</style>
