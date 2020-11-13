<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
      </div>
    </div>
</template>



<script>
export default {
    name: "TaskPreviewComponent",
    props:{
        title: String,
        status: Boolean,
        warnings:[String]
    }
}
</script>