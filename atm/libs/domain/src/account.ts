/**
 * Clase que representa una cuenta bancaria en el sistema ATM
 * Actúa como Receiver en el patrón Command, conteniendo la lógica de negocio
 * para las operaciones de depósito y retiro de dinero
 * 
 * Esta clase encapsula el estado de la cuenta (saldo) y las operaciones
 * que se pueden realizar sobre ella, implementando las reglas de negocio
 * para transacciones bancarias básicas
 * 
 * @class Account
 * @since 1.0.0
 * @author JersonCh
 * @version 1.0.0
 * @example
 * ```typescript
 * const account = new Account();
 * account.AccountNumber = 123456;
 * account.AccountBalance = 1000;
 * account.Withdraw(500);
 * console.log(account.AccountBalance); // 500
 * ```
 */
export class Account {
  /**
   * Monto máximo permitido para operaciones de entrada (depósitos)
   * Este límite previene depósitos excesivamente grandes que podrían
   * indicar actividad fraudulenta o errores de entrada
   * 
   * @type {number}
   * @memberof Account
   * @public
   * @readonly
   * @default 10000
   * @since 1.0.0
   */
  public MAX_INPUT_AMOUNT: number = 10000;

  /**
   * Número identificador único de la cuenta bancaria
   * Utilizado para identificar de manera única cada cuenta en el sistema
   * 
   * @type {number}
   * @memberof Account
   * @public
   * @since 1.0.0
   * @example
   * ```typescript
   * account.AccountNumber = 123456789;
   * ```
   */
  public AccountNumber: number;

  /**
   * Saldo actual de la cuenta bancaria
   * Representa la cantidad de dinero disponible en la cuenta
   * Se actualiza con cada operación de depósito o retiro
   * 
   * @type {number}
   * @memberof Account
   * @public
   * @since 1.0.0
   * @example
   * ```typescript
   * account.AccountBalance = 1500.50;
   * ```
   */
  public AccountBalance: number;

  /**
   * Realiza un retiro de dinero de la cuenta
   * Valida que el monto a retirar no exceda el saldo disponible
   * y actualiza el saldo de la cuenta restando el monto retirado
   * 
   * @memberof Account
   * @method Withdraw
   * @param {number} amount - Monto a retirar de la cuenta (debe ser positivo)
   * @returns {void} No retorna valor, modifica el saldo de la cuenta
   * @throws {Error} Lanza error si el monto es mayor al saldo disponible
   * @since 1.0.0
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountBalance = 1000;
   * account.Withdraw(300); // Saldo resultante: 700
   * ```
   */
  public Withdraw(amount: number): void {
    if (amount > this.AccountBalance)
      throw new Error('The input amount is greater than balance.');
    this.AccountBalance -= amount;
  }

  /**
   * Realiza un depósito de dinero en la cuenta
   * Valida que el monto a depositar no exceda el límite máximo permitido
   * y actualiza el saldo de la cuenta sumando el monto depositado
   * 
   * @memberof Account
   * @method Deposit
   * @param {number} amount - Monto a depositar en la cuenta (debe ser positivo)
   * @returns {void} No retorna valor, modifica el saldo de la cuenta
   * @throws {Error} Lanza error si el monto excede el límite máximo permitido
   * @since 1.0.0
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountBalance = 500;
   * account.Deposit(200); // Saldo resultante: 700
   * ```
   */
  public Deposit(amount: number): void {
    if (amount > this.MAX_INPUT_AMOUNT)
      throw new Error('The input amount is greater than maximum allowed.');
    this.AccountBalance += amount;
  }
}