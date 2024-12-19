---
title: '¿Cómo mejorar tu lógica de programación y no llorar en el intento?🥲'
description: 'Consejos de cómo mejorar nuestra lógica, pero también cómo enfrentarnos a esos problemas teniendo en cuenta otros aspectos.'
date: '2024-11-21'
draft: false
author:
  name: 'Victor Quiñones'
  avatar: 'https://i.pravatar.cc/300?img=8'
  github: 'https://github.com/vctorqui'
  linkedin: 'https://linkedin.com/in/victorqui'
---

## Introducción

Muchos programadores, y me incluyo, hemos sufrido alguna vez intentando resolver un problema. A veces sentimos mucha frustación cuando estamos estancados en algo y no encontramos solución. En ese momento de frustación, debemos respirar y dividir el problema en pequeñas soluciones.

Una vez alguien me dijo: "Debemos tomar ese problema grande y dividirlo en pequeños fragmentos, y poco a poco ir resolviendo cada pequeño fragmento que te hará resolver ese rompecabezas."

Ahora bien, ¿cómo podemos mejorar nuestrar lógica a la de resolver un problema? Quizá la respuesta sea un poco obvia, como: "Necesitas practicar ejercicios" o "Mejoras en programación, programando¨ y es complementamente cierto. No puedes mejorar en algo que no practicas. Pero antes de caer en la frustación de no poder resolver un primer ejecicio, déjame darte unos pequeños consejos:

- **Analiza el problema antes de comenzar a codear**. Está bien que tengas la motivación para hacerlo y no te rindas, pero de nada vale empezar a escribir código si no sabes cuál es el problema principal.
- **Divide el problema en pequeños fragmentos y ve resolviendo uno por uno**. No importa si un ejercico al principio te toma más lineas de lo que esperas, lo importante es resolverlo y, de allí, partir para saber que puedes cambiar o refactorizar.
- **La programación no es fácil**, lleva tiempo, dedicación y mucha disciplina. En 3 meses no serás el mejor programador del mundo. Date tiempo para mejorar y, cada día, tener la posibilidad de crecer más.
- Al principio, **aprender a querer el código**. De nada vale querer aprender a programar pensando en cuánto dinero puedes ganar porque no es así. Como ya dije,, lleva tiempo y dedicación. Intenta respirar cada vez que tengas 1000 errores en consola, aunque es casi imposible hacerlo. Pero, al final del día, la satisfacción está en ver ese resultado que esperabas.

Ahora vamos a poder en práctica nuestra lógica🚀

---

## Ejercicio para practicar👨🏻💻

- Ejercicio Two Sum

Ahora tenemos el siguiente ejercicio, mejor conocido como Two Sum. Es el problema de las dos sumas que consiste en encontrar dos números en una matriz que sumen un número objetivo dado. Cabe destacar que este ejercicio puede ser más complejo de lo que parece si empezamos a cuestionar o imaginar otros casos. Usaremos dos métodos distintos para resolverlo.

**Problema:** Dado un array de enteros, devuelve los índices de los dos números que suman un objetivo dado.

```bash
-- Ejemplos Inputs y Outputs -- 

// Ejemplo 1:

Input: nums = [ 6 , 2 , 3 ] ;  target = 8 Output: [ 0 , 1 ]

// Ejemplo 2

Input: nums = [ 3 ,  2 ,  4 ] ;  target = 6 Output: [ 1 ,  2 ]

// Ejemplo 3

Input: nums = [ 5 ,  7 ,  5 ] ;  target = 10 Output: [ 0 , 2 ]
```

Necesitamos encontrar la combinación de que la suma de dos numeros del target deseado. Entonces, ¿Qué podemos hacer?🤔Pues aquí es donde entra uno de los consejos, antes de codear, dividir el problema en fragmentos.

## Comprender el problema

1. Comprener el problema, para eso debemos saber cual es el Objetivo, el cual es encontrar dos números en un array que sumen un valor y que devuelva el indice.
2. Tenemos una entrada que esta conformada con un Array de enteros 'nums' y un entero llamado 'target'. También tenemos una salida que representa los índices de los números que suman el 'target'.

## Definir los casos de prueba del ejercicio

```bash
// Input: nums = [ 6 , 2 , 3 ] ;  target = 8

// Output: [ 0 , 1 ] ( Porque nums[0] + nums[1] es 6 + 2, que es igual a 8 )
```

pero, ¿Qué sucede si no hay dos números que sumen el objetivo?🤔
