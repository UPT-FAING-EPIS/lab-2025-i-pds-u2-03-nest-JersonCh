/**
 * Interfaz base para el patrón Strategy de pagos
 * 
 * Esta es la estrella del show - define el "contrato" que todas las estrategias
 * de pago deben cumplir. No importa si es efectivo, tarjeta de crédito o débito,
 * todas tienen que implementar el método Pay().
 * 
 * Esto es lo que hace que el patrón Strategy funcione: el cliente (PaymentContext)
 * puede usar cualquier estrategia sin saber cuál es específicamente, porque
 * todas "hablan el mismo idioma" (implementan esta interfaz).
 * 
 * @interface IPaymentStrategy
 * @since 1.0.0
 * @author JersonCh
 */
export interface IPaymentStrategy {
    /**
     * Procesa un pago con el monto especificado
     * 
     * Este es el método que cada estrategia debe implementar a su manera.
     * Cash lo hará de una forma, CreditCard de otra, pero el "qué" es lo mismo:
     * procesar un pago.
     * 
     * @param amount - Cuánto dinero se está pagando
     * @returns true si el pago fue exitoso, false si algo salió mal
     */
    Pay(amount: number): boolean;
}