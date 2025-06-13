import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando para retirar dinero de una cuenta
 * Es el hermano gemelo de DepositCommand, pero para hacer retiros
 * 
 * La idea es la misma: en lugar de llamar directamente account.Withdraw(),
 * creamos un comando que "envuelve" esa operación junto con todos los
 * datos necesarios (cuenta y monto a retirar)
 * 
 * @class WithdrawCommand
 * @implements {ICommand}
 */
export class WithdrawCommand implements ICommand {
  /**
   * La cuenta de donde vamos a sacar el dinero
   * Necesitamos guardar esta referencia para usarla después
   */
  _account: Account;
  
  /**
   * Cuánto dinero queremos retirar
   * Este valor queda "congelado" cuando creamos el comando
   */
  _amount: number;

  /**
   * Constructor - preparamos el comando de retiro con todos los datos
   * @param account - De qué cuenta vamos a retirar
   * @param amount - Cuánto dinero queremos sacar
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }
  
  /**
   * Aquí ejecutamos el retiro de verdad
   * El comando simplemente delega la operación a la cuenta,
   * pero se encarga de tener todo listo para cuando llegue el momento
   */
  Execute(): void {
    this._account.Withdraw(this._amount);
  }
}