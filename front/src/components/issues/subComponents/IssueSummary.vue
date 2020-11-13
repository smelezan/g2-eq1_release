<template>
    <div class="list-group-item d-flex justify-content-between align-items-center">
        {{title}}
    <span class="badge badge-primary badge-pill">{{difficulty}}</span>
    </div>
</template>




<script>
export default {
    name: 'IssueSummary',
    props:{
        title:String,
        difficulty: Number
    },
    
    methods:{
        
    }
}
</script>