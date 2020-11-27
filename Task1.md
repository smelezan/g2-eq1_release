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
                Initialiser le projet Vue.js nommé "" <br>
                Et installer les dépendances:
                <ul>
                    <li>Axios : pour les appels à l'api</li>
                    <li>Router: pour les routes</li>
                    <li>Bootstrap: pour la vue</li>
                </ul>
            </td>
            <td>Toutes les issues</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Initialiser le projet nodeJs nommé "issues-back" <br>
                Et installer les dépendances:
                <ul>
                    <li>Express : pour lancer le serveur</li>
                    <li>Nodemon: pour éviter de recharger la page</li>
                </ul>
            </td>
            <td>Toutes les issues</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Ajouter les routes CRUD à issues-back <br>
                <ul>
                    <li><code>GET /issues</code> : Renvoie la liste des issues </li>
                    <li> 
                        <code>POST /issues</code> : Crée une issue à l'aide des informations suivantes
                        <ul>
                            <li>Titre</li>
                            <li>Description</li>
                            <li>Type ( Feature, documentation) </li>
                        </ul>
                    </li>
                    <li><code>PUT /issues/:issue</code> : Modifie une issue en particulier</li>
                    <li> <code>DELETE /issues/:issue</code> :Supprime une issue</li>
                </ul>
            </td>
            <td>8-20</td>
            <td>2</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Créer la base de donnée mongo qui stockera les issues (Issue-Sprint-db).<br>
                Cette base sera composée d'une collection nommée Issue.<br>
                Chaque issue est composée:
                <ul>
                    <li> D'un id: _id</li>
                    <li> D'un titre: title</li>
                    <li> D'une description: description</li>
                    <li> D'un type: type</li>
                    <li> D'une difficulté: difficulty</li>
                    <li> D'une priorité: priority </li>
                    <li> D'un état d'avancement: state </li>
                </ul>
            </td>
            <td>8-20</td>
            <td>Dépendances</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>11</td>
            <td>
            Créer la page des sprints (IndexSprint.vue).<br>
            Sur cette page il y un bouton "Ajouter un sprint"<br>
            Un tableau intitulé 'Non assigné' qui liste les Issues n'appartenant à aucun sprint.
            </td>
            <td>4-5</td>
            <td>1</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>17</td>
            <td>
            Créer la Vue DifficultyManagement.vue <br>
            Cette vue est composée
            <ul>
                <li>D'un tableau intitulé "non assigné" : listant toutes les Issues sans difficultés</li>
                <li>D'une suite de tableaux : triés dans l'ordre croissant en fonction de la difficulté qu'ils représentent de gauche à droite <br>
                les issues ayant la même difficultés sont dans le même tableau. 
                </li>
            </ul>
            Il y aura aussi les boutons
            <ul>
                <li>Ajouter un niveau de difficulté</li>
                <li>Sauvegarder</li>
                <li>Annuler</li>
            </ul>
            </td>
            <td>10</td>
            <td>1</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>18</td>
            <td>
            Dans la Vue DifficultyManagement.vue <br>
            Permettre à l'utilisateur de glisser une issue d'un tableau à un autre en Drag and Drop.<br>
            </td>
            <td>10</td>
            <td>17</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>19</td>
            <td>
            Dans la Vue DifficultyManagement.vue <br>
            Ajouter l'évènement onClick au bouton "Ajouter une difficulté<br>
            Cet évènement va créer un nouveau tableau à la droite du dernier <br>
            Ce tableau aura pour titre : "Difficulté: N"  où N est le N'ième terme de la suite de fibonacci.
            </td>
            <td>10</td>
            <td>17</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>20</td>
            <td>
            Dans la Vue DifficultyManagement.vue <br>
            Ajouter l'évènement onClick au bouton "Sauvegarder"<br>
            Cet évènement va envoyer au serveur l'ensemble des tableaux des issues, en passant par la route<br>
             <code>POST issues/manageDifficulty</code> <br>
            </td>
            <td>10</td>
            <td>17, 26</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>21</td>
            <td>
            Dans la Vue DifficultyManagement.vue <br>
            Ajouter l'évènement onClick au bouton "Annuler"<br>
            Cet évènement va récupérer les issues, en passant par la route<br>
             <code>GET issues/</code> <br>
            Et va les trier dans les différents tableaux en fonction de leurs difficultés.
            </td>
            <td>10</td>
            <td>17</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>22</td>
            <td>
            Créer la page IndexIssues.vue<br>
            Sur cette page il y a une liste d'issue<br>
            chaque issue est une carte composée:
            <ul>
                <li>D'un titre</li>
                <li>D'une barre de progression </li>
                <li>D'un icon "warning"</li>
                <li>D'un bouton "supprimer"</li>
            </ul>
            Il y a aussi les boutons:
            <ul>
                <li> Ajouter une issue</li>
                <li> Gérer les difficultés</li>
                <li> Gérer les priorités</li>
            </ul>
            </td>
            <td>8</td>
            <td>1</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>23</td>
            <td>
            Créer l'évènement onClick sur une Issue<br>
            Cet évènement ouvre une fenêtre à côté dans laquelle se trouve un récapitulatif détaillé d'une Issue. <br>
            Ce récapitulatif est composé de plusieurs champs modifiables ou non. 
            <ul>
                <li>Champ Titre: (modifiable)</li>
                <li>Champ Description: (modifiable)</li>
                <li>Champ Difficulté: (non modifiable)</li>
                <li>Champ Priorité: (non modifiable)</li>
                <li>Sprint dans lequel il apparait: (non modifiable)</li>
            </ul>
            Mais aussi les boutons grisés si aucune modiffication n'a eu lieu :
            <ul>
                <li>Appliquer</li>
                <li>Annuler</li>
            </ul>
            </td>
            <td>9</td>
            <td>22</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>24</td>
            <td>
            Créer l'évènement onClick sur le bouton "Annuler" sur la fenêtre récapitulative d'une Issue<br>
            Cet évènement appelle la route <code>GET /Issues/:issue</code>, qui va récupérer le précédent enregistrement de l'issue dans la base afin de l'afficher dans la fenêtre.
            </td>
            <td>9</td>
            <td>23</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>25</td>
            <td>
            Créer l'évènement onClick sur le bouton "Sauvegarder" sur la fenêtre récapitulative d'une Issue<br>
            Cet évènement appelle la route <code>Post /Issues/:issue</code>, qui va envoyer au server l'issue modifiée qui sera mise à jour dans la base de donnée.
            </td>
            <td>9</td>
            <td>23</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>26</td>
            <td>
            Dans le serveur Issues-back <br>
            Créer la route <code>Put Issues/manageDifficulty</code><br>
            Cette route prends en entré une liste d'objet <code>Difficulty</code><br>
            Difficulty est composée:
            <ul>
                <li>d'un attribut difficulty (Int) : qui est la difficulté attribuée</li>
                <li>d'un issues ([Issues]) : la liste des Issues associée à cette difficulté</li>
            </ul>
            Elle met ensuite à jour le champ "difficulty" des Issues dans la base.
            </td>
            <td>10</td>
            <td>23</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>27</td>
            <td>
            Créer la vue  CreateIssueComponent.vue, accessible depuis le bouton "Ajouter une Issue" sur la vue IndexIssueComponent.vue <br>
            Sur cette vue il y a un formulaire composé:
            <ul>
                <li>d'un champ nom ( Text) </li>
                <li>d'un champ description ( Text) </li>
                <li>d'un champ type (Option) </li>
                <li>d'un bouton ajouter</li>
            </ul>
            Une fois cliqué sur le bouton ajouter, nous appelons la méthode "createIssue"<br>
            Cette méthode va envoyer un objet Issue remplie depuis le formulaire au serveur <br>
            en passant par la route <code>POST /issues</code>
            Et redirige l'utilisateur sur l'écran d'accueil.
            </td>
            <td>8</td>
            <td>3</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
        <tr>
            <td>28</td>
            <td>
            Dans la vue IndexIssueComponent.vue<br>
            Créer l'évenèment lié au bouton "supprimer" <br>
            Cet évenèment va créer un popup composé
            <ul>
                <li>D'un text: "Voulez vous vraiment supprimer cette issue ? " </li>
                <li>D'un bouton "valider" : qui confirme la suppression</li>
                <li>D'un bouton "annuler" : qui annule la suppression</li>
            </ul>
            Si le bouton "valider" est sélectionné, la fonction "deleteIssue" est appelé et va appeler la route <code> DELETE Issues/:issue </code> qui va supprimer l'issue de la base de donnée.<br>
            Sinon, le popup disparaîtra.
            </td>
            <td>12</td>
            <td>22</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>Done</td>
        </tr>
    </tbody>
</table>