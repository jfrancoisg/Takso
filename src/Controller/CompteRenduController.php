<?php

declare(strict_types=1);

namespace App\Controller;

use App\App;

final class CompteRenduController extends CoreController
{
    public function index(): void
    {
        $this->render('index');
    }

    public function dwwm(): void
    {
        $data = [];

        $competance = App::getModel('competance');
        $data['frontCompetenceListe'] = $competance->getListGroupByType();
        $data['backCompetenceListe'] = $competance->getListGroupByType(2);

        $this->render(
            'compteRendu',
            $data
        );
    }
}
