Mettre à jour Github
====================

Sans source existante :
-----------------------

* echo "# interface" >> README.md
* git init
* git add README.md
* git commit -m "Premier commit"
* git remote add origin https://github.com/jfrancoisg/interfaces.git
* git push -u origin master

Avec source existante :
-----------------------

* git remote add origin https://github.com/jfrancoisg/interfaces.git
* git push -u origin master

Suppression de "git config --global core.autocrlf false"
--------------------------------------------------------

* git config --global core.autocrlf false