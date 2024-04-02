# Laboratoire cours 11-12

[**Laboratoire cours 11-12 ****1**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.6xp8lo9ezpif)

[**Prérequis : ****1**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.ow87l5ef1vz6)

[Objectif du laboratoire 6](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.s1d1cfdc34oi)

[**Créer et styliser des clusters ****7**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.86zhcmbby4fa)

[**Créer et styliser une carte de chaleur (heatmap) ****9**](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.t1qmum80efu0)

[Créer et visualiser une couche de polygones extrudées 10](https://docs.google.com/document/d/1RMvJ2OjrlZe3YlsK7rlI5QAY4Ld-JLKV9fnR-8O9oAQ/edit#heading=h.jpcosgmr1kuw)


##

## Prérequis : 

- Ouvrir github

- Ouvrir codespace 

- Faire un git pull

![](https://lh7-us.googleusercontent.com/PEiqhjN9TVAw7nAv1KoN4u54TYikxusm77fikHWHK8rFBxRWrvS6GYA4hII43ILChFkcAfJSMEWVKkMbiOTcmJl8_8vs2QbDDquI4L7O_RfOf037ZE95vENAHswBTUm3T_HfijH7TYzNyZ73Zsr6EWw)

- Placez vous sur la branche “lab11”

Pour vérifier sur quelle branche vous êtes : 

![](https://lh7-us.googleusercontent.com/skkO_WMhS_uwTAwhw5UoxyX324D52ueNr7kVnM3PQFWim9H109Z5apwoBmPnUmWJvRf_ZbAxlYUVsC6njUws3ScJLESU0WHbCbJceCOQaYFtlZVAX351UAqOdZKxW5cE7j8RlgGq89u4sxe_z_GKfIk)

Pour changer de branche : 

![](https://lh7-us.googleusercontent.com/8tj8cF7keyxqKPPavRVsn_xH9z7AUoaomSbATKrM2Xw1zJ0esVLqTL94Mv8VeVY0F_ZU99XBlsPZWHkKpVMJU1h6BOB-INE9qIYHM4U-T-bse9ns35kNcyl6MNy2od6jKtzSzHYOxvY9DhshpbVwstY)

![](https://lh7-us.googleusercontent.com/uAx3D73Jb63GS9Y0yVgawIesuz3DujoPgcY7KHqGkbcBZbRoryx0tMO7qV7adnx8Ikz4v260S0oagb7wZmyBELiQo8p01lM5bHeZ6-192POXMuK5CKsJUbkVNWldgOCSpE31rWla2qaO1CSyUHJOsjE)

Une fois que vous avez basculé il est simple de le savoir

![](https://lh7-us.googleusercontent.com/HdPIoeygi5e9AjUCYDi_HlAggxpQ5dpv17Or08c2QvYXuASDn-e_IbRYN5NnEJorAx_YUFq_2uMUU8RZ0BIMMI_EISMi5PB_CIlPi2A1jza84k4gl8i3AOWesrMa5vMOmjzzlG7zGcMPKEi5b4T5DzY)

Si ce n’est pas déjà fait installer l’extension DOCKER (ctrl+shift+x) ou simplement sur l’icône de blocks sur le côté gauche

Chercher Docker et installer l’extension

![](https://lh7-us.googleusercontent.com/p0pLTcapi9GR8Jf-96At_W0CsJx0TYtWQpERNKVIBhmRXd92gTOMKiNLeq6tmk2su63bTkoCAUF41JYZOvGiV-DntOB1JY-M4kQlk7cv8k63e60YnOV_ULLxiTVDFm9dwkhEssBmjxCHJ96q-cnG5WI)

!! Avant de lancer les containers applicatifs, assurez vous d’avoir copier coller le fichier .env.example , de remplir les variables d’environnement et de renommer le fichier en .env

![](https://lh7-us.googleusercontent.com/OcOEyUVSiBEyL7b9v-wIFvjZ7prB0TNh5XvbBtIq2N3d1jfEie7rFzoLi_RDJ_QfyjaJBuiYS3-fDXDIce7SBJkeUAZgTmDzpkQ3tl7HVaCimtplY4523OkIMNWcT7vCZz9QedgGZSgpV0CVB4LH-1c)

Monter les containers avec Docker compose up

Faites un clic droit sur le ficher .yaml et choisissez compose up

![](https://lh7-us.googleusercontent.com/DAszHCjTYyhuAuGLzuV3x7S68JfbivDSG43TH5XxAQ9-V5JzMHCPz30Oe1j8XscTMkqKpHJs8zQ5znbbNkrLl2He2jP-uOVNbp2kbm_yy-WEtXQ5u1Cr2C6zMKr0_3WIrq7sE_2lb5RUCErBk38C2P8)

Vérifier que vous avez accès à la page web de l’Atlas en vous assurant que les containers soit tous au vert (sinon relancer les avec un clic droit Start ou Restart)

![](https://lh7-us.googleusercontent.com/bW6LOTUJmbdrjXkIzmyW8iFSRBzisT-5uNb9rvfsIA4tlSk8Q-adcuI8nETLB_UVC_PBBJGtOtCs2tHvhh036OIxsmuW5vgrxaRbh2Iqz8UvBT88uY3oGYjHcNhWula0y4xDfhdmzUIG5MmXmJIorfc)

Cela devrait ouvrir un nouvel onglet avec l’atlas


## ![](https://lh7-us.googleusercontent.com/dcensSRc5JHBqjTMWcLK-WvYHviu28LrsCP7YUCPOBeFX3sMBhJZYcm8RRJS9b_1ZaFaBJbm-dtXOmoaYkkOygNK53UnvYczVCgpX6CZAjnTORVCWo0Q8U1_lwTehARXnv8D8Khe-8JRf7I3HiJY_fI)

### Objectif du laboratoire

Ici le but du laboratoire est de vous familiariser avec les outils de développement (VS Code) et l’API Maplibre pour injecter des modules javascript de visualisation et de contrôle avancés de cartographie web. Avec les 2 derniers laboratoires vous avez donc pris en main ces outils, ici je ne fournirais pas de tutoriel exhaustif mais plutôt les grandes lignes des choses à faire pour que vous puissiez tester vous même votre montée en compétence.


###

## Créer et styliser des clusters

Documentation : [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/cluster/)

1. Créez un nouveau module javascript \`renderClusters.js\` à la racine du dossier lab 11 

2. Dans ce module ajoutez une nouvelle fonction :

   1.  **\`function generateClusters() {}\`**

3. Dans la fonction commencez par nettoyer les layers existants avec la fonctionnalité vu en classe : 

   1. **\`removeAllLayersAndSources()\`**

4. Dans le module renderClusters.js  ajoutez une nouvelle source geojson qui comprend la propriété **\`CLUSTER:TRUE\`** comme dans la documentation maplibre ci haut.

5. La propriété **\`data\`** dans la configuration **addLayer** doit référer à la variable **\`randomPoints\`** du module javascript **\`randomPoints.js\`**

   1. ****![](https://lh7-us.googleusercontent.com/HvhLjoKBdwoTQ4c43Wwsc8M8ya02dYW_CsZeuUu-GXkhC9C_6ICFTxXxyPU6eMimh3sO0XDUpPJAbkflRNvQ06z7er6b-VGJ8GMPeBHxC8Omf2aEeRCS6sa-_RdJsKOx_Z45j7ZBEdfgW6GdpW7JOFA)****

6. Une fois terminé, ajoutez l’écouteur d'événement pour exécuter cette fonction lors du clic sur le bouton comme vu en classe

   1. document

   2.   .getElementById('generateClusters') // id unique du bouton

   3.   .addEventListener('click', generateClusters); // ajoute un event de type click qui lance la fonction generateClusters()

   4.

7. Le **\<button>** id du bouton se nomme : **\`'generateClusters'\`**

8. N’oubliez pas d’ajouter la source du module javascript dans le fichier html **index.html**

![](https://lh7-us.googleusercontent.com/BRan0mUqMTae7QFGN0GMKBKWh13_BYfP-XuG68u5EXWZENjc-3VHkyVAB2pwF5eLAICE_Ef3RBJIqC9TLHr7-0SyuuPS3YM_CkrA0iCt6ZrrxlPMR3HUcX4ILKdTzu5I-y10A_4PR3wmRGC9loss80c)


##

## Créer et styliser une carte de chaleur (heatmap)

Documentation : [Create a heatmap layer - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/examples/heatmap-layer/)

1. Créez un nouveau module javascript **\`renderHeatmap.js\`**

2. Ajoutez une source et un layer de type **heatmap**, suivez l’exemple Maplibre

3. La propriété **\`data\`** dans la configuration **addLayer** doit référer à la variable **\`randomPoints\`** du module javascript **\`randomPoints.js\`**

4. N’oubliez pas d’ajouter la **source du module** dans le index.html

![](https://lh7-us.googleusercontent.com/9M9wrUbRoHEQ7GLTkHEGh84bU4QkT5c0-EQCkEUSz9jlyCpRHR40QRnHROhG37Mo4rpb_p8yuUibaLZbv0h0TJKSzXUc03zrazkCW0_WKrhPKEw-kXt9jKyO4eKO8_OrvRLQ4xRA0X-lFzt5kTmwf8g)


## Créer et visualiser une couche de polygones extrudées

Documentation : [Display buildings in 3D - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/examples/3d-buildings/)

1. Créez un nouveau module javascript **\`render3D.js\`**

2. Créez une fonction **\`function generate3D()\`**

3. Ajoutez y une variable pour fabriquer un grid hexagonal : 

   1. **var grid = makeGrid();** 

   2. Cette **variable** appelle une fonction du module javascript dans le fichier **\`createGrid.js\`** vous pouvez aller la voir si vous êtes curieux

4. Ajoutez une source de type geojson dont le data est **\`grid\`** 

   1. (qui réfère à la variable précédente)

5.  Maintenant ajouter un layer de type **\`fill-extrusion\`**

   1. Inspirez vous de l’exemple Maplibre ci-haut

6. La propriété **\`fill-extrusion-color\`** et **\`fill-extrusion-height\`** que vous devez utiliser est “randomValue” (qui est générée par le module createGrid.js)

7. N’oubliez pas d’ajouter la **source du module** dans index.html

![](https://lh7-us.googleusercontent.com/KmhvRHTaYimCGJZ5P-bsic-60VJJtCLDHOsaVLoR7rFf-jT4fKEiJ9PXYLM7Uqg6F0jlNOlagwbtWZSROWIesylQnY2-XRAolRDhsFTAU7JkcRuOmV2ywbDNsD0qcpAxL4YIBXd5uZQWEJaLlIaVR5A)

Beau travail ! Vous venez de réaliser votre première application d’analyse spatiale sur le Web ! 💪
