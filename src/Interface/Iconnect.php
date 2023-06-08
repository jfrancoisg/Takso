<?php

/**
 * Interface.
 *
 * PHP version 8.2
 *
 * @category Connexion
 *
 * @package Interface
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */

declare(strict_types=1);

namespace App\Interface;

use PDO;

/**
 * Interface.
 *
 * @category Interfaces
 *
 * @package Connexion
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */
interface Iconnect
{
    public static function getInstance(): self;

    public function getConnection(): PDO;
}
