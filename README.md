# Desafío Web: Fibonacci y Números Primos en el Mundo Real

Este proyecto interactivo resuelve tres problemáticas aplicadas directamente al mundo real utilizando propiedades matemáticas avanzadas y una interfaz web moderna estilizada con la identidad visual oscura de IMDb (fondos oscuros con acentos amarillos).

## 🧠 Explicación Detallada de la Lógica de los Problemas

### 1. Fibonacci en Ahorro Progresivo
**Lógica:** La sucesión de Fibonacci calcula cada término mediante la adición de los dos inmediatos anteriores ($F_n = F_{n-1} + F_{n-2}$).  
**Optimización del Código:** Para cumplir estrictamente con los requerimientos técnicos avanzados, el algoritmo se ejecuta mediante variables simples de intercambio (`a`, `b`, `c`), calculando el flujo dinámico paso a paso dentro de un bucle `for`. Esto evita reservar memoria con arreglos o vectores, garantizando un rendimiento óptimo de procesamiento en el cliente con complejidad espacial $O(1)$.  
**Aplicación Real:** Simula estrategias de ahorro escalonado donde los aportes mensuales dependen del historial reciente de acumulación, permitiendo una curva de crecimiento acelerada pero predecible para inversores y emprendedores.

### 2. Números Primos en Códigos de Acceso
**Lógica:** Un número primo es un número natural mayor que 1 que posee exactamente dos divisores positivos distintos: el mismo número y el 1.  
**Implementación:** El código recorre cíclicamente todos los enteros comprendidos entre 1 y el número provisto mediante la operación aritmético-módulo (`%`). El sistema incrementa un contador cada vez que el residuo es cero. Al finalizar el ciclo, si el contador almacena un valor equivalente a 2, la clave es declarada como de alta seguridad y pasa los filtros de la interfaz.  
**Aplicación Real:** Base fundamental para la validación de tokens de acceso y generación preliminar de llaves criptográficas, donde la irreductibilidad matemática garantiza la exclusividad y resistencia a ataques por fuerza bruta.

### 3. Filtro Combinado (Bioinformática)
**Lógica:** Une ambos mundos matemáticos en una sola ejecución unificada. Genera términos secuenciales de Fibonacci y, en tiempo de ejecución, cada resultado es interceptado por un validador de división exacta que audita si el número de la serie posee propiedades primas.  
**Propósito Práctico:** Simula el filtrado de frecuencias armónicas estables en bioingeniería, destacando visualmente aquellos eventos raros que cumplen con ambas condiciones matemáticas de manera simultánea. En investigación genómica, esto equivale a identificar marcadores estables con patrones de mutación irreductibles.

---

## 📂 Arquitectura de los Archivos del Proyecto

La estructura del repositorio se organiza bajo un esquema limpio y modular, separando las responsabilidades de diseño, marcado y comportamiento lógico:

```text
desafio-fibonacci-primos/
│
├── index.html          # Estructura semántica, contenidos extensos y formularios de la aplicación.
│
├── css/
│   └── estilos.css     # Estilos de diseño responsivo y maquetación oscura estilo IMDb.
│
├── js/
│   └── script.js       # Captura de eventos del DOM y algoritmos lógicos matemáticos puros.
│
└── README.md           # Documentación técnica, explicaciones de la lógica y arquitectura.