<?php

/* https://api.telegram.org/bot1845613761:AAEF-_hYNflSug1E-W24pkVHZcBwwZkWTJY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = !empty($_POST['name'])?$_POST['name']:false;
$phone = !empty($_POST['phone'])?$_POST['phone']:false;
$site = 'Superb Logistics';
$token = "1845613761:AAEF-_hYNflSug1E-W24pkVHZcBwwZkWTJY";
$chat_id = "-589831421";
$arr = array(
  'Caйт: ' => $site,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../thanks.html');
} else {
  echo "Error";
}
?>