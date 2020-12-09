<template>
    <v-app id="inspire">
        <v-card>
        <v-main>
            <h2 style="color:grey">{{params}}</h2>
            <v-tabs
                 color="green"
                v-model="active_tab"
            >
              <v-tab
                v-for="item in items"
                :key="item.tab"
                >
                {{ item.tab }}
            </v-tab>
            </v-tabs>
            <!-- <span>
                <router-link 
                    :to="`/Project/${params}/create-issue`"
                >
                    <button class="btn btn-primary">Ajouter une Issue</button>
                </router-link>
            </span>   -->
            <v-tabs-items v-model="active_tab">
                <v-tab-item
                    v-for="item in items"
                    :key="item.tab"
                >
                    <v-card  v-if="item.tab=='Issues'" flat>
                        <component :is=IssuesKanbanBoard :Kanban_Name="item.tab">
                        </component>
                    </v-card>
                    <v-card  v-if="item.tab=='Sprints'" flat>
                        <component :is=SprintsKanbanBoard :Kanban_Name="item.tab">
                        </component>
                    </v-card>
                    <v-card  v-if="item.tab=='Tâches'" flat>
                        <component :is=TasksKanbanBoard :Kanban_Name="item.tab">
                        </component>
                    </v-card>
                    <v-card  v-if="item.type=='ReleaseDashBoard'" flat>
                        <component :is=ReleaseDashBoard>
                        </component>
                    </v-card>
                    <v-card  v-if="item.type=='Dashboard'" flat>
                        <component :is=DashBoard>
                        </component>
                    </v-card>
                    <v-card  v-if="item.type=='DocumentationDashBoard'" flat>
                        <component :is=DocumentationDashBoard>
                        </component>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
        </v-card>
    </v-app>
</template>

<script>
    import IssuesKanbanBoard from '@/components/IssuesKanbanBoard'
    import SprintsKanbanBoard from '@/components/sprints/SprintsIndexBoard'
    import TasksKanbanBoard from '@/components/TasksKanbanBoard'
    import DashBoard from '@/components/DashBoard'
    import ReleaseDashBoard from '@/components/ReleaseDashBoard'
    import DocumentationDashBoard from '@/components/DocumentationDashBoard'

    export default {
        data: function() {
            return{
                active_tab: 3,
                IssuesKanbanBoard,
                SprintsKanbanBoard,
                TasksKanbanBoard,
                ReleaseDashBoard,
                DocumentationDashBoard,                
                DashBoard,
                params: '',
                 tab: null,
                items: [
                { tab: 'Sprints', type: 'Kanban' },
                { tab: 'Issues', type: 'Kanban' },
                { tab: 'Tâches', type: 'Kanban' },
                { tab: 'Releases', type: 'ReleaseDashBoard' },
                { tab: 'Tests', type: 'Dashboard', active_tab: '4' },
                { tab: 'Documentations', type: 'DocumentationDashBoard' },
                ],
            }
        },
        mounted: function() {
            this.params = this.$route.params.id
            this.active_tab = parseInt(this.$route.params.active_tab)

        }

    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
</style>

