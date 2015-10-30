<?php

require './configDataBase.php';
/**
 * Set app global settings
 */
setlocale(LC_TIME, 'fr_FR', 'fra');
date_default_timezone_set("Europe/Paris");
mb_internal_encoding("UTF-8");

/**
 * Get content from angular
 */
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$nom = $request->nom;
@$prenom = $request->prenom;
@$msg1 = $request->msg1;
@$msg2 = $request->msg2;
@$msg3 = $request->msg3;

/**
 * Check if required values are indeed provided
 */
if ($nom == null || $prenom == null)
{
    die("Missing required fields 'nom' or 'prenom'.");
}

/**
 * Get connection to app db
 */
$conn = new mysqli(DB_HOST_PE, DB_USER_PE, DB_PWD_PE, DB_NAME_PE);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

/**
 * Get connection to Davidson main db
 */
$connMain = new mysqli(DB_HOST_MAIN, DB_USER_MAIN, DB_PWD_MAIN, DB_NAME_MAIN);
if ($connMain->connect_error) {
    die("Connection failed: " . $connMain->connect_error);
}
 
/**
 * Attempt to retrieve user's branch name ('filiale') name from main db:
 * 1. Get user id from table1
 */
$QueryCslt = "SELECT id FROM table1 WHERE firstName='" . $prenom . "' AND lastName='" . $nom . "' AND profileId='cst'";
$r = $connMain->query($QueryCslt);
$rowCst = $r->fetch_array();

if (sizeof($rowCst) > 0) {  // If at least one match
    $idCst = $rowCst[0];   // Get first match in case query matched more than one item
/**
 *  2. Get user's filiale name from user id
 */
    $QuerynameFiliale = "SELECT name FROM filiale as f JOIN table2 as t ON t.branchId = f.id JOIN table1 as u ON u.id = t.personId WHERE u.id = " . $idCst . ";";
    $resultat = $connMain->query($QuerynameFiliale);
    $row = $resultat->fetch_array();
    $nameFiliale = $row[0];
} else {
    $nameFiliale = "non renseigné";
}

/**
 * All the necessary data is ready, prepare query
 */
$sql = "INSERT INTO " . TABLE_BD_PE . " (Nom, Prenom, Filiale, BonnesImpressions, Idees, Achanger)
    VALUES ('" . addslashes($nom) . "',
                '" . addslashes($prenom) . "',
                '" . addslashes($nameFiliale) . "',
                '" . addslashes($msg1) . "',
                '" . addslashes($msg2) . "',
                '" . addslashes($msg3) . "')";

/**
 * Insert values into app db, report errors
 */
if ($conn->query($sql) === FALSE) {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$connMain->close();
$conn->close();
?>
