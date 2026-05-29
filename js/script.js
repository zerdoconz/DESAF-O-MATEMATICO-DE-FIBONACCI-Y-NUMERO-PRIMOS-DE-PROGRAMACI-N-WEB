document.addEventListener('DOMContentLoaded', () => {
    // ==================== 1. FIBONACCI ====================
    const btnFib = document.getElementById('btn-calc-fib');
    const inputFib = document.getElementById('input-meses');
    const resFib = document.getElementById('resultado-fib');
    const codeFib = document.getElementById('code-fib');

    codeFib.textContent = `function calcularFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}`;

    function calcularFibonacci(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;
        let a = 0, b = 1, c = 0;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    btnFib.addEventListener('click', () => {
        const valor = parseInt(inputFib.value);
        if (isNaN(valor) || valor < 1) {
            resFib.textContent = '⚠️ Por favor, ingresa un número válido mayor a 0.';
            return;
        }
        const resultado = calcularFibonacci(valor);
        resFib.textContent = `✅ Después de ${valor} períodos, el monto acumulado siguiendo la progresión de Fibonacci es: $${resultado}`;
    });

    // ==================== 2. NÚMEROS PRIMOS ====================
    const btnPrimo = document.getElementById('btn-validar-primo');
    const inputPrimo = document.getElementById('input-numero');
    const resPrimo = document.getElementById('resultado-primo');
    const codePrimo = document.getElementById('code-primo');

    codePrimo.textContent = `function validarPrimo(num) {
    if (num < 2) return false;
    let contadorDivisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) contadorDivisores++;
    }
    return contadorDivisores === 2;
}`;

    function validarPrimo(num) {
        if (num < 2) return false;
        let contadorDivisores = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) contadorDivisores++;
        }
        return contadorDivisores === 2;
    }

    btnPrimo.addEventListener('click', () => {
        const valor = parseInt(inputPrimo.value);
        if (isNaN(valor) || valor < 1) {
            resPrimo.textContent = '⚠️ Ingresa un número entero positivo válido.';
            return;
        }
        const esSeguro = validarPrimo(valor);
        if (esSeguro) {
            resPrimo.textContent = `🔒 CLAVE DE ALTA SEGURIDAD: El número ${valor} es primo y pasa los filtros de validación.`;
        } else {
            resPrimo.textContent = `🔓 CLAVE RECHAZADA: El número ${valor} no es primo y no cumple con el estándar de seguridad.`;
        }
    });

    // ==================== 3. COMBINADO (BIOINFORMÁTICA) ====================
    const btnBio = document.getElementById('btn-filtro-bio');
    const inputBio = document.getElementById('input-limite');
    const resBio = document.getElementById('resultado-combinado');
    const codeBio = document.getElementById('code-combinado');

    codeBio.textContent = `function filtroBioinformatico(limite) {
    let a = 0, b = 1, c = 0;
    let resultados = [];
    while (a <= limite) {
        // Validación prima interna
        let cont = 0;
        if (a >= 2) {
            for (let i = 1; i <= a; i++) if (a % i === 0) cont++;
        }
        if (cont === 2) resultados.push(a);
        
        c = a + b;
        a = b;
        b = c;
    }
    return resultados;
}`;

    function filtroBioinformatico(limite) {
        let a = 0, b = 1, c = 0;
        let resultados = [];
        while (a <= limite) {
            let cont = 0;
            if (a >= 2) {
                for (let i = 1; i <= a; i++) {
                    if (a % i === 0) cont++;
                }
            }
            if (cont === 2) resultados.push(a);
            
            c = a + b;
            a = b;
            b = c;
        }
        return resultados;
    }

    btnBio.addEventListener('click', () => {
        const limite = parseInt(inputBio.value);
        if (isNaN(limite) || limite < 1) {
            resBio.textContent = '⚠️ Define un límite numérico válido para el análisis.';
            return;
        }
        const eventosRaros = filtroBioinformatico(limite);
        if (eventosRaros.length === 0) {
            resBio.textContent = '🧬 No se encontraron frecuencias armónicas estables y primas en este rango.';
        } else {
            resBio.textContent = `🧬 EVENTOS FILTRADOS (Fibonacci + Primos): [ ${eventosRaros.join(', ')} ]`;
        }
    });
});