<?php

/**
 * Interface.
 *
 * PHP version 8.2
 *
 * @category Model
 *
 * @package Model
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */

declare(strict_types=1);

namespace App\Interface;

/**
 * Model.
 *
 * @category Model
 *
 * @package Model
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */
interface Imodel
{
    public function getById(int $id): mixed;

    /**
     * Retourne toutes les enregistrements.
     *
     * @return array<string>|false
     */
    public function getAll(): array|false;

    /**
     * Retourne toutes les enregistrements sous forme de liste.
     *
     * @return array<string>|false
     */
    public function getList(): array|false;
}
