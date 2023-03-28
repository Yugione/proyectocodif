/*====================================================================================
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
Pagina para comprobar expresiones regulares 
https://github.com/falconmasters/expresiones-regulares
Video Validacion Formulario: https://www.youtube.com/watch?v=s3pC93LgP18&list=RDCMUCJl1YajcPWTeJNsQhGyMIMg&index=3
Material Apoyo: 
https://regexr.com/
====================================================================================*/
Sergio Estevez
3166182057
sergioesmo@misena.edu.co
www.mspaks.com

¿Qué significa cada elemento de la expresión regular de este ejemplo?

^: el emparejamiento se debe realizar desde el principio de la cadena.
[A-Z]: cualquier carácter entre la A mayúscula y la Z mayúscula.
{1,2}: uno o dos caracteres.
\s: un espacio en blanco.
\d: un dígito.
{4}: cuatro dígitos.
\s: un espacio en blanco.
([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]): cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
{3}: tres caracteres.
$: el emparejamiento se debe realizar hasta el final de la cadena.

Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro