import { ICommand } from './icommand.interface';

/**
 * Clase que representa un cajero automático (ATM)
 * Actúa como Invoker en el patrón Command, siendo responsable
 * de ejecutar comandos sin conocer los detalles de su implementación
 * 
 * Esta clase desacopla el objeto que invoca la operación del objeto
 * que sabe cómo realizarla, permitiendo flexibilidad en el sistema
 * y facilitando la extensión con nuevos tipos de comandos
 * 
 * @class ATM
 * @since 1.0.0
 * @author JersonCh
 * @version 1.0.0
 * @example
 * ```typescript
 * const account = new Account();
 * const withdrawCommand = new WithdrawCommand(account, 500);
 * const atm = new ATM(withdrawCommand);
 * atm.Action(); // Ejecuta el comando de retiro
 * ```
 */
export class ATM {
  /**
   * Comando que será ejecutado por el cajero automático
   * Contiene la referencia al comando concreto que se va a ejecutar
   * cuando se llame al método Action()
   * 
   * @type {ICommand}
   * @memberof ATM
   * @private
   * @readonly
   * @since 1.0.0
   */
  _command: ICommand;

  /**
   * Constructor que inicializa el cajero automático con un comando específico
   * Establece qué comando será ejecutado cuando se llame a Action()
   * 
   * @constructor
   * @param {ICommand} command - Comando que será ejecutado por el ATM
   * @memberof ATM
   * @since 1.0.0
   * @example
   * ```typescript
   * const depositCommand = new DepositCommand(account, 300);
   * const atm = new ATM(depositCommand);
   * ```
   */
  constructor(command: ICommand) {
    this._command = command;
  }

  /**
   * Ejecuta la acción encapsulada en el comando
   * Este método actúa como punto de entrada para ejecutar cualquier
   * operación sin conocer los detalles específicos de la implementación
   * 
   * Implementa el patrón Command permitiendo que el ATM ejecute
   * diferentes tipos de operaciones de manera uniforme
   * 
   * @memberof ATM
   * @method Action
   * @returns {void} No retorna valor, la operación se ejecuta por efectos secundarios
   * @throws {Error} Puede lanzar errores provenientes del comando ejecutado
   * @since 1.0.0
   * @example
   * ```typescript
   * const atm = new ATM(someCommand);
   * atm.Action(); // Ejecuta el comando configurado
   * ```
   */
  public Action(): void {
    this._command.Execute();
  }
}