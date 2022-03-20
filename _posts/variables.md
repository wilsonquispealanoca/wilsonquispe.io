---
title: 'Nadie te va explicar así las variables en programación'
date: '2022-02-21T05:35:07.322Z'
tags: ['javascript', 'programación']
excerpt: "Cuando necesitas recordar algo, creces un tentáculo para aferrarte a él o vuelves a conectar uno de tus tentáculos existentes a ese algo."
coverImage: '/assets/blog/hello-world/helloworld.jpg'
author:
  name: Wilson Quispe
  picture: '/assets/blog/authors/profileWilson.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Una variable es uno de los conceptos más importantes para aprender cualquier lenguaje de programación.
Entonces…

## 1. ¿Qué es una variable en programación?

En programación, una variable está formada por un espacio en el sistema de almacenamiento (memoria principal de un ordenador) y un nombre simbólico (un identificador) que está asociado a dicho espacio. Ese espacio contiene una cantidad de información conocida o desconocida, es decir un valor.

Asimismo, una variable es como una caja en donde podemos almacenar lo que queramos, como, por ejemplo, nombres, números, funciones, etc.

![caja-variables](/assets/blog/variables/variableCaja.png)

>Una definición más amigable sería la de imaginar las variables como tentáculos, más que como cajas. No contienen valores, sino que los agarran: dos variables pueden referirse al mismo valor.

![octopus-variables](/assets/blog/variables/octopus-variables.jpg)

Seguramente ya viste las variables en otros lenguajes y si no, tranquilo/a que voy a ejemplificar la definición de estas en los lenguajes que mejor "se me dan": JavaScript y Kotlin.

Para empezar con los ejemplos imagina que estás escribiendo un juego de aventuras que asigna a los jugadores misiones en las que embarcarse.
Estas misiones deben escalar en dificultad a medida que el jugador se hace más fuerte y progresa en el juego.
Es probable que quieras una variable para saber el estado de la vida del jugador y si este sigue vivo.

***¿Estás listo?*** 🤩

## 2. ¿Cómo lucen las variables en kotlin?

Vamos a declarar tres variables, donde cada una tiene algo especial…

```kotlin
var vidaProtagonista: Int = 100
val saludo: String = "Hola, bienvenido a tu aventura"
var tieneVida: Boolean = true
```

En el primer ejemplo, has asignado una instancia del tipo Int a una variable llamada **vidaProtagonista**.
Repasemos cada parte del código.

![variables](/assets/blog/variables/variables.png)

Primero, definimos una variable utilizando la palabra clave **var**, que indica que quieres declarar una nueva variable, seguida del nombre de la nueva variable.

Luego, especificaste la definición del tipo de la variable, **:Int**, que indica que vidaProtagonista tendrá un valor entero (número entero).

Por último, utilizamos el operador de asignación (=) para asignar lo que está en el lado derecho (una instancia del tipo Int, concretamente 100) a lo que está en el lado izquierdo (vidaProtagonista).

En Kotlin y en otros lenguajes de programación para definir una variable se necesitan tres cosas.

- 1.- El nombre de la variable 
- 2.- El tipo de variable 
- 3.- Si la variable puede reutilizarse o no. ***(Aquí es donde el concepto de los TENTÁCULOS nos sirve como ejemplo)***.

Ahora te preguntaras
**¿Qué quiere decir con Reutilizar?**
Kotlin hace uso de dos palabras claves que no puedes usar como *"nombre de variable"*

- 1.- ***var***
- 2.- ***val***

Cuando declaras una variable con la palabra var estás diciendo que esta puede ser reutilizable, es decir, puedes guardar un dato para que en un futuro puedas cambiarlo por otro valor. 
En el caso de val nunca sucede así, si tu defines una variable con val está nunca cambia.

En JavaScript funciona casi de la misma manera, solo que las palabras clave cambian y no se usa el tipo de variable. 
Sin embargo, en kotlin también se puede obviar el tipo de variable. Ya hablaré de eso más adelante.

Usemos el mismo ejemplo de kotlin, pero está vez usando JavaScript.

```js
let vidaProtagonista = 100
const saludo = "Hola, bienvenido a tu aventura"
let tieneVida = true
```

***“let”*** es el equivalente a, var.
***“const”*** usa el mismo concepto que, val.

La parte más importante en cualquier lenguaje de programación es declarar la variable antes de poder utilizarla.

## 3. Tipos de variables

En nuestro ejemplo declaramos tres variables una de tipo Int otra de tipo String, y has utilizado el tipo Boolean para saber el estado de la vida del jugador.

Para enriquecer tu conocimiento te describiré los tipos de variables de uso común disponibles en Kotlin y en otros lenguajes de programación.

Para los números enteros, existen cuatro tipos con diferentes tamaños y, por tanto, rangos de valores.

### Int

Int puede almacenar números enteros y puede llegar hasta 2 mil millones.

```kotlin
val numeroUno: Int = 1 
var vidaProtagonista: Int = 100 
```

### Long
El tipo de variable “Long” puede almacenar hasta 9,223,372,036,854,775,807.

```kotlin
val dosMilMillones: Long = 2000000000
```

### Short
Short puede almacenar menos que **“Int”** aproximadamente 32767 caracteres.

### Double
Para números reales, Kotlin proporciona los tipos de punto flotante Float y Double, es decir aquellos números con decimales.

```kotlin
val numeroPi: Double = 3.1416
```

### Float
Para el tipo Float, añada el sufijo f o F. y si dicho valor contiene más de 6-7 dígitos decimales, se redondeará.

```kotlin
val miNumeroFloat: Float = 4.3182616284f // Float, el valor actual es: 4.3182615
```

### Boolean
El tipo Boolean representa objetos booleanos que pueden tener dos valores: **verdadero** o **falso**.

```kotlin
val tieneVida: Boolean = true
```

Imagína que quieres abrir una puerta en tu juego, inicialmente la puerta casi siempre estará CERRADA. Y para llevar este concepto en variables de programación podrías usar el tipo Boolean. ***¿Interesante, no?***

```kotlin
val puertaAbierta: Boolean = false
```

### String
Los Strings o cadenas en Kotlin están representadas por el tipo String. Generalmente, un valor de cadena es una secuencia de caracteres o “letras” entre comillas dobles (").

```kotlin
val saludo: String = "Hola, bienvenido a tu aventura"
```

Los elementos de un String son caracteres a los que se puede acceder mediante la operación de indexación: 
Puedes definir una operación de indexación de la siguiente manera 👇

```kotlin
nombreDeVariable[indice_al_que_quieres_acceder]
```

Para ejemplificar mejor usaré la variable saludo que creamos y accederé al **índice 1**, donde como resultado obtendremos la letra “o”.

```kotlin
saludo[1]  //El resultado de esta operación será la letra “o”
```

Espera, algo falló 😱: ¡**saludo[1]** nos muestra la segunda letra, no la primera! Lo que sucede es que en los lenguajes de programación las posiciones se cuentan desde 0.

```kotlin
saludo[0] //El resultado de esta operación será la “H”
```

Ahora sí hemos conseguido averiguar cuál es el primer carácter de la variable **“saludo”**.

## 4. Inferencia de datos en las variables

***¿Recuerdas la parte donde dije que kotlin no necesita estrictamente el uso del tipo de variable?***

Esto es porqué, el compilador de kotlin separa toda la declaración de la variable en dos partes, cada una separada por el operador de asignación ***(=)***. 

Para ejemplificar mejor seguiremos usando nuestro primer ejemplo pero, esta vez no usaremos del tipo de variable.

```kotlin
var vidaProtagonista = 100
```

Lo primero que hace el compilador es leer lo que está en la parte derecha y dice: Ese dato es un número entero, un **Int**, o lo que lleva la variable como tipo de dato. Y en consecuencia está variable será de tipo numérica.
Este concepto te ayudará a ser un mejor programador y notaras la diferencia en sistemas robustos. Es esencial que domines este concepto.

### Recapitulando…

***¿Qué necesita saber el compilador para declarar una variable?***

- 1.- El nombre de la variable 
- 2.- El tipo de variable 
- 3.- Si la variable puede reutilizarse o no.

¡Espero que el artículo de hoy te haya sido útil! 
Sé que, a simple vista, todos estos conceptos te pueden hacer sentir un poco abrumado. Pero, ahora que conoces a profundidad qué es una variable en programación, diste el primer paso para volverte un buen programador.  

Recuerda que cada lenguaje de programación tiene sus propias reglas, pero, una vez domines los fundamentos, estudia tus favoritos e identifica cuál se adapta mejor a lo que estás buscando. 

Muchas gracias por leerme, ¡nos vemos en el siguiente artículo! 🙌

¿Te gustó este artículo? Me ayudas mucho compartiéndolo.

