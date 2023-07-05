<?php

declare(strict_types=1);

namespace App\Class;

use App\App;

final class Competance
{
    private string $html = '';
    private array $menu = [];

    public function afficheComptences(int $idCompetance): string
    {
        $this->menu = App::getModel('competance')
            ->getConnaissanceById($idCompetance);

        $this->displayMenu($this->menu);
        return $this->html;
    }

    public function displayMenu($menu, $parent_id = 0, $level = 0): void
    {
        // Filtrer les éléments ayant le parent_id correspondant
        $submenu = array_filter(
            $menu,
            function ($item) use ($parent_id) {
                return $item['parent_id'] == $parent_id;
            }
        );

        // Vérifier s'il y a des éléments dans le sous-menu
        if (count($submenu) > 0) {
            $this->html .= '<ul>';
            foreach ($submenu as $item) {
                $this->html .= '<li><span>' . $item['nom'] . '</span>';
                if ($item['parent_id'] !== null && $item['eval'] !== 0) {
                    $this->html .= '<input type="range" 
                        value="0" min="0" max="3" step="0.5" name="'
                        . $item['id'] . '" id="'
                        . $item['id'] . '" list="tickmarks">';
                }
                $this->html .= '</li>';
                // Appeler récursivement la fonction pour afficher les sous-menus
                $this->displayMenu($menu, $item['id'], $level + 1);
            }
            $this->html .= '</ul>';
        }
    }

    public function getHtml(int $idCompetance)
    {
        $this->afficheComptences($idCompetance);
        return $this->html;
    }
}
