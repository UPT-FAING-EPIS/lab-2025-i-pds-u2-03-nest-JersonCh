import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago con tarjeta de débito
 * La tercera implementación del patrón Strategy para completar nuestras opciones de pago
 *
 * Es muy similar a la tarjeta de crédito, pero con una diferencia importante:
 * con débito el dinero sale directamente de tu cuenta bancaria, no de un crédito.
 * En un sistema real, esto significaría verificar que tienes saldo suficiente.
 *
 * @class DebitCardPaymentStrategy
 * @implements {IPaymentStrategy}
 */
export class DebitCardPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa un pago con tarjeta de débito
     *
     * En la vida real, aquí tendríamos que:
     * - Validar la tarjeta (igual que con crédito)
     * - Verificar que hay saldo suficiente en la cuenta
     * - Hacer la transferencia inmediata del dinero
     * - Confirmar que la transacción fue exitosa
     *
     * Para este ejemplo, simplificamos y asumimos que todo funciona
     *
     * @param amount - Cuánto dinero se está debitando de la cuenta
     * @returns true - Simulamos que el pago siempre es exitoso
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " using Debit Card");
        return true;
    }
}