<table>
    <tbody>
        <tr>
            <th>Id</th>
            <th>Issues</th>
            <th>Description</th>
            <th>Cout</th>
            <th>Dépendance</th>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
                Créer la page html issues/.<br>
                Sur cette page il y a:
                <ul>
                    <li>
                        Un header: nom de l'application , un icon pour l'utilisateur
                    </li>
                    <li>
                        La liste des issues
                    </li>
                </ul>
                A ce stade les issues seront des objets créés localement.
                Sur cette page une issue à la forme d'une carte colorée en fonction de la difficulté:
                <ul>
                    <li>Rouge:</li>
                    <li>Orange:</li>
                    <li>Jaune:</li>
                </ul>
                Cette  carte est composée de:
                <ul>
                    <li>Son nom</li>
                    <li>Une barre de progression: bootstrap</li>
                    <li>Un icon cliquable qui ouvre une fenêtre contenant du texte  </li>
                    <li>Un icon cliquable qui ouvre une fenêtre</li>
                </ul>
            </td>
            <td>
                1
            </td>
            <td>  
                Aucune 
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
               Créer le serveur express.js, qui gère les issues. <br>
               Avec pour route:
               <ul>
                    <li>
                        Get /Issues/:id_project: renvoie la liste des issues appartenant au projet (:id_projet) 
                    </li>
               </ul>
            </td>
            <td>
                1
            </td>
            <td>  
                Aucune 
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
               Initialiser la base de donnée, (mongoDb / mySql)
               Et créer un fichier pour la remplir automatiquement avec des valeurs tests.
            </td>
            <td>
                1
            </td>
            <td>  
                Aucune 
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
               Créer la table Issues par rapport au schéma.<br>
               Une issue est composée de:
                <ul>
                    <li>
                        Un Id (int) :généré automatiquement
                    </li>
                    <li>
                        Un Project_Id (int) 
                    </li>
                    <li>
                        Un Sprint_Id (int)
                    </li>
                    <li>
                        Un Nom(string): limité à 10 mots
                    </li>
                    <li>
                        Une description (Text)
                    </li>
                    <li>
                        Un type (Enum): Feature/Documentation/...
                    </li>
                    <li>
                        Priorité (Enum): Faible/Moyenne/Forte
                    </li>
                    <li>
                        Difficulté (int): Fibonacci
                    </li>
                </ul>
            </td>
            <td>
                1
            </td>
            <td> 
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
                Lier le front et le backend afin d'afficher les issues mais cette fois envoyés par le backend.
            </td>
            <td>
                1
            </td>
            <td> 
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                7
            </td>
            <td>
                Faire communiquer le backend avec la base de données.
                afin d'envoyer au front, les données de la base.
            </td>
            <td>
                1
            </td>
            <td> 
            </td>
        </tr>
    </tbody>
</table>




Liens Utiles:
<ul>
    <li><a href="https://getbootstrap.com/docs/4.0/components/progress/"> progress bar</a></li>
    <li><a href="https://www.arcadedatabase.com/choisir-son-type-de-base-de-donnees/"> Choisir une base de données</a></li>
    <li><a href="https://www.terlici.com/2015/08/13/mysql-node-express.html"> Installer mySql nodejs</a></li>
    <li><a href="https://gojs.net/latest/samples/PERT.html"> Dessiner un diagramme de pert en javascript</li>
</ul>

