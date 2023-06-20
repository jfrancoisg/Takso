<?php

declare(strict_types=1);

namespace App\Class;

use App\Interface\Iconnect;
use Exception;
use PDO;
use PDOException;

final class Connect implements Iconnect
{
    private PDO $connection;
    private static Connect $instance;

    private function __construct()
    {
        try {
            $this->connection = new PDO('sqlite:C:\laragon\www\takso\db\db.sqlite');

            $this->connection->setAttribute(
                PDO::ATTR_DEFAULT_FETCH_MODE,
                PDO::FETCH_ASSOC
            );
            $this->connection->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );
        } catch (PDOException $e) {
            $logger = new Logger('connexion');
            $logger->log('critical', $e->getMessage());
        } catch (Exception $e) {
            $logger = new Logger('connexion');
            $logger->log('error', $e->getMessage());
        }
    }

    public static function getInstance(): self
    {
        if (isset(self::$instance) === false) {
            self::$instance = new Connect();
        }
        return self::$instance;
    }

    public function getConnection(): PDO
    {
        return $this->connection;
    }
}
