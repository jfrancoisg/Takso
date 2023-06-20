<?php

declare(strict_types=1);

namespace App\Enum;

enum Connaissances: int
{
    case Back = 1;
    case Front = 2;
    case Securite = 3;
    case Autres = 4;
}
