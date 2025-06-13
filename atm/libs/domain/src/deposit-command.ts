import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando para depositar dinero en una cuenta
 * Este es uno de los comandos concretos del patrón Command que maneja los depósitos
 *
 * Básicamente, cuando quieres depositar dinero, en lugar de llamar directamente
 * a account.Deposit(), creas un DepositCommand que "empaqueta" esa operación
 * junto con todos los datos que necesita (la cuenta y el monto)
 *
 * @class DepositCommand
 * @implements {ICommand}
 */
export class DepositCommand implements ICommand {
  /**
   * La cuenta donde se va a depositar el dinero
   * Guardamos la referencia aquí para usarla cuando se ejecute el comando
   */
  _account: Account;

  /**
   * Cuánto dinero vamos a depositar
   * Este valor se guarda cuando creamos el comando
   */
  _amount: number;

  /**
   * Constructor - aquí "preparamos" el comando con todos los datos necesarios
   * @param account - En qué cuenta vamos a depositar
   * @param amount - Cuánto dinero vamos a depositar
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * Aquí es donde realmente pasa la magia - ejecutamos el depósito
   * Solo delegamos la operación real a la cuenta, pero el comando
   * se encarga de "recordar" todos los detalles
   */
  Execute(): void {
    this._account.Deposit(this._amount);
  }
}