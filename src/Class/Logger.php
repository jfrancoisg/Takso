<?php

/**
 * Logger.
 *
 * PHP version 8.2
 *
 * @category Log
 *
 * @package Log
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */

declare(strict_types=1);

namespace App\Class;

use Exception;

/**
 * Logger.
 *
 * @category Log
 *
 * @package Log
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */
final class Logger
{
    /**
     * @var resource|false $handle Ressource
     */
    private $handle;

    /**
     * Cette fonction ouvre un fichier et renvoie un descripteur de fichier.
     *
     * @param string $file Le nom du fichier dans lequel écrire.
     */
    public function __construct(string $file)
    {
        $this->handle = fopen('..\\logs\\' . $file . '.log', 'a+');
    }

    /**
     * Construit la ligne à insérer dans le fichier de log.
     *
     * @param string        $level   Niveau d'alerte
     * @param string        $message Message à insérer
     * @param array<string> $context Un tableau d'informations contextuelles
     */
    public function log(
        string $level,
        string $message,
        array $context = []
    ): void {
        if ($this->handle !== false) {
            try {
                if ($message === '') {
                    foreach ($context as $k => $v) {
                        $message = str_replace('{' . $k . '}', $v, $message);
                    }
                }

                $log = sprintf(
                    '%s [%s] - %s',
                    gmdate('Y-m-d H:i:s', time()),
                    strtoupper($level),
                    $message . PHP_EOL
                );

                fwrite($this->handle, $log);
            } catch (Exception $e) {
                $logger = new Logger('log');
                $logger->log('error', $e->getMessage());
            }
            fclose($this->handle);
        }
    }
}
