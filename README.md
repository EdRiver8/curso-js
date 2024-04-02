md = marked down

# Introduccion a GIT

GIT = Un sistema de control de versiones que permite gestionar el codigo; genera un repositorio donde se almacena informacion y que a la vez se acerca a una red social que permite compartir codigo (repos)

- Se instala de forma local y permite la ejecucion de comando GIT

- En la nube se conocen diferentes herramientas para el almacenaje - GITHUB

## Comandos mas usados:

- git clone: es descargar una copia del repo a local (si es neceario) (una vez)
- git init: inicia git en el proyecto (una vez dentro el proyecto) (una vez)
- git status: muestra los cambios que no se han guardado en GIT
- git add .: agrega los cambios a la copia local de git
- git commit -m " ": agregamos un comentario sobre los cambios a subir
- git push: subir los cambios al repo al cual se apunta
- git add remote origin (url del reposotorio en github) (una vez)
- git remote -: verificar la url a la cual se van a subir los cambios (repositorios de github)

# HTML:

debe existir siempre un html con nombre 'index.html' y este va a ser el orquestador de la visualizacion web que puede incluir JS Y CSS

## Necesario:

- Conocer bien las etiquetas
- Comprender y manejar los atributos de las etiquetas

# CSS:

Es la hoja de estilos en cascada, este le agrega a la parte visual del HTML -> Diseño, en algunos casos puede agregar funcionalidad
Puede ser invocado(usado) de tres maneras:

- En la etiqueta propia del HTML ejemplo: <div style></div> (no recomendado)
- En el head del html con la apertura y cierre de una etiqueta style
- En un archivo aparte con extesion .css, se debe vincular en el Head del html con una etiqueta

# JS:

Este agrega funcionalidad a las paginas web, es decir que permite al usuario interactuar con nuestro DOM
puede ser usado de dos maneras:

- al final de la etiqueta body con una etiqueta script
- en un archivo aparte con extension .js, se debe vincular el archivo al final antes del body

# Comentarios

Son bastante importantes puesto que generan documentacion al codigo que se esta ejecutando

# Variables

Las variables en programacion permiten almacenar informacion, es un espacio en la memoria donde se almacena informacion y en js existen diferentes tipos:

- Booleanos: true o false -> 0 o 1
- Numeros: almacena todo tipo de numeros -> naturales o enteros, reales, decimales (flotantes)
- Strings: textos y se diferenciar porque estan rodeados de dos comillas "" o ''

## Declarar una variable:

Hace referencia a crear una variable (con un nombre descriptivo) o separar un espacio en memoria, ejemplo let variable;

## Inicializar una variable:

es darle un valor a la variable declarada, ejemplo: variable = 10;

## Declarar e Inicializar

Ejemplo let variable = 10;

# Operadores:

Son los que permiten realizar calculos matematicos:

- +: suma
- -: resta
- \*: multip
- /: div
- %: modulo o resto o residuo de una division (10/3 = 3, el residuo: 1)
- \*\*: potencia

Nota: el porcentaje es una multiplicacion por decimal, ejemplo: el 50% de 1000 => 1000 \* 0,5

# Asignador:

= igual, se usa para dar el valor a las variables

# Comparadores:

nos permiten evaluar expresiones logicas, aquellas que dicen si algo es verdadero o falso:

- ==: si algo es igual a otra cosa, ejemplo: 'verde' == 'VERDE', 5 == 4
- !=: si dos cosas son diferentes, ejemplo: 10 != 9

# Palabras reservadas:

Son aquellas que ya tienen una funcion definida en lenguaje (normalmente se pintan de un color diferente), ejemplos:

- let, var, conts: estas nos sirven para crear variables, una buena practica para las const es asignarles un nombre en mayuscula sostenida
- function: para crear funciones
- if: para crear condicionales

# Condicionales:

Permiten evaluar si algo es verdader o falso, y si es verdaedero tomar un camino y si es falso ejecutar el otro camino.

- Tienen la siguiente estructura:
  if(){
  camino si es verdadero
  } camino si es falso

usualmente estan acompañadas de else (sino)
if(){
camino si es verdadero
}else{
camino si es falso
}
