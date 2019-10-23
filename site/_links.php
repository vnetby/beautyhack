<?php

$dir = dirname(__FILE__);
$scan = scandir ( $dir );

$pages = [];

$exclude = ['_links.php', 'index.php', '_request.php'];

$ex_name = explode('/', $_SERVER['REQUEST_URI'] );

$dir = $ex_name[1];


foreach ( $scan as $file_name ) {
  $path = $dir . '/' . $file_name;

  if ( !is_file($file_name) || !strpos($file_name, '.php') || in_array( $file_name, $exclude ) ) continue;

  $name = explode('.', $file_name);
  $pages[] = [
    'url'  => 'http://' . $_SERVER['HTTP_HOST'] . '/?page=' . $name[0],
    'name' => $name[0]
  ];
}


foreach ( $pages as $page ) {
  $name = $page['name'];
  $link = $page['url'];
  ?>
  <ul>
    <li>
      <a href="<?= $link; ?>" target="_blank"><?= $name; ?></a>
    </li>
  </ul>
  <?php
}

?>
