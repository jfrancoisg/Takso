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
 * @author JFG <jf.gourdain@mail.com>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link film-horreur.fr
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
 * @author JFG <jf.gourdain@mail.com>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link film-horreur.fr
 */
interface Iconnect
{
    public static function getInstance(): self;

    public function getConnection(): PDO;
}
