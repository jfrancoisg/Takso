<?php

declare(strict_types=1);

namespace App\Class;

use App\App;

final class Competance
{
    /** @var string $html Code HTML */
    private string $html = '';
    /** @var array<string> Tableau des compétences */
    private array $menu = [];

    public function afficheComptences(int $idCompetance): string
    {
        $this->menu = App::getModel('competance')
            ->getConnaissanceById($idCompetance);

        $this->displayCompetence($this->menu);
        return $this->html;
    }

    /**
     * @param array<string> $menu      Tableau contenant des connaissances
     * @param int           $parent_id Identifiant du parent
     * @param int           $level     Niveau d'imbrication
     */
    public function displayCompetence(
        array $menu,
        int $parent_id = 0,
        int $level = 0
    ): void {
        $subCompetence = $this->getCompetence($menu, $parent_id);
        if (count($subCompetence) > 0) {
            $this->html .= '<ul>';
            foreach ($subCompetence as $item) {
                $this->html .= '<li><span>';
                $this->html .= $item['parent_id'] !== null
                    ? $item['nom'] : '<strong>' . $item['nom'] . '</strong>';
                $this->html .= '</span>';
                if ($item['parent_id'] !== null && $item['eval'] !== 0) {
                    $this->html .= '<input type="range" value="0" min="0"
                    max="3" step="0.5" name="' . $item['id'] . '" 
                    list="tickmarks">';
                }
                $this->html .= '</li>';
                $this->displayCompetence($menu, (int) $item['id'], $level + 1);
            }
            $this->html .= '</ul>';
        }
    }

    public function getHtml(int $idCompetance): string
    {
        $this->afficheComptences($idCompetance);
        return $this->html;
    }

    public function getCoef(): void
    {
        App::getModel('connaissance')->getCoef();
    }

    /**
     * @param array<string> $competenceList Liste des compétences
     * @param int               $parent_id      Identifiant du parent
     *
     * @return array<mixed>
     */
    private function getCompetence(array $competenceList, int $parent_id): array
    {
        return array_filter(
            $competenceList,
            static function ($item) use ($parent_id) {
                return (int) $item['parent_id'] === $parent_id;
            }
        );
    }
}
