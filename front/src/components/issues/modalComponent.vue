<template>
    <div class="bloc-modale" v-if ="revele">
        <div class="overlay " @click="toggleModale">
            <div class="modale card">
                <div class="btn-modale btn btn-danger">
                    X
                </div>
                <h2>Voulez vous vraiment supprimer cette issue ?</h2>
                <button class="btn btn-danger" @click="deleteIssue"> Supprimer</button>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name:"modal",
    props:{
        revele : {
            type: Boolean
        },
        toggleModale: {
            type: Function
        },
        idIssue:{
            type:String
        }
    },
    methods:{
        deleteIssue: function(){
            this.axios.delete(this.$proxyIssues+'/issues/'+this.idIssue)
            .then(()=> window.location.reload())
        }
    }
}
</script>



<style scoped>
    body{
        width: 100%;
        height: 100%;
    }
    .bloc-modale{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 3000;
    }
    .overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .modale{
        background: #f1f1f1;
        color: #333;
        padding: fixed;
        top: 400px;
        margin-left: 40%;
        margin-right: 40%;
        min-width: 400px;
        min-height: 200px;
    }

    .btn-modale{
        position: absolute;
        top:10px;
        right: 10px;
    }
</style>