# Kata 3: Precios de Productos

## Problema
Crea un sistema para calcular el precio de productos con características adicionales como envoltura de regalo, envío rápido o seguro.

## Instrucciones
1. Crea una interfaz Product con un método getPrice().
2. Implementa una clase BasicProduct para productos básicos.
3. Crea decoradores como GiftWrap, ExpressShipping y Insurance.
4. Combina decoradores para calcular el precio final.

## Salida Esperada
```` text
Precio base: $100  
Envoltorio de regalo: $5  
Envío rápido: $10  
Precio total: $115
````