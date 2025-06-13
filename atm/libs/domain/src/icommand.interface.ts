/**
 * Representa un comando que puede ser ejecutado.
 *
 * Implemente esta interfaz para definir comandos personalizados con lógica de ejecución específica.
 */
export interface ICommand {
  Execute(): void;
}