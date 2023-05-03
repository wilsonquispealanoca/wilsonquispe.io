---
title: "Nadie te explicará así las variables de programación"
date: "2022-02-21T05:35:07.322Z"
tags: ["javascript", "programación"]
excerpt: "Una variable podríamos verla como una caja que tiene un nombre y a la cual se le puede introducir (asignar) un valor en un momento dado, y en cualquier otro momento, podemos utilizar (leer) dicho valor y el valor de la variable podrá cambiar."
coverImage: "/assets/blog/variables/variablesSocialNetwork.jpeg"
author:
  name: Wilson Quispe
  picture: "/assets/blog/authors/profileWilson.jpg"
ogImage:
  url: "/assets/blog/variables/variablesSocialNetwork.jpeg"
---

El primer paso para comprender realmente la programación es mirar hacia atrás en el álgebra. Si lo recuerdas de la escuela, el álgebra comienza escribiendo términos como los siguientes.

```js
12 + 7 = 19
```

A continuación introduciré una incógnita por ejemplo, _x_: 

```js
12 + x = 19
```

Para encontrar el valor de _x_, es necesario mover los términos que se encuentran alrededor de _x_.

```js
x = 19 - 12 
-> x = 5
```

Cuando se usa más de una variable en una ecuación, los términos de la ecuación se vuelven más flexibles, lo que significa que pueden tomar diferentes valores.

```js
x + y = 19
```

Si se cambian los valores de _x_ e _y_. La fórmula aún puede ser correcta:

```js
x = 15
y = 4
``` 

o

```js
x = 12
y = 7
```

Lo mismo ocurre con los lenguajes de programación, una variable es algo que puede cambiar de un momento a otro. Técnicamente una variable es un campo de memoria al que se le puede cambiar su contenido cuantas veces sea necesario. 

![ejemplo-de-variable-1](/assets/blog/variables/variablesVisualmente.png)

> Un campo de memoria es un pedacito de la memoria principal del computador (RAM) en donde podemos guardar un dato. 

Para que sea más fácil de entender, quiero aclarar que aunque la información se guarda en la memoria del computador, en realidad se almacena en lo que llamamos _"variables"_. 

> Las variables son como cajitas que pueden ser grandes o pequeñas, donde se guarda la información que queremos utilizar. De esta manera, podemos acceder y manipular la información en la memoria a través de las variables.

![ejemplo-de-variable-2](/assets/blog/variables/variableCaja.png)

# Tipos de información o datos

¿Alguna vez has notado que la caja de una computadora es diferente a la caja de una consola de juegos? ¿Sabes qué es lo que diferencia la caja de una cosa de la caja de otra? La única diferencia es su contenido, es decir, el dispositivo que contiene. ¿Cómo se relaciona esto con el tema que estamos discutiendo? La respuesta es muy sencilla: la diferencia entre una variable y otra radica en su contenido, o más específicamente, en el tipo de contenido que almacenan.

Antes de usar variables en un programa de computadora, debemos decirle al programa qué tipo de información van a guardar. Según la cantidad de información que queramos guardar en ellas. Por eso, es importante declararlas de antemano para que el programa las ajuste correctamente. ¿Y qué tipo de información podemos guardar en una variable?

## Tipo entero

Un dato de tipo entero es simplemente un número que no tiene punto decimal, como _12_, _-64_ o _0_. La ventaja de los datos enteros es que nunca generan decimales en las operaciones, lo que los hace muy útiles en ciertos casos. De hecho, los datos enteros se manejan con un conjunto de reglas llamado Aritmética Entera. Si declaras una variable como entera, podrás almacenar solamente datos enteros en ella. **¡Es así de fácil!**

## Tipo real

Un dato de tipo real es simplemente un número que tiene punto decimal, como: _6.97_ el cual es usado para realizar conversiones de nuestra moneda boliviana al dólar. Otros ejemplos pueden ser: _-12.65_ o _95.0_. Lo interesante de los datos reales es que en las operaciones pueden generar decimales. Los datos reales se manejan con un conjunto de reglas llamado Aritmética Real. Si declaras una variable como real, podrás almacenar solamente datos reales en ella.
Ahora bien, si nos fijamos en el número _7._ **(así con punto al final)** puede que pensemos que es un número entero, pero en realidad no lo es. La definición de dato entero es que no tiene punto decimal, mientras que la de dato real es que sí lo tiene. Entonces, como 7 tiene un punto decimal al final, se considera un dato real. ¡Increíble, ¿no?!

## Tipo caracter

Un dato tipo caracter es simplemente una letra, número o símbolo que utilizamos en nuestro lenguaje cotidiano. Pero, en el mundo de la computación, estos caracteres se representan de manera interna utilizando un sistema numérico llamado sistema binario, que solo utiliza los números _0_ y _1_. Para esto, se utiliza el Código ASCII _(American Standard Code for Interchange Information)_, que es un código internacional que asigna un número único a cada uno de estos caracteres. Por ejemplo, la letra _C_ se representa internamente como el número _67_ en binario, que es _0100 0011_  en su forma completa.

Ahora quiero que te memorices esta palabra: _cadena_. Pues, una **cadena** es un conjunto de caracteres que se agrupan en un solo elemento. Por ejemplo, si escribimos el nombre _WILSON_ (mi nombre), ese conjunto de caracteres es una cadena.

Por otro lado tienes que saber que el contenido de una cadena no es evaluado por el computador, y se acostumbra encerrarlo entre comillas dobles. Por ejemplo, la cadena _"9-2 es igual a 14"_ puede parecer incorrecta matemáticamente, pero para el computador es válida ya que él no evalúa el contenido de la cadena, sino que simplemente lo trata como un conjunto de caracteres.

Creo que es todo por hoy, en el siguiente artículo profundizaré más en los tipos de datos que se suele usar en todos los lenguajes de programación.

Si quieres saber más sobre este tema y explorar otros conceptos relacionados, te invito a visitar mi artículo que habla de expresiones algebraicas. Ahí encontrarás información detallada y ejemplos prácticos que te ayudarán a expandir tus conocimientos. [¡Haz clic aquí para acceder ahora mismo!](https://wilsonquispe.vercel.app/posts/expresiones-algebra).

Y como siempre, te invito a que compartas esta publicación con tus amigos.


