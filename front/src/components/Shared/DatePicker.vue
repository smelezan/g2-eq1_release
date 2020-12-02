<template>
    <div>
        <h1>Sélectionner la date:</h1>
        <div>
            <label for="start-datepicker">début</label>
            <b-form-datepicker id="start-datepicker" v-model="startValue" class="mb-2"></b-form-datepicker>
        </div>
        <div>
            <label for="end-datepicker">fin</label>
            <b-form-datepicker id="end-datepicker" v-model="endValue" class="mb-2"></b-form-datepicker>
        </div>  
        <div class="form-group">
          <button @click="getValues()" class="btn btn-primary">Create</button>
        </div>     
    </div>
</template>

<script>
  export default {
    data() {
      return {
        startValue: '',
        endValue: ''
      }
    },
    methods: {
        getValues() {
            this.$emit("values", {startValue:this.startValue, endValue:this.endValue});
        }
    }
  }
</script>