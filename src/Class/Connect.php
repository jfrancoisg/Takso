<?php

namespace App\Class;

use App\Interface\Iconnect;
use PDO;
use PDOException;

final class Connect implements Iconnect
{
    private PDO $connection;
    private static Connect $instance;

    private function __construct()
    {
        try {
            $this->connection = new PDO(
                $_ENV['DSN_MYSQL'],
                $_ENV['USER'],
                $_ENV['PWD'],
            );

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
