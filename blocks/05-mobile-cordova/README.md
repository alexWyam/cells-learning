# Bloque 05 — Mobile y Cordova

## Objetivo

Entender cómo una aplicación Cells se empaqueta como app nativa para iOS y Android mediante Apache Cordova, y las particularidades del entorno mobile de BBVA.

## Contexto

Las apps de BBVA Spain mobile son aplicaciones Cells/Web empaquetadas con Cordova. El webview ejecuta la misma app que correría en navegador, con acceso adicional a plugins nativos del dispositivo.

## Temas previstos

- Estructura de proyecto Cordova + Cells
- Configuración `config.xml`
- Plugins Cordova habituales (cámara, biometría, almacenamiento seguro)
- Ciclo de vida de la app mobile (`deviceready`, `pause`, `resume`)
- Diferencias de depuración: Safari Web Inspector (iOS), Chrome Remote Debugging (Android)
- Consideraciones de rendimiento en webview

## Estado

> Bloque pendiente de desarrollo. Se añadirá progresivamente al avanzar en el aprendizaje de Cells.

## Referencia

- [Apache Cordova — Documentación](https://cordova.apache.org/docs/en/latest/)
- [Cordova — Gestión de plugins](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/#cordova-plugin-command)
