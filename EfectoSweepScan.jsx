/*
    Script: Efecto Sweep / Scan (Barrido de Haz de Luz)
    Descripción: Crea dos sólidos (barras delgadas) con una expresión de opacidad
    que simula el paso de un haz de luz de un lado a otro (barrido).
*/

(function() {
    var project = app.project;
    if (!project) {
        alert("Por favor, abre After Effects.");
        return;
    }

    // 1. Configuración de la composición
    var compName = "Efecto Sweep / Scan";
    var compW = 1920;
    var compH = 1080;
    var compDuration = 10;
    var compFrameRate = 30;

    var myComp = project.items.addComp(compName, compW, compH, 1, compDuration, compFrameRate);
    myComp.openInViewer();

    // 2. Crear los Sólidos (Barras de luz)
    var solidColor = [1, 1, 1]; // Blanco
    var solidW = 150; // Barra delgada para efecto láser/escáner
    var solidH = 1080; // Altura completa

    var scanLeft = myComp.layers.addSolid(solidColor, "Haz Izquierda", solidW, solidH, 1);
    var scanRight = myComp.layers.addSolid(solidColor, "Haz Derecha", solidW, solidH, 1);

    // 3. Posicionamiento (Izquierda y Derecha)
    scanLeft.property("Position").setValue([compW * 0.3, compH * 0.5]);
    scanRight.property("Position").setValue([compW * 0.7, compH * 0.5]);

    // 4. Expresión de Sweep (Barrido Suave)
    /*
       Explicación:
       - speed: Velocidad a la que oscila el escáner invisble.
       - beamWidth: Qué tan 'grande' es la luz (el área de influencia).
       - scannerPos: Un valor que oscila entre 0 y 1 (izquierda a derecha).
       - distance: Calcula qué tan cerca está el escáner del sólido actual.
    */
    var baseExpr = 
        "var speed = 2; // Velocidad del barrido\r" +
        "var beamWidth = 0.25; // Ancho del haz (difuminado)\r" +
        "var myPos = myIndex; // 0.3 o 0.7 según el lado\r" +
        "var scannerPos = (Math.sin(time * speed) + 1) / 2; // Oscilación 0 a 1\r" +
        "var dist = Math.abs(scannerPos - myPos);\r" +
        "linear(dist, 0, beamWidth, 100, 0);";

    // Aplicar con la posición normalizada de cada uno
    scanLeft.property("Opacity").expression = "var myIndex = 0.3;\r" + baseExpr;
    scanRight.property("Opacity").expression = "var myIndex = 0.7;\r" + baseExpr;

    alert("¡Efecto Scan creado!\n\nSe ha generado la composición '" + compName + "'.\nVerás cómo los haces se iluminan conforme el 'barrido' pasa por ellos.");
})();
