import { CashPaymentStrategy } from "./cash-payment-strategy";
import { CreditCardPaymentStrategy } from "./credit-card-payment-strategy";
import { DebitCardPaymentStrategy } from "./debit-card-payment-strategy";
import { PaymentContext } from "./payment-context";

/**
 * Servicio principal para procesar pagos
 * Este es como el "director de orquesta" - recibe una solicitud de pago
 * y se encarga de coordinar todo el proceso usando el patrón Strategy
 * 
 * Aquí es donde se toma la decisión de qué estrategia usar basándose
 * en el tipo de pago que eligió el cliente
 * 
 * @class PaymentService
 * @since 1.0.0
 * @author JersonCh
 */
export class PaymentService {
    /**
     * Procesa un pago usando la estrategia apropiada
     * 
     * Este método es como un switch inteligente que:
     * 1. Crea un contexto de pago
     * 2. Decide qué estrategia usar según el tipo de pago
     * 3. Configura la estrategia en el contexto
     * 4. Ejecuta el pago
     * 
     * Es el punto de entrada principal para cualquier pago en el sistema
     * 
     * @param SelectedPaymentType - Qué tipo de pago quiere usar el cliente (usa el enum PaymentType)
     * @param Amount - Cuánto dinero se va a pagar
     * @returns true si el pago fue exitoso, false si falló
     * @throws Error si se selecciona un tipo de pago inválido
     */
    public ProcessPayment(SelectedPaymentType: number, Amount: number): boolean {
        // Creamos el contexto que va a manejar el pago
        const context = new PaymentContext();
        
        // Aquí hacemos el "casting" - decidimos qué estrategia usar
        if (SelectedPaymentType == PaymentType.CreditCard) {
            context.SetPaymentStrategy(new CreditCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.DebitCard) {
            context.SetPaymentStrategy(new DebitCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.Cash) {
            context.SetPaymentStrategy(new CashPaymentStrategy());
        }
        else {
            throw new Error("You Select an Invalid Payment Option");
        }
        
        // Finalmente, ejecutamos el pago con la estrategia seleccionada
        return context.Pay(Amount);
    }    
}

/**
 * Enumeración de tipos de pago disponibles
 * Simplifica la selección de métodos de pago y evita usar números "mágicos"
 * 
 * En lugar de recordar que 1 = CreditCard, usamos PaymentType.CreditCard
 * que es mucho más claro y fácil de mantener
 * 
 * @enum PaymentType
 * @since 1.0.0
 */
export enum PaymentType {
    /** Pago con tarjeta de crédito */
    CreditCard = 1,
    
    /** Pago con tarjeta de débito */
    DebitCard = 2,
    
    /** Pago en efectivo */
    Cash = 3,
}