<?php

declare(strict_types=1);

use App\Router\Router;
use Dotenv\Dotenv;

session_start();

require_once '../vendor/autoload.php';

setlocale(LC_CTYPE, 'fr_FR', 'fra');

$dotenv = Dotenv::createImmutable('..\\')->load();

$router = new Router();
$router->run();
