<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="col1">
            <p style="font-size: 25px"></p>
            <div>
              <p>Voulez vous vraiment supprimer?</p>
            </div>
            <div>
              <button
                class="confirmeDelete"
                @click="deleteRecetteConfirmation();"
              >
                Oui
              </button>
              <button
                class="cancelDelete"
                type="button"
                @click="$emit('close')"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SupprimerRecetteModale',
  props: ['idSelected'],
  data() {
    return {
      idReceive: this.idSelected,
    };
  },

  methods: {
    ...mapActions(['deleteRecette']),

    deleteRecetteConfirmation() {
      this.deleteRecette(this.idReceive);
      this.$emit('closeNReload');
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.801);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: inline-flex
}

.modal-container {
  width: 400px;
  padding: 20px;
  margin-top: 300px;
  background-color: #fff;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Architects Daughter", cursive;
}

.modal-default-button {
  float: right;
}

.modal-footer button:hover {
  background-color: rgb(255, 196, 0);
}

p {
  font-size: 20px;
  font-weight: bold;
}

button {
  font-family: "Architects Daughter", cursive;
  height: 35px;
  font-size: 20px;
  border-style: solid;
  color: white;
  border-style: none;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  margin-right: 2%;
  margin-left: 2%;
}

.confirmeDelete {
  background-color: rgb(14, 172, 0);
}

.cancelDelete {
  background-color: rgb(230, 0, 0);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
