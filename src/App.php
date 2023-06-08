<?php

/**
 * Factory.
 *
 * PHP version 8.2
 *
 * @category Factory
 *
 * @package Factory
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */

declare(strict_types=1);

namespace App;

use App\Class\Connect;

/**
 * Factory.
 *
 * @category Factory
 *
 * @package Factory
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link www.mipih.fr
 */
final class App
{
    /**
     * Instancie une classe.
     *
     * @param string $nameClass Nom de la classe à instancier
     */
    public static function getClass(string $nameClass): object
    {
        $bd = Connect::getInstance();
        $classeName = '\\App\\Class\\' . ucfirst(strtolower($nameClass));

        return new $classeName($bd->getConnection());
    }

    /**
     * Instancie une model.
     *
     * @param string $nameModel Nom de la classe à instancier
     */
    public static function getModel(string $nameModel): object
    {
        $bd = Connect::getInstance();
        $modelName = '\\App\\Model\\' . ucfirst(strtolower($nameModel));

        return new $modelName($bd->getConnection());
    }
}
