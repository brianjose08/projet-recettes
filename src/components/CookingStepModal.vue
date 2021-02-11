<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="col1">
            <p style="font-size: 25px;">
              <b>List of cooking steps</b>
            </p>
          </div>
          <div class="col2">
            <input type="text" value="Cooking steps...">
            <button>+</button>
          </div>
          <div class="col3">
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="modal-default-button"
              @click="$emit('close')"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookingStepModal',
};
</script>

<style>
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
  width: 900px;
  margin-top: 100px;
  margin-left: 450px;
  padding: 20px 30px;
  background-color: #fff;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.col2 input {
  width: 80%;
  height: 20px;
  font-size: 20px;
  margin-right: 20px;
  border-style: solid;
}

.col2 button {
  height: 28px;
  font-size: 20px;
  border-style: solid;
}

.col3 {
  width: 100%;
  margin-top: 15px;
  height: 400px;
  border-style: solid;
}

.modal-footer {
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
