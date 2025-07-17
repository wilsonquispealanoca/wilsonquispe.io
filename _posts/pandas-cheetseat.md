---
title: "Pandas Cheatsheet: La guía más sencilla"
date: "2025-06-17T16:00:07.322Z"
tags: ["pandas", "python", "data", "machine learning"]
excerpt: "Una variable podríamos verla como una caja que tiene un nombre y a la cual se le puede introducir (asignar) un valor en un momento dado, y en cualquier otro momento, podemos utilizar (leer) dicho valor y el valor de la variable podrá cambiar."
coverImage: "/assets/blog/variables/variablesSocialNetwork.jpeg"
author:
  name: Wilson Quispe
  picture: "/assets/blog/authors/profileWilson.jpg"
ogImage:
  url: "/assets/blog/variables/variablesSocialNetwork.jpeg"
---

Si los datos son una jungla, pandas es tu machete. Si es un novato o simplemente necesita un repaso, este blog es su mapa de bolsillo para trabajar con pandas en Python. Sin jerga. Sin palabrería. Sólo hablar de verdad.

## 🧠 ¿Qué es pandas?

Pandas es una librería de Python que te ayuda a trabajar con tablas de datos - como Excel, pero sobrealimentado. Hace que sea fácil de limpiar, analizar y remodelar los datos, todo en código. 

## ⚙️ Introducción

Instala pandas:

```python
pip install pandas
```

Impórtalo en tu código:

```python
import pandas as pd
```

La mayoría de la gente utiliza pd como atajo, y también debería hacerlo.

### Dos estructuras de datos principales

**Series:** Una columna (como una lista con etiquetas)

**DataFrame:** Tabla con filas y columnas (como una hoja de cálculo)

## 🛠️ Creación de un DataFrame

A partir de un diccionario:

```python
data = {
    'Name': ['Roberto', 'Mamani'],
    'Age': [25, 30]
}
df = pd.DataFrame(data)
```

Ahora df es su tabla de datos.

Lectura y escritura de archivos

Leer CSV:

```python
df = pd.read_csv('archivo.csv')
```

Guardar CSV:

```python
df.to_csv('nuevo_archivo.csv', index=False)
```

También puede leer Excel, JSON, y más.

## 👀 Cómo ver los datos

```python
df.head()      # Primeras 5 filas
df.tail()      # Últimas 5 filas
df.info()      # Tipos de datos y memoria
df.describe()  # Resumen estadísticos (promedio, mediana, etc.)
```

Selecionando datos: 

Columnas:

```python
df['nombre-columna']
```

Filas:

```python
df.iloc[0]       # Por posición
df.loc[0]        # Por etiqueta/índice
```

Filtrar las filas:

```python
df[df['Edad'] > 25]
```

### ➕ Añadir o modificar columnas

```python
df['EdadMasDiez'] = df['Edad'] + 10
```

¿Quieres hacer algo extravagante o elegante?

```python
df = df.assign(Score=lambda x: x['Edad'] * 2)
```

### ❌ Datos que faltan

Eliminar filas con valores perdidos:

```python
df.dropna()
```

Rellenar los valores que faltan:

```python
df.fillna(0)
```

### 🧮 Agrupación y agregación

Agrupar por una columna y ejecutar algunas estadísticas:

```python
df.groupby('Departamento')['Salario'].mean()
```

También puedes usar: 

```python
.agg(['sum', 'mean', 'count'])
```

### 🔗 Fusionar y unir

Fusionar dos DataFrames:

```python
pd.merge(df1, df2, on='ID', how='inner')
```

Unir por índice:

```python
df1.join(df2, how='left')
```

### 🔄 Dale forma a tus datos

Pivote:

```python
df.pivot(index='Fecha', columns='Producto', values='Ventas')
```

Fundir (despivotar):

```python
df.melt(id_vars=['ID'], value_vars=['Literatura', 'Ciencia'])
```

### ⏳ Trabajar con fechas

Analizar fechas al leer CSV:

```python
df = pd.read_csv('data.csv', parse_dates=['Fecha'])
```

Remuestreo (por ejemplo, media mensual):

```python
df.resample('M').mean()
```

¡Asegúrese de que su columna de fecha se establece como el índice primero!

#### 🎯 Pro Tips

Use **copy()** cuando rebane si va a editar.

Evita los bucles **for**, usa operaciones vectorizadas en su lugar.

**df.apply()** es genial, pero úsalo con prudencia; puede ser lento.

#### 🏁 Palabras finales

No necesitas memorizarlo todo. Guarda esto en tus favoritos. Vuelve cuando estés atascado. Pandas no es difícil, sólo da miedo al principio. Pero una vez que lo domesticas, no hay vuelta atrás.