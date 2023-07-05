<?php

declare(strict_types=1);

namespace App\Model;

use App\Interface\Imodel;
use PDO;

final class Competance implements Imodel
{
    public function __construct(protected PDO $conn)
    {
        $this->conn = $conn;
    }

    public function getById(int $idCompetence): mixed
    {
        $sql = 'SELECT id, name FROM competence WHERE id = :idCompetence';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':idCompetence', $idCompetence, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch();
    }

    public function getAll(): array|false
    {
        $sql = 'SELECT id, nom FROM competence';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function getList(): array|false
    {
        $sql = 'SELECT id, nom FROM competence ORDER BY nom';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_KEY_PAIR);
    }

    public function getListGroupByType(int $idTypeCompetence = 1): array|false
    {
        $sql = 'SELECT c.id, tc.nom nom_type_competence, c.nom 
                FROM competence c
                LEFT JOIN type_competence tc ON tc.id = c.id_type_competence
                WHERE tc.id = :idTypeCompetence
                ORDER BY tc.nom, c.nom';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':idTypeCompetence', $idTypeCompetence, 1);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function getConnaissanceById(int $id): array|false
    {
        $sql = 'WITH RECURSIVE conn (id, nom, parent_id, eval, level) AS (
                SELECT id, nom, parent_id, 0, 0 
                FROM connaisance
                WHERE id = :id
                UNION ALL
                SELECT c.id, c.nom, c.parent_id, c.eval, conn.level + 1 
                FROM connaisance c, conn
                WHERE c.parent_id = conn.id
            )
            SELECT id, nom, parent_id, eval, level FROM conn';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll();
    }
}
