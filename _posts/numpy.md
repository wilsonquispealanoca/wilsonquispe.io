---
newPost: true
title: "Dominando NumPy: Guía Visual para Principiantes"
date: "2026-01-12T08:35:07.322Z"
tags: ""
excerpt: "NumPy es la librería esencial para el manejo de datos en Python. A diferencia de las listas normales, NumPy está diseñado para realizar cálculos matemáticos de forma masiva y eficiente."
coverImage: "/assets/blog/numpy/cover.png"
author:
  name: Wilson Quispe
  picture: "/assets/blog/authors/profileWilson.jpg"
ogImage:
  url: "/assets/blog/numpy/cover.png"
---


NumPy es una librería de Python diseñada para trabajar con arreglos numéricos de forma rápida, eficiente y limpia.

💡 Idea visual:
Piensa en NumPy como una calculadora matricial optimizada, mientras que las listas de Python son solo contenedores de datos.

## Importar NumPy
```python
import numpy as np
```
📌 Usamos np solo para escribir menos y leer mejor el código.

## Arrays vs Listas en Python
### Creación de un array básico de 1 dimensión (vector)

```python
# Lista normal en Python
lista_comun = [1, 2, 3]

# Arreglo de NumPy
arreglo_numpy = np.array([1, 2, 3])
print(arreglo_numpy)
```

```text
RESULTADO: [1 2 3]
```

### Diferencia clave:

- Las listas son **versátiles** (pueden contener distintos tipos de datos).

- Los arreglos de NumPy son **homogéneos** (todos los elementos del mismo tipo) y optimizados para **cálculos matemáticos.**

### Visualización:
![ejemplo-de-array-vs-list](/assets/blog/numpy/listavsarray.png)

## Dimensiones y forma
### Arreglo de 1 dimensión (vector)

```python
a = np.array([1, 2, 3])
print("Dimensión:", a.ndim)  # ndim = número de dimensiones
print("Forma:", a.shape)     # shape = (elementos,)
```

```text
Dimensión: 1
Forma: (3,)
```

### Arreglo de 2 dimensiones (matriz)

```python
b = np.array([[2, 4, 6],
              [4, 8, 12]])
print("Dimensión:", b.ndim)
print("Forma:", b.shape)    # (filas, columnas)
```

```text
Dimensión: 2
Forma: (2, 3)
```

### Visualización:
![ejemplo-de-dimensiones](/assets/blog/numpy/dimensiones.png)

## Tipos y explorando la forma

Es vital conocer la "forma" de nuestros datos para evitar errores en modelos de Machine Learning.

- **Shape**: Indica el número de filas y columnas. Por ejemplo, (2, 3) significa 2 filas y 3 columnas.

- **Dtype**: Indica el tipo de dato. NumPy es estricto: si mezclas enteros y flotantes, convertirá todo a flotante para mantener la consistencia.

```python
c = np.array([10, 12.4, 14])  # Int + Float
print(c)
print("Tipo de dato:", c.dtype)
```
```text
[10.  12.4 14. ]
Tipo de dato: float64
```

## Creación de arreglos especiales

A menudo necesitamos inicializar matrices antes de llenarlas con datos reales, algo muy común en Deep Learning.

## Matriz de ceros
```python
zeros = np.zeros((3, 4))  # 3 filas, 4 columnas
print(zeros)
```
```text
[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]
```

## Matriz de unos
```python
ones = np.ones((2, 3))  # 2 filas, 3 columnas
print(ones)
```
```text
[[1. 1. 1.]
 [1. 1. 1.]]
```

## Secuencias con arange() (como range() pero para arreglos)

Por ejemplo quiero un arreglo que empiece en 20, termine en 40 y que vaya avanzando de 5 en 5

```python
# Crear un rango con pasos específicos (Inicio, Fin, Salto)
# Nota: El valor final nunca se incluye
secuencia = np.arange(20, 40, 5)
print(secuencia)
```
```text
[20 25 30 35]
```

## Valores espaciados uniformemente con linspace()

Tambien podemos crear un arreglo con una cantidad determinada y especificar el valor de inicio y el valor final

Ejemplo queremos un arreglo que vaya del 0 hasta el 10 (aleatoriamente) pero con un tamaño de 5

```python
# Inicio, fin (inclusivo), número de elementos
valores = np.linspace(0, 10, 5)
print(valores)
```
```text
[ 0.   2.5  5.   7.5 10. ]
```

## Operaciones Matemáticas: ¿Por qué no usar Listas?

Aquí es donde NumPy brilla. Las listas de Python concatenan (pegan) los elementos al sumar, mientras que NumPy realiza operaciones elemento a elemento.

```python
a = np.array([1, 2, 3])
c = np.array([10., 12.4, 14.])

print("Multiplicación:", a * c)
print("Suma:", a + c)
print("Resta:", a - c)
print("División:", a / c)
```
```text
Multiplicación: [10.  24.8 42. ]
Suma: [11.  14.4 17. ]
Resta: [-9.  -10.4 -11. ]
División: [0.1        0.16129032 0.21428571]
```

### Comparación con listas normales:

```python
# En cambio, con listas:
list1 = [1, 2, 3]
list2 = [2, 4, 6]
print(list1 + list2) # Resultado: [1, 2, 3, 2, 4, 6] (¡Solo las pegó!)
```
```text
Concatenación: [1, 2, 3, 2, 4, 6]
```
¡y si intentamos multiplicar las listas, no podremos hacerlo!
Para solucionar esto podemos realizar un ciclo for y agregar unas lineas de codigo, sin embargo **esto no es eficiente**, y
por eso usamos numpy

### Visualización:
![ejemplo-de-suma](/assets/blog/numpy/sumaarreglos.png)

## Filtros y Operadores Booleanos

Podemos interrogar a nuestros datos de forma masiva sin usar ciclos **for**.
```python
b = np.array([[2, 4, 6],
              [4, 8, 12]])

# Crear máscara booleana
mascara = b > 4
print("¿Mayores que 4?")
print(mascara)
```
```text
¿Mayores que 4?
[[False False  True]
 [False  True  True]]
```
### Visualización:
![ejemplo-de-filtrado](/assets/blog/numpy/filtrado.png)

Extraer solo los valores que cumplen la condición (Máscara booleana)
```python
# Extraer valores que cumplen la condición
valores_filtrados = b[b > 4]
print("Valores > 4:", valores_filtrados)
```
```text
Valores > 4: [ 6  8 12]
```

Encontrar múltiplos de 3
```python
b[b % 3 == 0]
```
```text
Multiplos de 3: [ 6  12]
```

## Indexing y Slicing (Rebanado)

Acceder a la información es como dar coordenadas en un mapa.
Para matrices: b[fila, columna]. Recuerda que en programación empezamos a contar desde 0.

### Acceso Directo o por posición
```python
# Matriz de ejemplo
matriz = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

# Acceder a elemento: fila 1, columna 2 (0-indexed)
elemento = matriz[1, 2]
print("Elemento en [1, 2]:", elemento)
```
```text
Elemento en [1, 2]: 6
```

### Visualización:
![ejemplo-de-index](/assets/blog/numpy/indexing.png)

### Slicing (Cortes)

El slicing usa el formato [inicio : fin]. El "fin" es excluyente (no se incluye).

```python
# Todos los elementos
print("Todo:", matriz[:])

# Desde la fila 1 hasta el final
print("Filas desde 1:", matriz[1:])

# Primera fila, todas las columnas
print("Primera fila:", matriz[0, :])

# Dos primeras filas, última columna
print("Esquina superior derecha 2x1:")
print(matriz[:2, -1:])
```
```text
Todo: [[1 2 3]
       [4 5 6]
       [7 8 9]]
Filas desde 1: [[4 5 6]
                [7 8 9]]
Primera fila: [1 2 3]
Esquina superior derecha 2x1:
[[3]
 [6]]
```

## Consejos finales
- Siempre usa np.array() en lugar de listas para cálculos matemáticos

- Verifica las dimensiones con .shape antes de operar

- Aprovecha la vectorización → evita bucles for cuando sea posible

- Usa tipos de datos adecuados (float32 para ahorrar memoria si no necesitas alta precisión)