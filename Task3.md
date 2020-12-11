<table>
    <tbody>
        <tr>
            <th>ID</th>
            <th>Definition Of Done</th>
            <th>Issues</th>
            <th>Dépendances</th>
            <th>Coût</th>
            <th>Développeur</th>
            <th>Avancement</th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                Mettre en place projects-back.
            </td>
            <td>1,2,3</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Mettre en place releases/docs-back.
            </td>
            <td>31,32</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>3</td>
                <td>
                Modifier indexIssueComponent.vue afin de n'afficher que les Issues d'un projet.
            </td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Ajouter allIssuesComponent.vue qui affiche toutes mes Issues.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>5</td>
            <td>
                Modifier indexTasksComponent.vue afin de n'afficher que les Task d'un projet.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>6</td>
            <td>
                Ajouter allTasksComponent.vue qui affiche toute mes Tâches.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>7</td>
            <td>
                Modifier indexTestsComponent.vue afin de n'afficher que les Tests d'un projet.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>8</td>
            <td>
                Ajouter allTestsComponent.vue qui afficher tous mes Tests.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>9</td>
            <td>
                Modifier le docker-compose pour y ajouter les nouveaux serveurs et bases de données
            </td>
            <td>Tous</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>10</td>
            <td>
                Mapper la barre de progression avec les issues qui sont dedans.
                Elle doit changer en fonction du nombre de US fermées.
            </td>
            <td>5</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>11</td>
            <td>
                Ajouter ReleaseComponent.vue qui contient les info des releases (version, nom, date, issues liées)
            </td>
            <td>31</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>12</td>
            <td>
                Permettre d'ajouter une release, ainsi que de télécharger.
            </td>
            <td>32</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>13</td>
            <td>
                Ajouter DocComponent.vue qui contient les info des documentations </br>
                et permet d'en ajouter/modifier/supprimer.
            </td>
            <td>33</td>
            <td>0</td>
            <td>1</td>
            <td>Dev</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>14</td>
            <td>
                Créer une route getLastReleaseInfos sur le back  des releases</br>
                qui va récupérer toutes les informations importantes de la release précédente.</br>
                La version et la liste des issues.
            </td>
            <td>31</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>15</td>
            <td>
                Créer la fonction createNewVersion dans la vue ReleaseDashbord </br>
                qui à partir d'une qualification ( "PATCH','MINOR","MAJOR"),</br> 
                il construit une nouvelle version dans le format vMajor.Minor.Patch basé sur la version précédente.
            </td>
            <td>31</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>16</td>
            <td>
                Mapper le bouton delete sur le sprint à la fonction deleteSprint </br> 
                qui va supprimer le sprint dans la base de donnée.
            </td>
            <td>31</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>17</td>
            <td>
                Créer un component ProjectTile qui est une v-card avec un titre associé à un router-link. </br> 
                qui va rediriger le clique vers la page du projet.
            </td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>18</td>
            <td>
                Créer une v-card qui contient une icone "+" Ajouter un projet au milieu.  Associer à cette icone cliquable un formulaire contenant les champs Nom, Description, Valider. </br> 
                qui va rediriger le clique vers un pop-up de création d'un projet.
            </td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
         <tr>
            <td>19</td>
            <td>
                  Ajouter la v-card à la page d'acceuil Home.vue
                   </br> 
                qui va rediriger le clique vers un pop-up de création d'un projet.
            </td>
            <td>1</td>
            <td>18</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>20</td>
            <td>
                   Ajouter au fichier index.js le pattern pour accéder à la page d'un projet de nom id :  /Project/:id
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Associer à la route d'un projet  /Project/:id/  au component Project.vue
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>22</td>
            <td>Récupérer l'id du projet dans la route this.$route.params, l'envoyer, props, dans le component Project.vue puis l'afficher sur la page du projet.
            </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>23</td>
            <td> Implement dans le component Project.vue une VTabs et y ajouter les tables "Sprints" "Issues" "Taches" "Releases" "Tests" "Documentation" </td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>24</td>
               <td> Ajouter l'icone clear au component ProjectTile.vue au même niveau que le titre du projet             </td>
            <td>3</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>25</td>
                  <td>   Ajouter la boite de dialogue qui demande la confirmation de la suppression du projet            </td>
            <td>3</td>
            <td>0</td>
            <td>1</td>
            <td>Emmanoe</td>
            <td>DONE</td>
        </tr>
    </tbody>
</table>
