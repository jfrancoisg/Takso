<?php

declare(strict_types=1);

namespace App\Controller;

use App\App;

final class FicheController extends CoreController
{
    public function index(): void
    {
        $this->render('index');
    }

    public function dwwm(): void
    {
        $data = [];
        $data['back'] = App::getClass('competance')->getHtml(1);
        $data['front'] = App::getClass('competance')->getHtml(2);
        $data['securite'] = App::getClass('competance')->getHtml(3);
        $data['autres'] = App::getClass('competance')->getHtml(4);

        $this->render(
            'dwwm',
            $data
        );
    }
}
