<template>
  <div>
    <h1>Sprints</h1>
      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
        >
          <v-expansion-panel-header>
            <h2 class="sprint-name"> Sprint {{i+1}} </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="sprint-table">
              <draggable v-model="myArray" @end="onEnd">
                <transition-group type="transition" name="flip-list">
                  <ul class="sortable" :id="element.id" v-for="element in myArray" :key="element.id">
                  <li>US:{{element.id}}</li>
                  <!-- <p> {{element.name}}</p> -->
                  </ul>
                </transition-group>
              </draggable>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    <div class="row mt-5">
      <v-col md="5">
      <h3>Issues non assignés :</h3>
      </v-col>
    </div>

      <div class="wrapper" >
          <div class="item" v-for="issue in unasignedIssues" :key="issue">
            <IssueItemComponent :id="issue" />
          </div>
      </div>
  </div>
</template>

<script>
import IssueItemComponent from "./sprints/subComponents/IssueItemComponent";
import draggable from 'vuedraggable'
export default {
  components: {
    IssueItemComponent,
    draggable,
  },
  data() {
    return {
        unasignedIssues: [],
        myArray: [
          {name: " En tant qu'Utilisateur, Je souhaite à partir de la page des sprints pouvoir cliquer sur ajouter un sprint qui m'affichera un formulaire sous forme de popup composé des champs: Date de début Date de fin une fois confirmé, un tableau vide est créé. afin d'y ajouter des Issues.", id:4},
          {name: " En tant que Utilisateur Je souhaite à partir de la page des Issues avoir accès à la liste des Issues déjà créées Dans cette liste, une Issue sera représentée par une carte composée de: Son nom Une barre de progression ( calculé en fonction des Tâches réalisées liées à cette Issue ) Un potentiel Icone Warning m'informant D'un retard d'une des Tâches liées D'un manque d'information ( priorité, difficulté ) Aucune Tâches associée à cette Issue. Un code couleur représentant sa difficulté Un dégradé de jaune à rouge, jaune étant le plus facile.", id:7},
          {name: " En tant qu'utilisateur. Je souhaite à partir de la page des Issues.pouvoir cliquer sur le bouton Ajouter une issue. qui me redirigera vers la page de création d'une issue. Afin d'accéder à un formulaire composé des champs: Nom: Text ( < 20 char ) Description: Text De son type : Menu déroulant ( Feature , etc... ) et d'un bouton ajouter qui nous renverra sur la page qui liste les issues.", id:8},
          {name: " En tant qu'utilisateur Je souhaite à partir de la page qui liste les Issues pouvoir cliquer sur une issue Afin d'accéder à un récapitulatif avec certains champs modifiables:Champ nom (modifiable) Champ description (modifiable)Difficulté (non modifiable)Priorité ( non modifiable) Sprint dans lequel il apparait ( non modifiable) Ainsi qu'à un bouton sauvegarder les changements qui à partir des champs modifiables va mettre à jour l'issue. Pour enfin nous ramener à la nouvelle liste des issues.	", id:9},
          {name: " En tant qu'utilisateur Je souhaite à partir de la page de liste des Issues pouvoir cliquer sur Gérer la difficulté des Issues Afin d'accéder à la page de gestion des Issues qui sera composée de plusieurs colonnes: La première contenant toutes les issues dont la difficulté n'est pas attribuée. Pour le reste des colonnes: Toutes les issues de la même colonne auront la même difficulté. Les issues dans une colonnes seront toujours plus difficiles que celles de la colonne qui se trouve à leur gauche.", id:10},
          {name: " En tant qu'utilisateur Je souhaite à partir de l'onglet Issues Pouvoir cliquer sur le bouton supprimer à côté de l'Issue sélectionné afin de l'enlever de ma liste des Issues.", id:5},
        ],
        oldIndex:'',
        newIndex: ''
    }
  },
  methods: {
    onEnd: function(evt) {
      console.log(evt)
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    },
    log(event, id) {
      console.log(event);
      console.log(id);
    },
    sortIssues(issues) {
      this.unasignedIssues = [];
      for (const issue of issues) {
        let issueFound = false;
        for (const sprint of this.sprints) {
          issueFound = sprint.issues.some((issueOfSprint) => {
            return issueOfSprint === issue._id;
          });
          if (issueFound) break;
        }
        if (!issueFound) {
          this.unasignedIssues.push(issue._id);
        }
      }
    },
  },
  created() {
    this.axios.get(this.$proxyIssues + "/sprints").then((response) => {
      this.sprints = response.data;
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.issues = response.data;
        this.sortIssues(this.issues);
        this.sortSprints();
      });
    });
  },
};
</script>

<style>
  .wrapper {
    max-height: 120px;
    border: 0px solid #ddd;
    display: flex;
    overflow-x: auto;
  }

  .wrapper::-webkit-scrollbar{
    width: 0;
  }

  .wrapper .item{
    border-radius: 10%;
    min-width: 350px;
    height: 110px;
    line-height: 110px;
    text-align: center;
    background-color: #F0F8FF;
    margin-right: 10px;
  }

  .sprint-name {
    background: white;
    font-family: 'Courier New', Courier, monospace;
    padding: 0.5em;
  }
  .sprint-table {
    background: rgba(211, 211, 211, 0.219);
    width: 95%;
  }

  .sortable {
    width: 100%;
    background: white;
    padding: 1em;
    cursor: move;
    margin-bottom: 2px;
    margin-top: 2px;
    border-radius: 0.5cm;
  }

  .flip-list-move {
    transition: transform 0.3s;
  }

</style>