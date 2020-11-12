<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
        <div class="progress text-right ">
            <div class="progress-bar" role="progressbar" :style="'width: '+progression+'%'" :aria-valuenow="progression" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
</template>



<script>
export default {
    name: "IssuePreviewComponent",
    props:{
        title: String,
        progression: Number,
        warnings:[String]
    }
}
</script>