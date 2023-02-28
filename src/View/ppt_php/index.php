<?php
    session_start();
    require_once('../ppt_php/ppt.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Piedra, papel o tijera</title>
    <link rel="stylesheet" href="../../Assets/CSS/ppt_php.css">
</head>
<body>
    <h1>Piedra, papel o tijera</h1>
    <form method="POST">
        <div class="options">
            <button type="submit" name="choice" value="1"><img src="rock.png" alt="Rock"></button>
            <button type="submit" name="choice" value="2"><img src="paper.png" alt="Paper"></button>
            <button type="submit" name="choice" value="3"><img src="scissors.png" alt="Scissors"></button>
        </div>
        <?php if (isset($result)) { ?>
            <div class="result">
                <h2><?php echo $result; ?></h2>
                <button type="submit" name="play_again">Jugar de nuevo</button>
            </div>
        <?php } ?>
    </form>
</body>
</html>





