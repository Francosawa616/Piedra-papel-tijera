<?php
$cards = array(
  array(
    "key" => "1",
    "front" => "php.png",
    "back" => "php.png"
  ),
  array(
    "key" => "2",
    "front" => "front.png",
    "back" => "card2.png"
  ),
  array(
    "key" => "3",
    "front" => "front.png",
    "back" => "card3.png"
  ),
  array(
    "key" => "4",
    "front" => "front.png",
    "back" => "card4.png"
  )
);

$cards = array_merge($cards, $cards);

shuffle($cards);

echo '<div id="cards" class="container">';

for ($i = 0; $i < 2; $i++) {
  echo '<div class="row">';
  for ($j = 0; $j < 4; $j++) {
    $index = $i * 4 + $j;
    $card = $cards[$index];
    echo '<div class="col">';
    echo '<div class="card" data-key="' . $card["key"] . '">';
    echo '<div class="card-front">';
    echo '<img src="' . $card["front"] . '">';
    echo '</div>';
    echo '<div class="card-back">';
    echo '<img src="' . $card["back"] . '">';
    echo '</div>';
    echo '</div>';
    echo '</div>';
  }
  echo '</div>';
}

echo '</div>';
?>
