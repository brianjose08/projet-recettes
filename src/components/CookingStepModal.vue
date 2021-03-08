<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="col1">
            <p style="font-size: 25px">
              <b>List of cooking steps</b>
            </p>
          </div>
          <div class="col2">
            <input
              id="cookingStepDescription"
              type="text"
              v-model="step"
              placeholder="Cooking steps..."
            />
            <button
              style="font-size: 20px"
              @click="addCookingStep()"
              type="button"
            >
              Ajouter
            </button>
          </div>
          <div class="col3">
            <div
              v-for="(cookingStep, index) in getAllCookingStepTemporaire"
              v-bind:key="index"
            >
              <div class="cookingStep">
                <div>
                  <button
                    type="button"
                    @click="removeCookingStep(cookingStep.numberStep)"
                  >
                    x
                  </button>
                  <b> {{ cookingStep.numberStep }} - </b> {{ cookingStep.step }}
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="modal-default-button"
              @click="$emit('closeStep')"
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
import { mapActions } from 'vuex';

export default {
  name: 'CookingStepModal',
  props: ['boolAjouter'],
  data() {
    return {
      idStep: 1,
      step: '',
      boolReceive: this.boolAjouter,
    };
  },
  methods: {
    ...mapActions([
      'fetchCookingStepTemporaire',
      'addCookingStepTemporaire',
      'deleteCookingStepTemporaire',
    ]),

    // Method to increase/decrease cooking step number
    addSuccess() {
      this.idStep += 1;
      this.step = '';
    },
    removeSuccess() {
      this.idStep -= 1;
    },

    // Methods to add/remove cooking step
    addCookingStep() {
      const data = {
        numberStep: this.getAllCookingStepTemporaire.length + 1,
        step: this.step,
      };
      this.$emit('addStep', data);
      if (this.boolReceive) {
        this.addCookingStepTemporaire(data);
      }
      this.step = '';
    },
    removeCookingStep(idStep) {
      this.$emit('removeStep', idStep);
      if (this.boolReceive) {
        this.deleteCookingStepTemporaire(idStep);
      }
      for (let i = 0; i < this.getAllCookingStepTemporaire.length; i += 1) {
        if (this.getAllCookingStepTemporaire[i].numberStep > idStep) {
          this.getAllCookingStepTemporaire[i].numberStep -= 1;
        }
      }
    },
  },

  computed: {
    getAllCookingStepTemporaire() {
      return this.$store.state.cookingStepTemporaire.cookingStepTemp;
    },
  },
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
  transition: opacity 0.3s ease;
}

.modal-container {
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  padding: 10px 20px;
  width: 70%;
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

.col2 input {
  width: 80%;
  height: 25px;
  font-size: 20px;
  margin-right: 20px;
  border-style: solid;
  font-family: "Architects Daughter", cursive;
}

.col2 button {
  font-family: "Architects Daughter", cursive;
  height: 35px;
  font-size: 20px;
  border-style: solid;
  background-color: rgb(0, 195, 255);
  color: white;
  border-style: none;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.col3 {
  font-family: "Architects Daughter", cursive;
  width: 100%;
  margin-top: 15px;
  height: 400px;
  border-style: solid;
  overflow-y: scroll;
}

.cookingStep {
  font-size: 25px;
  text-align: left;
}
.cookingStep > div {
  display: block;
}

.cookingStep > div > button {
  font-size: 20px;
  height: 30px;
  width: 30px;
  margin: 0px 2px;
  background-color: rgb(255, 9, 9);
  color: white;
  border-style: none;
  border-radius: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
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
