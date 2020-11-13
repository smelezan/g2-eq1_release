<template>
    <div class="main">
        <h3>Modifier l'issue</h3>
        <form>
            <div class="form-group">
                <label for="Title">Titre</label>
                <input type="text" class="form-control" id="Title" :placeholder="title" v-model="newTitle">
                <small  class="form-text text-muted">Champ obligatoire</small>
            </div>
            <div class="form-group">
                <label for="Description">Description</label>
                <textarea class="form-control" id="Description" :placeholder="description" v-model="newDescription" rows="6"></textarea>
                <small class="form-text text-muted">Champ obligatoire</small>
            </div>
            <div class="form-group">
                <label for="Difficulty">Difficulté</label>
                <input type="text" class="form-control" id="Difficulty" :placeholder="difficulty" readonly>
            </div>
            <div class="form-group">
                <label for="Priority">Priorité</label>
                <input type="text" class="form-control" id="Priority" :placeholder="priority" readonly>
            </div>
            <div class="form-group">
                <label for="Sprint">Sprint</label>
                <input type="text" class="form-control" id="Sprint" :placeholder="sprint" readonly>
            </div>
            <div class="form-group">
                
            </div>
        </form>
        <div>
            <button class="btn btn-primary" @click="updateIssue">Modifier</button>
            <button class="btn btn-primary" @click="cancelIssue">Cancel</button>
        </div>
    </div>
</template>



<script>
export default {
    props:{
        _id: {
            type: String
        },
        title:{
            type: String
        },
        description: {
            type: String
        },
        difficulty: {
            type: Number
        },
        priority:{
            type: String,
            default: "To Do"
        },
        sprint:{
            type: String,
            default: ""
        }
    
    },
    data(){
        return{
            newTitle: this.title,
            newDescription: this.description,
            updateIssue :()=>{
                let issue = { 
                    title: this.newTitle,
                    description: this.newDescription,
                    };
                this.axios.put(this.$proxy+'/issues/'+this._id, issue);
                window.location.reload()
            },
            cancelIssue :()=>{
                this.newTitle = this.title,
                this.newDescription = this.description
            }
        }
    },

    
}
</script>

<style scoped>
</style>