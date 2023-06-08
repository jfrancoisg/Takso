<?php

/**
 * Controller principal.
 *
 * PHP version 8.2
 *
 * @category Controller
 *
 * @package Core
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link https://www.mipih.fr
 */

declare(strict_types=1);

namespace App\Controller;

use Twig\Extension\DebugExtension;
use Twig\Extra\Intl\IntlExtension;
use Twig\Extra\String\StringExtension;

/**
 * Controller principal.
 *
 * @category Controller
 *
 * @package Core
 *
 * @author JFG <gourdain.jf@mipih.fr>
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * @link https://www.mipih.fr
 */
abstract class CoreController
{
    public function index(): void
    {
        $this->render('index');
    }

    /**
     * Affiche un template.
     *
     * @param string                      $tpl  Template à afficher
     * @param array<string,array<string>> $data Données transmis au template
     */
    public function render(string $tpl, array $data = []): void
    {
        $loader = new \Twig\Loader\FilesystemLoader('../templates');
        $twig = new \Twig\Environment(
            $loader,
            [
                'debug' => true,
            ]
        );
        $httpHost = filter_input(INPUT_SERVER, 'HTTP_HOST');
        $twig->addGlobal('title', 'Interface');
        $twig->addGlobal('httpHost', $httpHost);

        $twig->addExtension(new DebugExtension());
        $twig->addExtension(new IntlExtension());
        $twig->addExtension(new StringExtension());

        echo $twig->render(
            $tpl . '.twig',
            $data
        );
    }

    /**
     * Erreur 404.
     */
    public function error404(): void
    {
        $this->render(
            'error404',
        );
    }
}
