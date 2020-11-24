<template>
    <v-app id="inspire">
        <v-card>
        <v-main>
            <h2 style="color:grey">{{params}}</h2>
            <v-tabs
                v-model="tab"
            >
              <v-tab
                v-for="item in items"
                :key="item.tab"
                >
                {{ item.tab }}
            </v-tab>
            </v-tabs>
            <span>
                <router-link 
                    :to="`/Project/${params}/create-issue`"
                >
                    <button class="btn btn-primary">Ajouter une Issue</button>
                </router-link>
            </span> 
            <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="item in items"
                    :key="item.tab"
                >
                    <v-card  v-if="item.type=='Kanban'" flat>
                        <component :is=KanbanBoard :Kanban_Name="item.tab">
                        </component>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
        </v-card>
    </v-app>
</template>

<script>
    import KanbanBoard from '@/components/KanbanBoard'
    export default {
        data: function() {
            return{
                KanbanBoard,
                params: '',
                 tab: null,
                items: [
                { tab: 'Sprints', type: 'Kanban' },
                { tab: 'Issues', type: 'Kanban' },
                { tab: 'Tâches', type: 'Kanban' },
                { tab: 'Releases', type: '' },
                { tab: 'Tests', type: '' },
                { tab: 'Documentations', type: '' },
                ],
            }
        },
        mounted: function() {
            this.params = this.$route.params.id
        }

    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
</style>

