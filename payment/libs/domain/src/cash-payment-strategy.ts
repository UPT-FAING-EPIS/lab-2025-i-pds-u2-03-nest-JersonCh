import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago en efectivo
 * Una de las implementaciones concretas del patrón Strategy para manejar pagos
 *
 * Esta es la más simple de todas - cuando pagas en efectivo no hay validaciones
 * complicadas, solo tomas el dinero y listo. Por eso siempre retorna true.
 *
 * @class CashPaymentStrategy
 * @implements {IPaymentStrategy}
 */
export class CashPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa un pago en efectivo
     *
     * Como es efectivo, no hay mucho que validar - si el cliente tiene
     * el dinero físico, el pago se puede hacer. Por eso siempre es exitoso.
     *
     * @param amount - Cuánto dinero está pagando el cliente
     * @returns true - Los pagos en efectivo siempre son exitosos (asumiendo que el cliente tiene el dinero)
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " By Cash");
        return true;
    }
}