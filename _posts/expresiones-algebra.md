---
title: "Expresiones algebraicas"
date: "2023-03-14T05:35:07.322Z"
tags: ["algebra", "programación"]
excerpt: "En álgebra, La forma en que se escriben estas expresiones se llama notación algebraica.
Esta notación incluye cinco componentes principales: variables o incógnitas, coeficientes, operadores, exponentes y paréntesis."
coverImage: "/assets/blog/algebra/componentes.png"
author:
  name: Wilson Quispe
  picture: "/assets/blog/authors/profileWilson.jpg"
ogImage:
  url: "/assets/blog/algebra/componentes.png"
---

Si eres nuevo en esto del álgebra, o hace mucho tiempo que no la estudias, lo primero que notarás es que los problemas se ven un poco diferentes a los de aritmética simple.

Observa la siguiente expresión:

```python
x + 6y ∙ 10 - (2/x)
```

Incluye algunos símbolos que son comunes en álgebra, pero no en matemáticas básicas. La forma en que se escriben estas expresiones se llama **notación algebraica**.

Esta notación incluye cinco componentes principales: **variables** o **incógnitas**, **coeficientes, operadores, exponentes y paréntesis**.

![variables](/assets/blog/algebra/componentes.png)

Veamos de qué se trata cada uno de ellos.

## Variables o incógnitas

Una variable o incógnita es una letra que se usa para representar un número. Por ejemplo, en la siguiente expresión, la variable **x** representa un número desconocido que al sumarle **10** dará **14**.

```python
x + 10 = 14
```

Expresado como una pregunta sería: ¿a qué número puedes agregarle _10_ para que dé _14_?

Escribimos _x_ porque, inicialmente, no sabemos cuál es tal número, pero lo podemos averiguar. Como sabemos que _4 + 10 = 14_, nuestra variable debe ser 4 o, en otras palabras, _x = 4_.

> Encontrar el valor de un número desconocido es uno de los objetivos del álgebra.

Aunque **_x_** es la más usada, cualquier letra puede ser una variable. Un problema de álgebra puede tener una o muchas variables y, si una variable se usa más de una vez en el mismo problema, su valor será igual en todos los casos. Observa esta ecuación:

```js
x + x + x + y = 35
```

Cada **_x_** en esta expresión representa la misma cantidad. La otra variable, **_y_**, puede tener un valor diferente.

> El valor de una variable en un problema no es necesariamente igual en otro. Por ejemplo, _x_ era igual a 4 en nuestro primer problema, pero no necesariamente **_x_** será **_4_** en otros problemas.

## Coeficientes

Algunas veces verás una variable con un número frente a ella, así:

```js
4x
```

En este ejemplo, 4 es el coeficiente. Los coeficientes son una forma de agrupar variables. es solo una forma compacta de escribir .

Veamos otro ejemplo, ¿cómo podrías usar coeficientes para reescribir la siguiente expresión?

```js
x + x + x + x + x + x + y + y + y;
```

Como hay seis **x** y tres **y**, podrías escribirla como **6x + 3y**. Así es mucho más fácil de leer:

```js
6x + 3y
```

La expresión anterior no es igual a **9xy**. Puedes solamente sumar o restar variables que son la misma letra, como **x + x** o **y + y**, pero nunca **x + y**.

## Operadores

Los operadores son los símbolos que nos indican la operación que debemos realizar. Seguramente, los has visto antes:

```js
+ - ∙ ÷
```

Estos símbolos te permiten saber cómo calcular una expresión: cuando ves el símbolo de suma, sabes que debes sumar dos números; cuando vez el de resta, sabes que debes restarlos. En álgebra, los símbolos **+** y **-** no tienen cambios, pero los símbolos de multiplicación, **×**, y división, **÷** , se escriben de otra forma.

### Multiplicación

En aritmética, la multiplicación se escribe usualmente como:

```js
6 × 7
```

En álgebra el símbolo de multiplicación se escribe diferente. Esto se debe a que **×** se ve muy parecido a la variable **x**. Por esta razón, se usa el símbolo punto **∙**. Así que en álgebra, un problema de multiplicación se escribe así:

```python
6 ∙ 7
```

Hay otras formas de expresar la multiplicación en álgebra. Puedes simplemente escribir una variable junto a otra para multiplicarlas. Por ejemplo, para multiplicar **x** y **y**, podrías simplemente escribir lo siguiente:

```js
xy;
```

### División

Quizás estés más familiarizado con problemas de división que lucen así:

```js
9 ÷ 3
```

En álgebra, podrás verla también así:

```python
9 / 3
```

Además, si estás dividiendo grupos de números, la división se indica con una línea horizontal:

![divisionDeGrupos](/assets/blog/algebra/divisionGrupal.png)

Todo lo que está sobre la línea está dividido por todo lo que esta debajo de ella, en este ejemplo se divide **6x - 4y + 2** sobre **2**.

### Paréntesis

En álgebra, los paréntesis se usan para agrupar partes de una expresión algebraica. En un problema debes resolver primero las expresiones que están dentro de ellos. Observa:

```python
(60/x) + 8 = 10
```

En este problema, debes comenzar por resolver todo lo que está entre paréntesis y, después, resolver lo demás.

Veamos qué pasa cuando dos grupos de paréntesis están uno junto al otro, sin ningún operador entre ellos:

```python
(8)(5)
```

Recuerda que en álgebra, cuando hay dos variable juntas, pero no hay ningún signo entre ellas, estas se multiplican. De igual forma, debes multiplicar dos grupos de paréntesis que están están uno junto a otro.

```js
(8)(5)
8 ∙ 5
40
```

### Potencias

Las potencias indican que un número ha sido multiplicado por sí mismo varias veces. Por ejemplo:

![potencia](/assets/blog/algebra/exponente.png)

Significa que **6** ha sido multiplicado por sí mismo **3** veces. Es decir, es lo mismo que **6 ∙ 6 ∙ 6**.
O usando variables,

![potenciaVariable](/assets/blog/algebra/variableExponente.png)

Significa que el número desconocido **x** ha sido multiplicado por sí mismo **3** veces, lo que es igual a **x ∙ x ∙ x**.

### Constante

Una constante tiene múltiples significados en matemáticas dependiendo del contexto. En su definición más simple, una constante es un valor fijo, como el número **10** en nuestra primer ejemplo.

Para aclarar un poco la diferencia entre constante y coeficiente:

> **Constante:** término con un valor fijo en una ecuación que no se ve afectado por ningún cambio en la variable.

> **Coeficiente:** un coeficiente es un factor que multiplica la variable. A menudo es un número, pero también puede ser una expresión.

Hay muchas constantes matemáticas, pero, las que se utilizan con relativa frecuencia es la gravedad y el número pi.

```php
π = 3.1415926536…
g = 9.80665
```

> Con estos conceptos claros, ya puedes abordar nuestro contenido **"Nadie te explicará así las variables de programación"**.
