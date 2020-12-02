<table>
    <tbody>
        <tr>
            <th>ID</th>
            <th>Definition Of DONE</th>
            <th>Issues</th>
            <th>Dépendances</th>
            <th>Coût</th>
            <th>Développeur</th>
            <th>Avancement</th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                Dans la base Issue-Sprint-db, 
                créer une collection nommée Sprint.<br>
                Chaque sprint est composé:
                <ul>
                    <li> D'un id</li>
                    <li> D'une date de début</li>
                    <li> D'une date de fin</li>
                    <li> D'une liste d'Issues</li>
                </ul>
            </td>
            <td>4-6</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Initialiser le projet nodeJs nommé "tasks-back" à l'aide de la commande <br>
                 node init <br>
                Et installer les dépendances:
                <ul>
                    <li>Express : pour lancer le serveur</li>
                    <li>Nodemon: pour éviter de recharger la page</li>
                </ul>
            </td>
            <td>13-20</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Ajouter les routes CRUD à tasks-back <br>
                <ul>
                    <li><code>GET /Tasks</code> : Renvoie la liste des Tâches </li>
                    <li> 
                        <code>POST /Tasks/:task</code> : Crée une tâche à l'aide des informations suivantes
                        <ul>
                            <li>Titre</li>
                            <li>Description</li>
                            <li>issues de référence</li>
                            <li>dépendance</li>
                        </ul>
                    </li>
                    <li><code>PUT /Tasks/:task</code> : Modifie une tâche en particulier</li>
                    <li> <code>DELETE /Tasks/:task</code> : Supprime une tâche</li>
                </ul>
            </td>
            <td>13-20</td>
            <td>2</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Créer la base de donnée mongo qui stockera les tâches (Task-db).<br>
                Cette base sera composée d'une collection nommée Task.<br>
                Chaque Task est composée:
                <ul>
                    <li> D'un id : _id</li>
                    <li> D'un titre : title</li>
                    <li> D'une description: description</li>
                    <li> D'un coût: cost </li>
                    <li> D'un développeur </li>
                    <li> D'un état d'avancement: state </li>
                    <li> D'une liste de dépendance avec les autres tâches: dependencies </li>
                </ul>
            </td>
            <td>13-20</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>5</td>
            <td>
                Ajouter les routes CRUD concernant les sprints à issues-back <br>
                <ul>
                    <li><code>GET /Sprints</code> : Renvoie la liste des Sprint </li>
                    <li> 
                        <code>POST /Sprints/:sprint</code> : Crée un Sprint à l'aide des informations suivantes
                        <ul>
                            <li>Date de début</li>
                            <li>Date de fin</li>
                        </ul>
                    </li>
                    <li><code>PUT /Sprints/:sprint</code> : Modifie un sprint en particulier</li>
                    <li> <code>DELETE /Sprints/:sprint</code> : Supprime un sprint</li>
                </ul>
            </td>
            <td>4-6</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>6</td>
            <td>
                Ajouter à la base Issue-Sprint-db<br>
                la collection nommée Sprint.<br>
                Chaque sprint est composée:
                <ul>
                    <li> D'un id: _id</li>
                    <li> D'une date de début : beginDate</li>
                    <li> D'une date de fin : endDate</li>
                </ul>
            </td>
            <td>4-6</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>7</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter l'évènement sur le bouton "Ajouter un sprint"<br>
            Cet évènement crée un popup qui affiche un formulaire.<br>
            Ce formulaire est composé:
            <ul>
                <li>D'un champ date : Date de début</li>
                <li>D'un champ date : Date de fin</li>
            </ul>
            Une fois validé, le front fait un appel au back via la route <code>POST /sprints/:sprint</code>, crée un nouveau sprint dans la base et l'utilisateur est redirigé sur IndexSprint.vue où un nouveau tableau se crée à droite du dernier tableau intitulé Sprint#X avec X le numéro du sprint qui s'incrémente automatiquement.
            </td>
            <td>4</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>8</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter le déplacement d'une issue d'un tableau à un autre avec la fonctionnalité drag and drop<br>
            Ainsi qu'un bouton "Appliquer" en bas à droite de la page ,un bouton "Annuler" aussi en bas à droite, et un bouton "Supprimer" à côté de chaque tableau <br>
            </td>
            <td>5,6</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>9</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement au bouton "Appliquer" au clique. <br>
            Cet évènement récupère l'emplacement de chaque issue (dans quel tableau ils apparaissent) et envoie au back par la route: <br>
            <code>POST /sprints/reattribute</code> <br>
            avec le json dans le format suivant:
            Une liste de sprint <br>
            Chaque sprint contient une liste d'issue.
            </td>
            <td>5</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>10</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement au bouton "Annuler" au clique. <br>
            Cet évènement annule toutes les modifications apportées par les déplacements des issues.<br>
            Pour ce faire le front envoie une requête<br>
            <code>GET /sprints</code> <br>
            Afin de récupérer les précédentes positions.
            </td>
            <td>5</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>11</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement aux boutons "Supprimer" au clique. <br>
            Cet évènement effectue un appel à notre api par la route: <br>
            <code>DELETE /sprints/:sprint</code> <br>
            qui va supprimer de la base de données le sprint et les issues associées à ce sprint se retrouveront dans le tableau "Non assignées"
            </td>
            <td>6</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>12</td>
            <td>
            Créer la vue IndexTaskComponent.vue<br>
            Sur cette vue il y a une liste de Tâches représentées par une carte composée :
            <ul>
                <li>d'un nom</li>
                <li>d'un Icon</li>
                <li>un bouton supprimer</li>
            </ul>
            Elle aurait aussi une couleur dépendant de son état:
            <ul>
                <li>Verte: si elle est finie</li>
                <li>Grise: sinon</li>
            </ul>
            Sur cette vue il y a aussi:
            <ul>
                <li>une barre de progression globale qui évolue en fonction du nombre de tâches effectuées. </li>
                <li>Un bouton Ajouter</li>
            </ul>
            </td>
            <td>14</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>13</td>
            <td>
            Créer l'évènement onClick sur le bouton "Ajouter" de la vue IndexTaskComponent.vue<br>
            Cet évènement va renvoyer l'utilisateur vers la vue <br>
            CreateTaskComponent.vue. <br>
            Sur cette vue il y a un formulaire composé:
            <ul>
                <li>d'un champ titre</li>
                <li>d'un champ description</li>
                <li>d'une liste d'issues que l'on peut cocher</li>
                <li>d'un bouton "Ajouter" </li>
            </ul>
            Une fois le bouton "Ajouter" sélectionné, la fonction "CreateTask" est appelée. <br>
            Cette fonction appelle la route <code>POST /tasks</code> en passant un objet tâche remplie grâce au formulaire.
            </td>
            <td>13,14</td>
            <td>12</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>14</td>
            <td>
            Créer la fonction <code>getTotalProgession</code> qui récupère la liste des tâches et calcule le pourcentage de tâches complétées. <br>
            </td>
            <td>14</td>
            <td>12</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>15</td>
            <td>
            Ajouter l'évènement onClick sur le bouton "Détail" <br>
            cet évènement renvoie à la vue TaskComponent.vue. <br>
            Sur cette vue il y les informations de la tâche:
            <ul>
                <li> Son titre</li>
                <li> Sa description</li>
                <li> la liste des issues associées</li>
                <li> la liste des dépendances</li>
                <li> son coût</li>
                <li> le développeur attribué</li>
                <li> status</li>
            </ul>
            Et les boutons:
            <ul>
                <li>Modifier</li>
                <li>Retour</li>
            </ul>
            </td>
            <td>15,16</td>
            <td>12</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>16</td>
            <td>
            Créer l'évènement onClick sur les bouton "Retour" de la vue TaskComponent.vue<br>
            Qui va renvoyer vers la vue indexTaskComponent.vue.
            </td>
            <td>20</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>17</td>
            <td>
            Modifier l'évènement onClick sur le bouton "Modifier" de la vue TaskComponent.vue<br>
            Pour qu'il y est la possibilité de choisir/modifier le développeur en charge de la tâche.
            </td>
            <td>16</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>18</td>
            <td>
            Modifier l'évènement onClick sur le bouton "Modifier" de la vue TaskComponent.vue<br>
            Pour qu'il y est la possibilité de modifier le temps de travail en incrémentant/décrémentant de 0.5.
            </td>
            <td>15</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>19</td>
            <td>
            Modifier l'évènement onClick sur le bouton "Modifier" de la vue TaskComponent.vue<br>
            Pour qu'il y est la possibilité de modifier l'état de la tâche (TO DO, DOING et DONE).
            </td>
            <td>17</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>20</td>
            <td>
            Modifier l'évènement onClick sur le bouton "Modifier" de la vue TaskComponent.vue<br>
            Pour qu'il fasse apparaître la liste de tous les Issues du projet avec chacune une checkbox pour indiqué que la tâche correspond à l'Issues en question.
            </td>
            <td>18</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>21</td>
            <td>
            Modifier l'évènement onClick sur le bouton "Modifier" de la vue TaskComponent.vue<br>
            Pour qu'il fasse apparaître la liste des tâches du projet avec chacune une checkbox pour indiqué que la tâche actuel dépend de la tâche dont la checkbox est coché.
            </td>
            <td>19</td>
            <td>15</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>22</td>
            <td>
            Créer la page IndexPriorityComponent.vue. </br>
            Sur cette page il y a 
            <ul>
                <li>Un bouton sauvegarder</li>
                <li>Un bouton annuler</li>
            </ul>
            Il y a 4 zones
            <ul>
                <li> Une comprenant les issues sans priorités </li>
                <li> Une comprenant les issues avec difficulté faible </li>
                <li> Une comprenant les issues avec difficulté moyenne </li>
                <li> Une comprenant les issues avec difficulté forte </li>
            </ul>
            </td>
            <td>11</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>23</td>
            <td>
                Créer la route <code>POST /issues/managePriorities</code> sur le serveur d'issues. <br>
                Cette route, à partir de la liste des priorités composé chacune d'une liste d'issues <br>
                va enregistrer les issues en leur modifiant leur priorités dans la base de données.
            </td>
            <td>11</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>24</td>
            <td>
            Créer l'évènement onCLick associé au bouton "Sauvegarder"<br>
            Cet évènement fais un appel au serveur d'issues<br>
            <code>POST /issues/managePriorities</code> en passant dans le body une liste d'objet ayant pour champs:
            <ul>
                <li>priority: definissant la priorité => LOW,MEDIUM,HIGH</li>
                <li>issues: liste composée de l'ensemble des issues liées à cette priorité</li>
            </ul>
            Ce bouton nous renvoie à la liste des issues.
            </td>
            <td>11</td>
            <td>22,23</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>25</td>
            <td>
            Créer l'évènement onCLick associé au bouton "Annuler"<br>
            Cet évènement fais un appel au serveur d'issues<br>
            <code>GET /issues</code> qui va récupérer la dernière sauvegarde des issues.<br>
            Ce bouton rafraichis la page.
            </td>
            <td>11</td>
            <td>22</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>26</td>
            <td>
            Créer la page "IndexTestComponent.vue"<br>
            Sur cette page il y une zone pour déposer un document json.
            Un logo ❔ 
            Si un document a déjà été déposé et validé , une zone apparait comprenant un tableau
            <ul>
                <li> l'id du test</li> 
                <li> la description du test</li> 
                <li> l'issue ou la tâche liée </li> 
                <li> la dernière exécution</li> 
                <li> le nombre d'exécutions</li> 
                <li> le résultat </li> 
            </ul> 
            </td>
            <td>24</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Emmanoé/Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>27</td>
            <td>
            Créer la fonction parseFile<br>
            Cette fonction prend en entrée un fichier <br>
            et retourne une liste d'objets tests.
            </td>
            <td>24</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>28</td>
            <td>
                Créer la fonction verifyTests<br>
                Qui va faire appel à la route <code>POST /tests/verifyTests</code>
                en passant au body l'ensemble des tests récupérés depuis le fichier. l'ensemble des issues et l'ensembles des tâches<br>
                Elle récupéra alors les tests dans deux listes.
                <ul>
                    <li> Correct: listant tous les tests qui ont réussis à être mappés sur les issues/tâches</li>
                    <li> wrong: listant tous les tests qui n'ont pas réussi à être mappés sur les issues/tâches</li>
                </ul>
                Cette fonction mettra à jour les données de Vuejs,<br> afin d'actualiser le tableau.
            </td>
            <td>24</td>
            <td>26</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>29</td>
            <td>
                Créer la route <code>POST /tests/verifyTests</code>
                Cette route prend en entrée un ensemble de tests, d'issues, et de tâches .
                et va mapper les tests aux issues et aux tâches.
                pour les mettre dans la base de donnée.
            </td>
            <td>24</td>
            <td>Aucune</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>30</td>
            <td> 
                Mapper la documentation utilisateur au bouton ❔.<br>
                Ce bouton doit indiquer à l'utilisateur comment faire les tests.<br>
                Il doit contenir les informations sur l'api utilisé ( mocha)<br>
                Et la ligne de commande à utiliser
            </td>
            <td>24</td>
            <td>26</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DOING</td>
        </tr>
    </tbody>
</table>
