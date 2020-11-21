<template>
    <div class="main">
        <h3>Task</h3>
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
                <label for="Sprint">Sprint</label>
                <input type="text" class="form-control" id="Sprint" :placeholder="sprint" readonly>
            </div>
            <div class="form-group">
            </div>
        </form>
    </div>
</template>
