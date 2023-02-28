<?php
session_start();

if (!isset($_SESSION['board'])) {
    reset_board();
}

if (isset($_POST['reset'])) {
    reset_board();
}

if (isset($_POST['cell'])) {
    $cell = (int) $_POST['cell'];
    if ($_SESSION['board'][$cell] == '') {
        $_SESSION['board'][$cell] = $_SESSION['turn'];
        if (check_win()) {
            $_SESSION['winner'] = $_SESSION['turn'];
        } else if (!in_array('', $_SESSION['board'])) {
            $_SESSION['winner'] = 'Tie';
        }
        $_SESSION['turn'] = ($_SESSION['turn'] == 'X') ? 'O' : 'X';
    }
}

function reset_board() {
    $_SESSION['board'] = array_fill(1, 9, '');
    $_SESSION['turn'] = 'X';
    $_SESSION['winner'] = '';
}

function render_cell($id) {
    $value = $_SESSION['board'][$id];
    $disabled = ($value != '' || $_SESSION['winner'] != '') ? 'disabled' : '';
    return "<td><button type='submit' name='cell' value='$id' $disabled>$value</button></td>";
}

function check_win() {
    $board = $_SESSION['board'];
    $winning_combinations = array(
        array(1, 2, 3), array(4, 5, 6), array(7, 8, 9),
        array(1, 4, 7), array(2, 5, 8), array(3, 6, 9),
        array(1, 5, 9), array(3, 5, 7)
    );
    foreach ($winning_combinations as $combination) {
        if ($board[$combination[0]] != '' &&
            $board[$combination[0]] == $board[$combination[1]] &&
            $board[$combination[1]] == $board[$combination[2]]) {
            return $board[$combination[0]];
        }
    }
    return null;
}
?>
