<template>
    <div>
        <div>
        <p>Voulez vous vraiment supprimer?</p>
        </div>
        <div>
            <button>Oui</button>
            <button type="button" @click="$emit('close')">Non</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'SupprimerRecetteModale',
  data() {
    return {

    };
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0fr 0fr 0fr;
  width: 900px;
  margin-top: 70px;
  margin-left: 450px;
  padding: 20px 30px;
  background-color: #fff;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Architects Daughter", cursive;
}

.modal-footer {
  grid-column: 1/3;
  grid-row: 3;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.modal-footer button {
  padding: 20px;
  font-size: 150%;
  font-family: "Architects Daughter", cursive;
  background-color: rgb(0, 0, 0);
  color: white;
  border-style: none;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.modal-footer button:hover {
  background-color: rgb(255, 196, 0);
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
