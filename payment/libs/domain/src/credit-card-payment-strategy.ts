import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago con tarjeta de crédito
 * Otra implementación concreta del patrón Strategy para manejar pagos
 * 
 * En la vida real, aquí habría validaciones del número de tarjeta,
 * verificación de fondos disponibles, comunicación con el banco, etc.
 * Pero para este ejemplo, simplificamos y asumimos que siempre funciona.
 * 
 * @class CreditCardPaymentStrategy
 * @implements {IPaymentStrategy}
 */
export class CreditCardPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa un pago con tarjeta de crédito
     * 
     * En un sistema real, aquí se haría toda la magia de:
     * - Validar el número de tarjeta
     * - Verificar la fecha de vencimiento
     * - Confirmar el código CVV
     * - Comunicarse con el banco para autorizar el pago
     * 
     * Por ahora solo simulamos que todo salió bien
     * 
     * @param amount - Cuánto dinero se está cobrando a la tarjeta
     * @returns true - Asumimos que el pago siempre es exitoso
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " using Credit Card");
        return true;
    }    
}