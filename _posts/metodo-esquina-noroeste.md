---
newPost: true
title: "Método de la Esquina Noroeste"
date: "2026-05-31T17:14:07.322Z"
tags: "investigacion-operaciones"
excerpt: "Si estás estudiando ingeniería, administración, contabilidad o sistemas, es muy probable que te hayas topado con los famosos **Problemas de Transporte**. La mayoría de los libros y profesores te los explican llenos de símbolos matemáticos raros, letras griegas como la SUMA y subíndices que parecen diseñados para asustar."
coverImage: "/assets/blog/preview/preview.jpg"
author:
  name: Wilson Quispe
  picture: "/assets/blog/authors/profileWilson.jpg"
ogImage:
  url: "/assets/blog/registro-plandepagos/comprobante_pizarra.png"
---

# Esta publicación esta en BORRADOR, y será actualizada en los próximos días.
---

# Logística para Humanos: Cómo dominar el Método de la Esquina Noroeste sin morir en el intento

Si estás estudiando ingeniería, administración, contabilidad o sistemas, es muy probable que te hayas topado con los famosos **Problemas de Transporte**. La mayoría de los libros y profesores te los explican llenos de símbolos matemáticos raros, letras griegas como la $$\sum$$ y subíndices que parecen diseñados para asustar.

Hoy vamos a romper esa barrera. Vamos a aprender a resolver estos problemas usando la lógica pura de los negocios, perdiendo el miedo a las ecuaciones y dominando el método más famoso para arrancar en este mundo: **La Esquina Noroeste**.


## El Escenario: ¿Qué estamos resolviendo?

Imagina que eres el director de logística de una empresa. Tienes:
* **3 Almacenes (Orígenes)** llenos de mercancía lista para salir. Lo que hay aquí disponible se llama **Oferta**.
* **6 Tiendas (Destinos)** que necesitan productos urgentemente. Lo que piden aquí se llama **Demanda**.

Tu misión es decidir cuántas unidades enviar desde cada almacén a cada tienda cumpliendo con los pedidos de todos, sin pasarte de lo que tienes guardado en tus almacenes.

## ¿Qué es el Método de la Esquina Noroeste?

Este método es el más sencillo de todos porque es mecánico y "ciego". Esto significa que no le importa si una ruta de transporte es cara o barata; su único objetivo es repartir todo el inventario lo más rápido posible siguiendo una regla fija: **empezar siempre arriba y a la izquierda (el Noroeste de la tabla)**.

### La Regla de los Tres Pasos:
1.  **Posicionamiento:** Ve a la celda que esté más arriba y a la izquierda que todavía no esté tachada o completada.
2.  **El menor gana (Asignación):** Compara lo que le queda al Almacén (Oferta) con lo que pide la Tienda (Demanda). Toma el número **más pequeño** de los dos y colócalo dentro de esa casilla.
3.  **Restar y Tachar:** Resta esa cantidad tanto a la oferta como a la demanda. Si la oferta de la fila llegó a 0, tacha toda esa fila. Si la demanda de la columna llegó a 0, tacha toda esa columna. ¡Y vuelve al paso 1 con las celdas que queden libres!

---

## El "Paso a Paso" de nuestra distribución

Tomemos como ejemplo la red de tu ejercicio, donde tenemos 3 almacenes (filas) y 6 tiendas (columnas). Si seguimos la lógica de ir agotando los recursos como si bajáramos una escalera, el reparto se construye de la siguiente manera:

* **Paso 1: Celda (Fila 1, Columna 1)**
    * El Almacén 1 tiene `250` unidades disponibles y la Tienda 1 pide `120`. 
    * ¿Cuál es menor? `120`. Asignamos **120** a esa casilla.
    * La Tienda 1 queda satisfecha (`0`) y la tachamos. Al Almacén 1 todavía le quedan `130` unidades (`250 - 120`).
* **Paso 2: Celda (Fila 1, Columna 2)**
    * Nos movemos a la derecha. La Tienda 2 pide `108` unidades.
    * Como al Almacén 1 le quedaban `130`, le asignamos sus **108**.
    * La Tienda 2 queda satisfecha (`0`) y la tachamos. Al Almacén 1 ahora le quedan `22` unidades (`130 - 108`).
* **Paso 3: Celda (Fila 1, Columna 3)**
    * Seguimos a la derecha. La Tienda 3 pide `195`.
    * El Almacén 1 solo tiene `22`, así que se las asignamos por completo (**22**).
    * El Almacén 1 se queda vacío (`0`), por lo que tachamos toda la Fila 1. A la Tienda 3 todavía le faltan `173` unidades por recibir (`195 - 22`).

> **Nota didáctica:** Como la Fila 1 se cerró, nos vemos obligados a bajar un escalón. Nuestra nueva "Esquina Noroeste" disponible es la Fila 2, Columna 3.

* **Paso 4: Celda (Fila 2, Columna 3)**
    * El Almacén 2 tiene `320` unidades y a la Tienda 3 le faltan `173`.
    * Asignamos **173**. La Tienda 3 finalmente se llena (`0`) y la cerramos. Al Almacén 2 le quedan `147` unidades (`320 - 173`).
* **Paso 5: Celda (Fila 2, Columna 4)**
    * Avanzamos a la derecha. La Tienda 4 pide `270`.
    * El Almacén 2 solo tiene `147`, así que se los entregamos (**147**). La Fila 2 se queda vacía (`0`) y se tacha. A la Tienda 4 todavía le hacen falta `123` unidades (`270 - 147`).

> **Nota didáctica:** Al cerrarse la Fila 2, bajamos al último escalón: la Fila 3, Columna 4.

* **Pasos Finales (Fila 3):**
    * Siguiendo la misma regla con el Almacén 3 (que tiene `500` unidades), le entregamos de forma consecutiva las **123** unidades que le faltaban a la Tienda 4, luego cubrimos las **300** unidades completas que pedía la Tienda 5, y los últimos **77** cartuchos de inventario se van directamente a la Tienda 6, dejando toda la matriz perfectamente balanceada en cero.

### Matriz de Asignación Final

Así es como luce visualmente tu tabla de asignación tras completar la ruta de la escalera:

| Origen / Destino | Tienda 1 | Tienda 2 | Tienda 3 | Tienda 4 | Tienda 5 | Tienda 6 | **Oferta Total** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Almacén 1** | **120** | **108** | **22** | 0 | 0 | 0 | **250** |
| **Almacén 2** | 0 | 0 | **173** | **147** | 0 | 0 | **320** |
| **Almacén 3** | 0 | 0 | 0 | **123** | **300** | **77** | **500** |
| **Demanda Total**| **120** | **108** | **195** | **270** | **300** | **77** | ***1070*** |

---

## Traduciendo el resultado al Modelo de Programación Lineal (Sin símbolos feos)

Una vez que la tabla está resuelta, los profesores o los exámenes siempre piden construir el **Modelo de Programación Lineal (PL)**. En lugar de usar la temida ecuación abstracta de las sumatorias dobles ($\sum \sum C_{ij} X_{ij}$), vamos a desglosarlo de forma visual y lógica.

Un modelo de programación lineal tiene 3 componentes:

### 1. Tus Variables de Decisión (Los camiones de envío)
Para no escribir nombres largos, los matemáticos usan la letra **X** con dos números pequeños abajo que funcionan como coordenadas de un mapa (Fila y Columna).
* $X_{11}$ = Cantidad de unidades a enviar desde el Almacén 1 a la Tienda 1.
* $X_{12}$ = Cantidad de unidades a enviar desde el Almacén 1 a la Tienda 2.
* *(Y así consecutivamente para las 18 rutas posibles de la tabla).*

### 2. Tu Función Objetivo (El Presupuesto)
El propósito de este modelo es **Minimizar los Costos Totales de Envío**. Para representarlo de forma amigable, el presupuesto se construye multiplicando la cantidad de cajas de cada viaje por su respectivo costo de transporte:

```text
[ COSTO TOTAL A MINIMIZAR ] =

   ( Cantidad en Ruta 1,1 ) × $ Costo de la Ruta 1,1
 + ( Cantidad en Ruta 1,2 ) × $ Costo de la Ruta 1,2
 + ( Cantidad en Ruta 1,3 ) × $ Costo de la Ruta 1,3
 + ( Cantidad en Ruta 2,3 ) × $ Costo de la Ruta 2,3
 + ( Cantidad en Ruta 2,4 ) × $ Costo de la Ruta 2,4
 + ( Cantidad en Ruta 3,4 ) × $ Costo de la Ruta 3,4
 + ( Cantidad en Ruta 3,5 ) × $ Costo de la Ruta 3,5
 + ( Cantidad en Ruta 3,6 ) × $ Costo de la Ruta 3,6
```

### 3. Las Restricciones (Tus límites lógicos)
### Reglas de los Almacenes (Capacidad de Oferta):

No puedes enviar más mercancía de la que tienes guardada en cada fila.Almacén 1: $X_{11} + X_{12} + X_{13} + X_{14} + X_{15} + X_{16} = 250$Almacén 2: $X_{21} + X_{22} + X_{23} + X_{24} + X_{25} + X_{26} = 320$Almacén 3: $X_{31} + X_{32} + X_{33} + X_{34} + X_{35} + X_{36} = 500$Reglas de las Tiendas (Requisitos de Demanda):Debes cumplir exactamente con lo que te pide cada columna.Tienda 1: $X_{11} + X_{21} + X_{31} = 120$Tienda 2: $X_{12} + X_{22} + X_{32} = 108$Tienda 3: $X_{13} + X_{23} + X_{33} = 195$Tienda 4: $X_{14} + X_{24} + X_{34} = 270$Tienda 5: $X_{15} + X_{25} + X_{35} = 300$Tienda 6: $X_{16} + X_{26} + X_{36} = 77$Nota: Añadimos la condición de que ninguna cantidad puede ser negativa ($X_{ij} \ge 0$).

### Interpretación del Resultado Final
Interpretar el resultado significa traducir esos números de la tabla a instrucciones claras de operación para la empresa. Un gerente de operaciones no lee matrices; lee planes de acción.La interpretación de nuestra solución de la Esquina Noroeste se dicta de la siguiente manera:Operación del Almacén 1: Este almacén agotará sus 250 unidades distribuyéndolas en tres destinos: despachará 120 unidades de forma exclusiva a la Tienda 1, enviará 108 unidades a la Tienda 2, y transferirá sus últimas 22 unidades sobrantes a la Tienda 3.Operación del Almacén 2: Su stock de 320 unidades se dividirá para cubrir dos pendientes: enviará 173 unidades a la Tienda 3 (completando el pedido que el Almacén 1 dejó a medias) y destinará sus 147 unidades restantes a la Tienda 4.Operación del Almacén 3: Al ser el almacén con mayor capacidad, se encargará de cerrar el día cubriendo los déficits finales: despachará 123 unidades a la Tienda 4, surtirá las 300 unidades completas de la Tienda 5 y enviará las últimas 77 unidades a la Tienda 6.

### Conclusión Crítica para el Análisis:
Como estudiantes o profesionales, debemos notar algo crucial: el método de la Esquina Noroeste es rápido pero ignorante. Logró armar un plan de envíos coherente que cumple las reglas en menos de 5 minutos, pero como no miró los costos de las rutas, es muy probable que este plan sea costoso para la empresa. Funciona perfectamente como una solución básica inicial, lista para ser optimizada más adelante por algoritmos avanzados como el método Simplex de Transporte o el método de Vogel.