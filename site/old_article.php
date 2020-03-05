<?php

$artId = 0;


$arts = [
  'https://new.beautyhack.ru//krasota/kosmetichka-zvezdy-lyubimye-sredstva-lizy-chepel',
  'https://new.beautyhack.ru/telo/fitnes-gid/testovaya-statya',
  'https://new.beautyhack.ru/krasota/uhod/kak-nanosit-krem-chtoby-zabyt-o-kosmetologe',
  'https://new.beautyhack.ru/krasota/uhod/guasha',
  'https://new.beautyhack.ru/intervyu/asel-mashanova-son-do-2300-luchshij-besplatnyj-beautyhack',
  "https://new.beautyhack.ru/novosti/plate-dzhennifer-lopez-prevratili-v-krossovki",
  "https://new.beautyhack.ru//krasota/kosmetichka-zvezdy-lyubimye-sredstva-lizy-chepel",
  "https://new.beautyhack.ru//krasota/gde-narastit-resnicy-n-glavnyh-adresov",
  "https://new.beautyhack.ru/krasota/beautyhack-dnya-kak-pravilno-nakrasit-brovi-i-pridat-im-formu",
  "https://new.beautyhack.ru/krasota/beautyhack-dnya-kak-pravilno-nakrasit-brovi-i-pridat-im-formu",
  'https://new.beautyhack.ru/intervyu/tina-kandelaki-pro-pitanie-sport-i-silu-voli',
  'https://new.beautyhack.ru/bhmama/praktikum/skolko-vremeni-mozhno-smotret-multiki-detyam',
  'https://new.beautyhack.ru/telo/psihologiya/shkolniki-menyayuschie-mir-zhidkost-dlya-ochischeniya-okeana-i-zapret-plastika-ih-zasluga',
  'https://new.beautyhack.ru/intervyu/lukerya-ilyashenko-prihoditsya-vybirat-chipsy-ili-podtyanutye-yagodicy'
];

$artId = array_rand($arts);



$artHTML = get_old_art_content($arts[$artId]);
?>

<div class="main-content article-page" id="mainContent">
  <?php
  require('template-parts/better_in_month.php');
  ?>
  <div class="art-ajax-container" id="artAjaxContainer">
    <div class="art-page new-article" data-next="/?page=old_article" data-page-title="old article test">

      <div class="art-head container-fluid">
        <?php
        $section_head = [
          'title'   => 'Дайджест: лучшие бьюти события этой недели',
          'author'  => 'Карина Андреева',
          'publish' => 'Сегодня в 11:47 • 7 минут чтения',
          'tags'    => ['Красота', 'Стиль Жизни']
        ];
        require('template-parts/section_head.php');
        ?>
      </div>
      <?php

      // echo $arts[$artId] . ' => ' . $artId;
      // echo '<hr>';

      echo $artHTML;
      ?>
    </div>
  </div>
</div>