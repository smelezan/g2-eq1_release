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
            <td>4</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DOING</td>
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
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>6</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Créer la base de donnée mongo qui stockera les tâches (Task-db).<br>
                Cette base sera composée d'une collection nommée Task.<br>
                Chaque Task est composée:
                <ul>
                    <li> D'un id : _id</li>
                    <li> D'une liste d'id qui lie à une issue : IssueIds</li>
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
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>2</td>
            <td>1</td>
            <td>Emmanoé</td>
            <td>DOING</td>
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
            <td>4</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>8</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter le déplacement d'une issue d'un tableau à un autre avec la fonctionnalité drag and drop<br>
            Ainsi qu'un bouton "Appliquer" en bas à droite de la page ,un bouton "Annuler" aussi en bas à droite, et un bouton "Supprimer" à côté de chaque tableau <br>
            </td>
            <td>5,6</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
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
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>12</td>
            <td>
            Créer la vue IndexTaskComponent.vue<br>
            Sur cette vue il y a une liste de Tâches représentées par une carte composée :
            <ul>
                <li>d'un nom</li>
                <li>d'un Icon</li>
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
            <td>22</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DOING</td>
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
            <td>29</td>
            <td>1</td>
            <td>Alexis</td>
            <td>DOING</td>
        </tr>
        <tr>
            <td>14</td>
            <td>
            Créer la fonction <code>getTotalProgession</code> qui récupère la liste des tâches et calcule le pourcentage de tâches complétées. <br>
            </td>
            <td>14</td>
            <td>29</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To do</td>
        </tr>
        <tr>
            <td>15</td>
            <td>
            Ajouter l'évènement onClick sur une Tâche <br>
            cet évènement renvoie à la vue TaskComponent.vue. <br>
            Sur cette vue il y les informations de la tâche:
            <ul>
                <li> Son titre</li>
                <li> Sa description</li>
                <li> la liste des issues associées</li>
                <li> la liste des dépendances</li>
                <li> son coût</li>
                <li> le développeur attribué</li>
            </ul>
            Et un ensemble de boutons:
            <ul>
                <li>Ajouter/modfier un développeur</li>
                <li>choisir/modfier le temps de travail</li>
                <li>Supprimer</li>
            </ul>
            </td>
            <td>15,16</td>
            <td>29</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To do</td>
        </tr>
        <tr>
            <td>16</td>
            <td>
            Créer l'évènement onClick sur les bouton "Supprimer" de la vue TaskComponent.vue<br>
            Qui va créer un popup pour confirmer la suppression et envoyer une reqête <code>DELETE /Tasks/:task</code> au serveur des tâches afin de la supprimer la base de données.
            </td>
            <td>20</td>
            <td>32</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To do</td>
        </tr>
        <tr>
            <td>17</td>
            <td>
            Créer l'évènement onClick sur les bouton "Ajouter/Modifier un développeur" de la vue TaskComponent.vue<br>
            </td>
            <td>16</td>
            <td>32</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To do</td>
        </tr>
        <tr>
            <td>18</td>
            <td>
            Créer l'évènement onClick sur les bouton "Choisir/Modifier un temps de travail" de la vue TaskComponent.vue<br>
            </td>
            <td>15</td>
            <td>32</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To do</td>
        </tr>
    </tbody>
</table>